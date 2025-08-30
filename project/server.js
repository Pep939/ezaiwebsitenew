import express from 'express';
import path from 'path';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security and optimization middleware
// Disable CSP to avoid blocking Vite-hashed assets; customize if needed.
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(cors());

// Serve built assets from dist/
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath, { maxAge: '1y', etag: true }));

// SPA fallback to dist/index.html
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Easy AI Solutions website running on port ${PORT}`);
  console.log(`📱 Local Preview: http://localhost:${PORT}`);
  console.log(`\n🎯 Press Ctrl+C to stop the server`);
});
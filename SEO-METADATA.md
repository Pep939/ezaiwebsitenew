# SEO & Metadata Documentation

## HOMEPAGE

### Title Tag
```
Property Management & Insurance Agency Automation | Monterey CA | EZAI Solutions
```

### Meta Description
```
AI automation for Monterey property managers (30-100 units) and insurance agencies (300-1,000 policies). Save 15-20 hours/week. $6,500-$7,500 setup, 2-3 week implementation.
```

### H1 Tag
```
Save 15-20 Hours Per Week With AI Automation
```
✅ Already implemented in Hero component

---

## PROPERTY MANAGEMENT SECTION

### Section Title (for future dedicated page)
```
Property Management Automation | Save 20+ Hours/Week | Monterey CA
```

### Meta Description (for future dedicated page)
```
Automate maintenance coordination, tenant screening, rent collection for Monterey property managers. 30-100 units. $7,500 setup. 2-3 weeks to implement. Save 20+ hours/week.
```

### H2 Tag
```
Property Management Automation
```
✅ Already in PropertyManagementDetails component

---

## INSURANCE AGENCY SECTION

### Section Title (for future dedicated page)
```
Insurance Agency Automation | Improve Retention 6-8% | Monterey CA
```

### Meta Description (for future dedicated page)
```
Automated renewal campaigns for Monterey insurance agencies. 300-1,000 policies. Improve retention from 85% to 93%. $6,500 setup. Save $60K-$150K annually.
```

### H2 Tag
```
Insurance Agency Automation
```
✅ Already in InsuranceDetails component

---

## ABOUT PAGE

### Section Title
```
About EZAI Solutions | Small Business Automation | Monterey CA
```

### H2 Tag
```
We're Not AI Consultants. We're Automation Builders.
```
✅ Already implemented in About component

---

## SCHEMA MARKUP

### Professional Service Schema
✅ Implemented in index.html
- Service Type: Property Management Automation, Insurance Agency Automation
- Area Served: Monterey County, California
- Price Range: $$$
- Contact: (831) 230-4955, admin@ezaisolutions.com

### Local Business Schema
✅ Implemented in index.html
- Business Hours: Monday-Friday 8am-6pm PST
- Location: Monterey, CA 93940
- Geo Coordinates: 36.6002, -121.8947

---

## ADDITIONAL SEO ELEMENTS

### Keywords (Meta Tag)
```
property management automation, insurance agency automation, Monterey CA, AI automation, workflow automation, property management software, insurance renewal automation
```
✅ Implemented in index.html

### Robots.txt
✅ Created at /public/robots.txt
- All pages indexable
- Sitemap location specified

### Sitemap.xml
✅ Created at /public/sitemap.xml
Includes:
- Homepage (priority 1.0)
- About section (priority 0.9)
- Property Managers section (priority 0.9)
- Insurance Agencies section (priority 0.9)
- How It Works (priority 0.8)
- Pricing (priority 0.8)
- FAQ (priority 0.7)
- Contact (priority 0.7)

### Open Graph Tags
✅ Implemented in index.html
- Facebook sharing optimized
- Twitter card optimized
- Image: og-image.png (needs to be created)

### Geographic SEO
✅ Implemented in index.html
- geo.region: US-CA
- geo.placename: Monterey County
- geo.position: 36.6002;-121.8947
- ICBM coordinates for search engines

---

## TODO: Create Social Media Image

Create an OG image at:
`/public/og-image.png`

Recommended size: 1200x630px

Should include:
- EZAI Solutions branding
- "AI Automation for Property Managers & Insurance Agencies"
- "Monterey County, CA"
- Teal/Blue gradient theme

---

## PERFORMANCE CHECKLIST

- [x] Title tags optimized (60 characters or less)
- [x] Meta descriptions optimized (155 characters or less)
- [x] H1 tags on all major sections
- [x] Schema markup for local business
- [x] Schema markup for professional service
- [x] Geographic SEO tags
- [x] Open Graph tags
- [x] Twitter Card tags
- [x] Robots.txt created
- [x] Sitemap.xml created
- [ ] OG image created (og-image.png)
- [x] Mobile-friendly meta viewport tag
- [x] Language declaration (lang="en")
- [x] Canonical URLs (via sitemap)

---

## GOOGLE BUSINESS PROFILE SETUP

Recommended setup for Google Business Profile:

**Business Name:** EZAI Solutions

**Category:** Business Automation Service

**Service Areas:**
- Monterey, CA
- Salinas, CA
- Carmel, CA
- Pacific Grove, CA
- Marina, CA
- Seaside, CA

**Services to List:**
- Property Management Automation
- Insurance Agency Automation
- Workflow Automation
- AI Integration Services

**Hours:** Monday-Friday 8:00 AM - 6:00 PM PST

**Phone:** (831) 230-4955

**Website:** https://ezaisolutions.com

**Email:** admin@ezaisolutions.com

---

## ANALYTICS TRACKING

Recommended setup:

1. **Google Analytics 4**
   - Track page views
   - Track CTA button clicks
   - Track form submissions
   - Track phone number clicks

2. **Google Tag Manager**
   - Event tracking for "Book Demo" clicks
   - Event tracking for phone number taps
   - Conversion tracking

3. **Google Search Console**
   - Submit sitemap.xml
   - Monitor search performance
   - Track keyword rankings
   - Monitor crawl errors

---

## CONVERSION TRACKING EVENTS

Key events to track:

1. **Book Demo Click** (primary CTA)
2. **Phone Number Click/Tap**
3. **Email Click**
4. **Scroll Depth** (25%, 50%, 75%, 100%)
5. **Time on Page**
6. **Section Views** (Property Mgmt, Insurance, Pricing, etc.)

---

## LOCAL SEO CITATIONS

Submit business to:

1. **Google Business Profile** (primary)
2. **Yelp** (business services category)
3. **Better Business Bureau**
4. **Monterey County Chamber of Commerce**
5. **LinkedIn Company Page**
6. **Facebook Business Page**

Ensure NAP (Name, Address, Phone) consistency across all platforms:
- Name: EZAI Solutions
- Address: Monterey, CA 93940
- Phone: (831) 230-4955

---

## CONTENT KEYWORDS TO TARGET

Primary Keywords:
- property management automation monterey
- insurance agency automation monterey
- ai automation monterey county
- workflow automation monterey ca

Secondary Keywords:
- property management software monterey
- insurance renewal automation
- maintenance coordination automation
- tenant screening automation
- insurance retention improvement

Long-tail Keywords:
- automate property management monterey county
- automated insurance renewals monterey ca
- save time property management automation
- improve insurance retention with ai

---

## PAGE SPEED OPTIMIZATION

Current optimizations:
- React with Vite (fast build tool)
- Code splitting by component
- Lazy loading for images
- Minimal dependencies

Recommended additions:
- Image optimization (WebP format)
- CDN for static assets
- Gzip compression
- Browser caching headers
- Minify CSS/JS in production build

---

## ACCESSIBILITY (A11Y)

Current features:
- Semantic HTML (header, section, footer)
- Alt text on images
- ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast (teal/blue on black)

---

Last Updated: January 22, 2025

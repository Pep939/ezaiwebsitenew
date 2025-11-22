const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">

          {/* LEFT COLUMN - Company Info */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold mb-1">
                EZ<span className="text-teal-400">AI</span> Solutions
              </h3>
              <p className="text-lg text-gray-400">AI Workflow Automation</p>
            </div>

            <p className="text-base sm:text-lg text-gray-300 mb-6">
              Serving Property Managers & Insurance Agencies in Monterey County
            </p>

            <div className="text-gray-400">
              <p className="mb-1">Monterey • Salinas • Carmel</p>
              <p>Pacific Grove • Marina • Seaside</p>
            </div>
          </div>

          {/* MIDDLE COLUMN - Navigation */}
          <div>
            <div className="mb-8">
              <h4 className="text-lg font-bold text-white mb-4">WHO WE SERVE</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#property-managers" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Property Managers
                  </a>
                </li>
                <li>
                  <a href="#insurance-agencies" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Insurance Agencies
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">COMPANY</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-300 hover:text-teal-400 transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-300 hover:text-teal-400 transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">CONTACT</h4>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:admin@ezaisolutions.com"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  admin@ezaisolutions.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-400 mb-1">Phone</p>
                <a
                  href="tel:+18312304955"
                  className="text-gray-300 hover:text-teal-400 transition-colors"
                >
                  (831) 230-4955
                </a>
              </div>
            </div>

            <a
              href="https://cal.com/ezaisolutions/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full sm:w-auto bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all hover:bg-teal-400 hover:shadow-lg hover:shadow-teal-500/30 mb-6"
            >
              Book Demo
            </a>

            <div>
              <p className="text-sm text-gray-400">
                Hours: Monday-Friday 8am-6pm PST
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-400">
            © 2025 EZAI Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 sm:gap-8">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

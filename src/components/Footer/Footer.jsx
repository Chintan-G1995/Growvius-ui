export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-[#2563EB] text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Growvius
            </h4>
            <p className="text-[#94A3B8] text-xs sm:text-sm">
              Empowering businesses with AI automation solutions to boost
              efficiency, performance, and scalable growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-[#94A3B8] text-xs sm:text-sm">
              <li>AI Chatbots</li>
              <li>Marketing Automation</li>
              <li>Process Optimization</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-1 sm:space-y-2 text-[#94A3B8] text-xs sm:text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Support</h4>
            <ul className="space-y-1 sm:space-y-2 text-[#94A3B8] text-xs sm:text-sm">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Documentation</li>
              <li>API</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-[#64748B] text-xs sm:text-sm border-t border-gray-700 pt-6">
          © 2026 Growvius. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

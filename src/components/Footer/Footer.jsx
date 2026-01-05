export default function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-[#2563EB] text-xl font-bold mb-4">
              Growvius
            </h4>
            <p className="text-[#94A3B8] text-sm">
              Empowering businesses with AI automation solutions to boost
              efficiency, performance, and scalable growth.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li>AI Chatbots</li>
              <li>Marketing Automation</li>
              <li>Process Optimization</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-[#94A3B8] text-sm">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Documentation</li>
              <li>API</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-[#64748B] text-sm border-t border-gray-700 pt-6">
          © 2026 Growvius. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

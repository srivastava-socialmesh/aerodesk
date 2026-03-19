import Link from 'next/link'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation with logo link */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition">
              AERO<span className="text-[#fef3c7]">DESK</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/promotions" className="text-gray-700 hover:text-blue-600">Promotions</Link>
              <Link href="/our-network" className="text-gray-700 hover:text-blue-600">Our Network</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link href="/media" className="text-gray-700 hover:text-blue-600">Media</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
              <Link href="/register">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="text-blue-100 mt-2">Last updated: March 1, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the AeroDesk platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

          <h2>2. Description of Service</h2>
          <p>AeroDesk provides a marketplace platform connecting travelers with private aviation operators. We facilitate the booking process but do not operate aircraft ourselves.</p>

          <h2>3. User Accounts</h2>
          <p>To use certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account.</p>

          <h2>4. Booking and Payments</h2>
          <p>All payments are made directly between users and operators. AeroDesk does not handle funds and acts solely as a facilitator. Booking confirmations are subject to operator acceptance.</p>

          <h2>5. Cancellations and Refunds</h2>
          <p>Cancellation policies vary by operator and are displayed at the time of booking. Refunds, if applicable, are processed directly by the operator.</p>

          <h2>6. User Conduct</h2>
          <p>You agree to use the platform only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the service.</p>

          <h2>7. Operator Responsibilities</h2>
          <p>Operators are responsible for maintaining accurate aircraft information, complying with all regulations, and fulfilling booked charters.</p>

          <h2>8. Limitation of Liability</h2>
          <p>AeroDesk is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our platform or services booked through it.</p>

          <h2>9. Intellectual Property</h2>
          <p>All content on the AeroDesk platform, including logos, text, and software, is our property and protected by intellectual property laws.</p>

          <h2>10. Modifications to Service</h2>
          <p>We reserve the right to modify or discontinue any part of our service without prior notice.</p>

          <h2>11. Governing Law</h2>
          <p>These terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Mumbai.</p>

          <h2>12. Contact Information</h2>
          <p>For questions about these Terms, please contact us at legal@aerodesk.com.</p>
        </div>
      </div>

      {/* Footer with logo link */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-2xl font-bold hover:text-blue-400 transition">
                AERO<span className="text-[#fef3c7]">DESK</span>
              </Link>
              <p className="text-gray-400 text-sm mt-4">India's most organized private aviation platform.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/how-it-works">How It Works</Link></li>
                <li><Link href="/operators">For Operators</Link></li>
                <li><Link href="/corporate">For Corporates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/safety">Safety Standards</Link></li>
                <li><Link href="/gst">GST Compliance</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+91 9897 54038</li>
                <li>info@aerodesk.com</li>
                <li>Mumbai, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 AERODESK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

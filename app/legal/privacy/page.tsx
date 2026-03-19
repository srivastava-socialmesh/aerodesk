import Link from 'next/link'

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="text-blue-100 mt-2">Last updated: March 1, 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly, such as when you create an account, make a booking, or contact support. This may include your name, email, phone number, and payment information.</p>

          <h2>2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Process and manage your bookings</li>
            <li>Communicate with you about our services</li>
            <li>Improve and personalize your experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We share your information with operators to fulfill bookings. We do not sell your personal information to third parties.</p>

          <h2>4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.</p>

          <h2>5. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. Contact us at privacy@aerodesk.com to exercise these rights.</p>

          <h2>6. Cookies</h2>
          <p>We use cookies to enhance your experience. You can control cookie settings through your browser preferences.</p>

          <h2>7. Changes to Policy</h2>
          <p>We may update this policy periodically. Continued use of our services after changes constitutes acceptance of the revised policy.</p>

          <h2>8. Contact Us</h2>
          <p>For privacy-related questions, please contact us at privacy@aerodesk.com.</p>
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

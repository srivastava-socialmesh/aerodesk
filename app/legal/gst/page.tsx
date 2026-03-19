import Link from 'next/link'

export default function GSTPage() {
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GST Compliance</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Complete tax compliance for all your private aviation needs
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
          <h2>GST on Private Charter Services</h2>
          <p>Private charter services in India are subject to Goods and Services Tax (GST) at applicable rates. AeroDesk ensures complete tax compliance for all bookings made through our platform.</p>

          <h3>GST Rates</h3>
          <ul>
            <li><strong>Charter Flights:</strong> 18% GST</li>
            <li><strong>Empty Leg Seats:</strong> 5% GST</li>
            <li><strong>Hotel Accommodation:</strong> 12% GST</li>
            <li><strong>Subscription Services:</strong> 18% GST</li>
          </ul>

          <h3>GST Invoicing</h3>
          <p>All transactions generate GST-compliant invoices with:</p>
          <ul>
            <li>Unique invoice number</li>
            <li>Operator's GSTIN</li>
            <li>Customer's GSTIN (if applicable)</li>
            <li>SAC code classification</li>
            <li>CGST/SGST/IGST breakup</li>
          </ul>

          <h3>Input Tax Credit</h3>
          <p>Registered businesses can claim Input Tax Credit on charter services used for business purposes. Ensure your GSTIN is correctly entered during booking to generate compliant invoices.</p>

          <h3>GST Verification</h3>
          <p>All operators on our platform undergo GST verification:</p>
          <ul>
            <li>GSTIN validation with government database</li>
            <li>Periodic reverification</li>
            <li>Compliance monitoring</li>
          </ul>

          <h3>E-Way Bills</h3>
          <p>For eligible transactions, e-way bills are automatically generated and shared with relevant parties.</p>

          <h3>Quarterly/HSN Summary</h3>
          <p>Registered users can download consolidated GST reports for their filings.</p>
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

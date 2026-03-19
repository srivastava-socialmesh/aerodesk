import Link from 'next/link'

export default function SafetyPage() {
  const standards = [
    {
      title: "Operator Certification",
      items: [
        "All operators must hold valid DGCA certification",
        "NSOP license verification required",
        "Regular compliance audits conducted",
        "Insurance verification and validation"
      ]
    },
    {
      title: "Aircraft Maintenance",
      items: [
        "Strict adherence to maintenance schedules",
        "Real-time maintenance tracking",
        "Pre-flight inspection reports",
        "Emergency procedure documentation"
      ]
    },
    {
      title: "Crew Qualifications",
      items: [
        "Valid pilot licenses and medical certificates",
        "Minimum flight hour requirements",
        "Regular proficiency checks",
        "Crew background verification"
      ]
    },
    {
      title: "Operational Safety",
      items: [
        "Weather monitoring systems",
        "Risk assessment protocols",
        "Emergency response plans",
        "Safety management systems"
      ]
    }
  ]

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Safety Standards</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Your safety is our highest priority. We maintain rigorous standards across our network.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Compliant Operators</div>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="text-4xl font-bold text-blue-600">5000+</div>
            <div className="text-gray-600">Safety Checks</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">Zero</div>
            <div className="text-gray-600">Major Incidents</div>
          </div>
        </div>
      </div>

      {/* Standards Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {standards.map((standard, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{standard.title}</h3>
              <ul className="space-y-3">
                {standard.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-green-500 mr-3">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Compliance Badges */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Regulatory Compliance</h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {['DGCA', 'NSOP', 'BCAS', 'AAI'].map((badge, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow">
                <div className="text-2xl font-bold text-blue-600 mb-2">{badge}</div>
                <p className="text-sm text-gray-600">Certified Partner</p>
              </div>
            ))}
          </div>
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

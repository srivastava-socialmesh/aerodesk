'use client'

import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      title: "Flight Request & Lifecycle Tracking",
      description: "Create charter requests, specify flight and accommodation needs, and maintain visibility across the full request lifecycle.",
      icon: "✈️",
      details: [
        "Real-time request status updates",
        "Automated notifications",
        "Document management",
        "History tracking"
      ]
    },
    {
      title: "Operator Quotation & Fleet Management",
      description: "Operators can respond to charter requests with structured quotations, manage fleet availability, coordinate crew stays and logistics.",
      icon: "📋",
      details: [
        "Automated quote generation",
        "Fleet availability calendar",
        "Crew scheduling",
        "Maintenance tracking"
      ]
    },
    {
      title: "Corporate Travel Desk",
      description: "Corporate users can create charter requests for employees, request jet seat allocations, and coordinate accommodation needs.",
      icon: "🏢",
      details: [
        "Multi-level approval workflows",
        "Budget management",
        "Policy enforcement",
        "Expense tracking"
      ]
    },
    {
      title: "Available Jet Seat Allocation",
      description: "Access seats on select private jet flights operating on predefined routes at discounted rates.",
      icon: "🪑",
      details: [
        "Real-time seat availability",
        "Discounted empty leg deals",
        "Instant booking",
        "Passenger manifest"
      ]
    },
    {
      title: "Hotel Partner Accommodation",
      description: "Hotels maintain inventory visibility, configure stay availability, and handle accommodation requests tied to charter activity.",
      icon: "🏨",
      details: [
        "Room inventory management",
        "Automated booking confirmations",
        "Special requests handling",
        "Rate management"
      ]
    },
    {
      title: "AI-Assisted Compliance Review",
      description: "AI-assisted logic evaluates workflow inputs and highlights potential inconsistencies for administrative review.",
      icon: "🤖",
      details: [
        "Automated GST verification",
        "Risk assessment scoring",
        "Compliance checks",
        "Audit trail generation"
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Platform Features</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Everything you need to manage private aviation, all in one place
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.details.map((detail, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-blue-600 mr-2">✓</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#fef3c7] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to experience these features?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Join AeroDesk today and transform how you manage private aviation.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/register">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
                Get Started
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
                Contact Sales
              </button>
            </Link>
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
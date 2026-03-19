'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState('traveler')

  const steps = {
    traveler: [
      {
        number: 1,
        title: "Create Request",
        description: "Submit your charter requirements including origin, destination, date, and passenger count.",
        details: ["Choose aircraft type", "Specify catering preferences", "Request hotel accommodations", "Set budget range"]
      },
      {
        number: 2,
        title: "Receive Quotes",
        description: "Operators bid on your request with competitive quotes and aircraft options.",
        details: ["Compare multiple quotes", "Review aircraft details", "Check operator ratings", "Evaluate total cost"]
      },
      {
        number: 3,
        title: "Select & Book",
        description: "Choose the best quote, complete payment, and receive instant confirmation.",
        details: ["Secure online payment", "Instant booking confirmation", "Digital invoice", "24/7 support access"]
      },
      {
        number: 4,
        title: "Fly Premium",
        description: "Enjoy your private charter experience with complete peace of mind.",
        details: ["Real-time flight tracking", "Crew coordination", "Ground transportation", "Post-flight feedback"]
      }
    ],
    operator: [
      {
        number: 1,
        title: "Register Your Fleet",
        description: "Create your operator profile and add your aircraft to the platform.",
        details: ["Company verification", "Aircraft registration", "Document upload", "GST verification"]
      },
      {
        number: 2,
        title: "Receive RFQs",
        description: "Get notified when charter requests match your fleet capabilities.",
        details: ["Real-time notifications", "Route matching", "Aircraft suitability", "Custom filters"]
      },
      {
        number: 3,
        title: "Submit Quotes",
        description: "Respond to requests with competitive pricing and aircraft options.",
        details: ["Dynamic pricing tools", "Crew availability check", "Empty leg optimization", "Quote templates"]
      },
      {
        number: 4,
        title: "Manage Operations",
        description: "Coordinate crew, track flights, and manage payments seamlessly.",
        details: ["Fleet calendar", "Crew scheduling", "Payment tracking", "Performance analytics"]
      }
    ],
    corporate: [
      {
        number: 1,
        title: "Set Up Travel Desk",
        description: "Configure your corporate profile with budget limits and approval workflows.",
        details: ["Multi-level approvals", "Budget allocation", "Policy settings", "Cost center setup"]
      },
      {
        number: 2,
        title: "Employee Requests",
        description: "Employees submit travel requests for approval through the platform.",
        details: ["Automated request forms", "Policy compliance check", "Budget verification", "Manager notifications"]
      },
      {
        number: 3,
        title: "Approval Workflow",
        description: "Managers and finance teams review and approve travel requests.",
        details: ["Multi-tier approval", "Real-time status tracking", "Budget monitoring", "Audit trail"]
      },
      {
        number: 4,
        title: "Booking & Reporting",
        description: "Approved requests are automatically booked with comprehensive reporting.",
        details: ["Automated booking", "Expense tracking", "Usage analytics", "Compliance reports"]
      }
    ]
  }

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How AeroDesk Works</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Simple, transparent, and efficient - from request to departure
          </p>
        </div>
      </div>

      {/* Role Tabs */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab('traveler')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'traveler'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            For Travelers
          </button>
          <button
            onClick={() => setActiveTab('operator')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'operator'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            For Operators
          </button>
          <button
            onClick={() => setActiveTab('corporate')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'corporate'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            For Corporates
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps[activeTab as keyof typeof steps].map((step) => (
            <div key={step.number} className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#fef3c7] rounded-full flex items-center justify-center text-2xl font-bold text-gray-900">
                {step.number}
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <span className="text-blue-600 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">See AeroDesk in Action</h2>
              <p className="text-gray-600 mb-6">Watch our 2-minute demo to see how easy it is to book your next charter.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Live booking demonstration</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Operator dashboard walkthrough</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  <span>Corporate travel desk features</span>
                </li>
              </ul>
              <Link href="/register">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                  Get Started
                </button>
              </Link>
            </div>
            <div className="bg-gray-300 h-80 rounded-2xl flex items-center justify-center text-gray-700">
              [Demo Video Placeholder]
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: "How far in advance should I book a charter?",
              a: "We recommend booking at least 48-72 hours in advance, though last-minute bookings are often available, especially for empty leg flights."
            },
            {
              q: "What is included in the quoted price?",
              a: "Quotes typically include aircraft rental, fuel, crew, basic catering, and insurance. Airport fees and additional services may be extra."
            },
            {
              q: "Can I make changes to my booking?",
              a: "Yes, you can modify your booking subject to availability and operator policies. Changes can be made through your dashboard."
            },
            {
              q: "How does payment work?",
              a: "Payments are made directly to operators through secure bank transfers. AeroDesk never touches your funds."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#fef3c7] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers who trust AeroDesk for their private aviation needs.</p>
          <Link href="/register">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
              Create Your Account
            </button>
          </Link>
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
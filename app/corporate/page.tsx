'use client'

import Link from 'next/link'

export default function CorporatePage() {
  const features = [
    {
      title: "Centralized Travel Management",
      description: "Manage all employee travel requests from a single dashboard with complete visibility.",
      icon: "🎯",
      benefits: ["Single platform for all requests", "Real-time status tracking", "Centralized billing"]
    },
    {
      title: "Multi-Level Approval Workflows",
      description: "Configure custom approval chains based on department, cost center, or trip value.",
      icon: "✅",
      benefits: ["Manager approvals", "Finance verification", "Executive oversight"]
    },
    {
      title: "Budget & Cost Center Control",
      description: "Set budgets by department, track spending, and prevent overspending automatically.",
      icon: "💰",
      benefits: ["Real-time budget tracking", "Automated alerts", "Cost center allocation"]
    },
    {
      title: "Travel Policy Enforcement",
      description: "Define and enforce travel policies automatically based on employee role and destination.",
      icon: "📋",
      benefits: ["Policy compliance checks", "Automatic approvals within limits", "Exception handling"]
    },
    {
      title: "Detailed Analytics & Reporting",
      description: "Get insights into travel spending patterns, policy compliance, and cost savings.",
      icon: "📊",
      benefits: ["Custom reports", "Spend analysis", "Compliance tracking"]
    },
    {
      title: "Dedicated Account Management",
      description: "Enterprise clients receive personalized support and account management.",
      icon: "🤝",
      benefits: ["24/7 priority support", "Quarterly business reviews", "Custom integrations"]
    }
  ]

  const plans = [
    {
      name: "Starter",
      price: "Custom",
      description: "For small teams getting started with corporate travel",
      features: [
        "Up to 50 employees",
        "Basic approval workflow",
        "Email support",
        "Monthly reports"
      ],
      cta: "Contact Sales"
    },
    {
      name: "Professional",
      price: "Custom",
      description: "For growing companies with multiple departments",
      features: [
        "Up to 200 employees",
        "Multi-level approvals",
        "Cost center tracking",
        "Priority support",
        "API access"
      ],
      cta: "Request Demo",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with complex requirements",
      features: [
        "Unlimited employees",
        "Custom approval workflows",
        "SLA guarantee",
        "Dedicated account manager",
        "Custom integrations"
      ],
      cta: "Contact Sales"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Corporate Travel Solutions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Streamline your company's private aviation needs with our comprehensive corporate travel desk platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register?type=corporate">
              <button className="bg-[#fef3c7] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#fde68a] text-lg">
                Set Up Corporate Account
              </button>
            </Link>
            <Link href="#demo">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
                Schedule Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Corporate Clients</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-3xl font-bold text-blue-600">₹100Cr+</div>
            <div className="text-gray-600">Annual Savings</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-3xl font-bold text-blue-600">30%</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="text-center border-l border-gray-200">
            <div className="text-3xl font-bold text-blue-600">99.9%</div>
            <div className="text-gray-600">On-Time Performance</div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Why Companies Choose AeroDesk</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Enterprise-grade features designed for modern corporate travel management
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <span className="text-blue-600 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works - Corporate */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Corporate Travel Works</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Configure", description: "Set up your org structure, budgets, and policies" },
              { step: 2, title: "Employees Request", description: "Team members submit travel requests" },
              { step: 3, title: "Approvals", description: "Managers and finance approve within budget" },
              { step: 4, title: "Book & Track", description: "Approved trips are booked automatically" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Approval Workflow Demo */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Multi-Level Approval Workflow</h2>
            <p className="text-gray-600 mb-6">Configure custom approval chains that match your organization structure.</p>
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3">1</div>
                <div className="flex-1">
                  <p className="font-semibold">Employee submits request</p>
                  <p className="text-sm text-gray-500">Trip details and cost estimates</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-8 h-8 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mr-3">2</div>
                <div className="flex-1">
                  <p className="font-semibold">Manager approval</p>
                  <p className="text-sm text-gray-500">Business justification review</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-3">3</div>
                <div className="flex-1">
                  <p className="font-semibold">Cost center owner</p>
                  <p className="text-sm text-gray-500">Budget verification</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-white rounded-lg shadow">
                <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mr-3">4</div>
                <div className="flex-1">
                  <p className="font-semibold">Finance verification</p>
                  <p className="text-sm text-gray-500">Payment processing</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 h-96 rounded-2xl flex items-center justify-center text-white text-2xl">
            [Interactive Demo]
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Flexible Plans for Every Company</h2>
          <p className="text-xl text-gray-600 text-center mb-12">Custom solutions tailored to your needs</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.highlighted ? 'ring-2 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    RECOMMENDED
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <span className="text-blue-600 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      plan.highlighted
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-[#fef3c7] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="text-5xl mb-4">"</div>
            <p className="text-2xl text-gray-800 mb-6">
              AeroDesk's corporate travel desk has revolutionized how we manage executive travel. We've saved over 30% on our aviation budget while maintaining complete control and visibility.
            </p>
            <div>
              <p className="font-bold text-lg">— Priya Menon</p>
              <p className="text-gray-600">Travel Manager, Tata Motors</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Corporate Travel?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join India's leading companies that trust AeroDesk for their private aviation needs.</p>
          <Link href="/register?type=corporate">
            <button className="bg-[#fef3c7] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#fde68a] text-lg">
              Set Up Corporate Account
            </button>
          </Link>
        </div>
      </div>

      {/* Footer with logo link */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
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

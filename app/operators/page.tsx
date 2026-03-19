'use client'

import Link from 'next/link'

export default function OperatorsPage() {
  const benefits = [
    {
      title: "Increase Fleet Utilization",
      description: "Fill empty legs and maximize aircraft usage with our extensive customer network.",
      icon: "📈",
      stats: "30% average increase"
    },
    {
      title: "Streamlined Operations",
      description: "Manage quotations, crew scheduling, and maintenance all in one place.",
      icon: "⚙️",
      stats: "15+ hours saved weekly"
    },
    {
      title: "Reach More Clients",
      description: "Connect with corporate travelers, agencies, and individual customers across India.",
      icon: "🌐",
      stats: "1000+ active clients"
    },
    {
      title: "Automated Quotations",
      description: "Respond to RFQs quickly with our automated quotation system.",
      icon: "⚡",
      stats: "2.4hr avg response time"
    },
    {
      title: "Payment Processing",
      description: "Secure and timely payments with transparent fee structure.",
      icon: "💰",
      stats: "99.9% on-time payments"
    },
    {
      title: "Performance Analytics",
      description: "Track your fleet performance, revenue, and customer satisfaction.",
      icon: "📊",
      stats: "Real-time insights"
    }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "Free",
      period: "forever",
      features: [
        "Up to 3 aircraft",
        "Basic RFQ responses",
        "Email support",
        "Standard analytics"
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "₹9,999",
      period: "per month",
      features: [
        "Up to 10 aircraft",
        "Priority RFQ access",
        "Advanced analytics",
        "API access",
        "Dedicated account manager"
      ],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      features: [
        "Unlimited aircraft",
        "White-label options",
        "Custom integrations",
        "SLA guarantee",
        "24/7 priority support"
      ],
      cta: "Contact Sales",
      highlighted: false
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Grow Your Charter Business with AeroDesk</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join India's fastest growing private aviation platform and connect with thousands of qualified customers.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register?type=operator">
              <button className="bg-[#fef3c7] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#fde68a] text-lg">
                Become an Operator
              </button>
            </Link>
            <Link href="#demo">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
                Request Demo
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Active Operators</div>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="text-4xl font-bold text-blue-600">₹50Cr+</div>
            <div className="text-gray-600">Annual Bookings</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Why Partner with AeroDesk?</h2>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          The tools and support you need to succeed in the private aviation market
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 mb-4">{benefit.description}</p>
              <p className="text-blue-600 font-semibold text-sm">{benefit.stats}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Getting Started is Easy</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: 1, title: "Sign Up", description: "Create your operator account" },
              { step: 2, title: "Add Aircraft", description: "List your fleet with details" },
              { step: 3, title: "Get Verified", description: "Complete GST verification" },
              { step: 4, title: "Start Earning", description: "Receive and respond to RFQs" }
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

      {/* Pricing */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-gray-600 text-center mb-12">Choose the plan that fits your business</p>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                plan.highlighted ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 text-sm ml-2">/{plan.period}</span>
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

      {/* Testimonial */}
      <div className="bg-[#fef3c7] py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <div className="text-5xl mb-4">"</div>
            <p className="text-2xl text-gray-800 mb-6">
              AeroDesk has transformed our business. We've increased our fleet utilization by 40% and reduced empty leg losses significantly. The platform is intuitive and their support team is exceptional.
            </p>
            <div>
              <p className="font-bold text-lg">— Ajay Kumar</p>
              <p className="text-gray-600">Director, Delta Air Charter</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to grow your charter business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join AeroDesk today and start receiving qualified charter requests.</p>
          <Link href="/register?type=operator">
            <button className="bg-[#fef3c7] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#fde68a] text-lg">
              Become an Operator Now
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
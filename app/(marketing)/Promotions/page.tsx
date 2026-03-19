'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function PromotionsPage() {
  const promotions = [
    {
      id: 1,
      title: "Summer Special: 20% Off Empty Legs",
      description: "Book empty leg flights this summer and save 20% on select routes. Perfect for spontaneous getaways!",
      code: "SUMMER20",
      validUntil: "2024-08-31",
      image: "🏖️",
      type: "empty-leg"
    },
    {
      id: 2,
      title: "Corporate Travel: Buy 5 Charters, Get 1 Free",
      description: "For corporate clients booking 5 charters within 12 months, receive one complimentary charter.",
      code: "CORP5+1",
      validUntil: "2024-12-31",
      image: "🏢",
      type: "corporate"
    },
    {
      id: 3,
      title: "First-Time Customer: ₹50,000 Off",
      description: "New to AeroDesk? Get ₹50,000 off your first charter booking.",
      code: "WELCOME50K",
      validUntil: "2024-09-30",
      image: "🎁",
      type: "welcome"
    },
    {
      id: 4,
      title: "Hotel + Charter Bundle: Save 25%",
      description: "Book both charter and hotel through our platform and save 25% on your total stay.",
      code: "FLYSTAY25",
      validUntil: "2024-10-31",
      image: "🏨",
      type: "bundle"
    },
    {
      id: 5,
      title: "Weekend Getaway: Mumbai to Goa",
      description: "Special weekend rates on Mumbai-Goa route. Perfect for a quick escape!",
      code: "WEEKENDGOA",
      validUntil: "2024-08-31",
      image: "🌊",
      type: "route"
    },
    {
      id: 6,
      title: "Refer a Friend: Earn ₹25,000",
      description: "Refer a friend to AeroDesk and both get ₹25,000 off your next booking.",
      code: "FRIEND25K",
      validUntil: "2024-12-31",
      image: "👥",
      type: "referral"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Same as homepage */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold">
              AERO<span className="text-[#fef3c7]">DESK</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/promotions" className="text-blue-600 font-semibold">Promotions</Link>
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

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Exclusive Promotions & Deals</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Save big on your next private charter with our limited-time offers
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-full">All Deals</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Empty Legs</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Corporate</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Welcome Offers</button>
          <button className="px-6 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Bundles</button>
        </div>
      </div>

      {/* Promotions Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div key={promo.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center text-7xl">
                {promo.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{promo.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">LIMITED</span>
                </div>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-gray-500 mb-1">Promo Code</p>
                  <p className="text-2xl font-mono font-bold text-blue-600">{promo.code}</p>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>Valid until: {new Date(promo.validUntil).toLocaleDateString()}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 mt-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Out on These Deals!</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Sign up now to get notified about new promotions and exclusive offers
          </p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900"
            />
            <button className="bg-[#fef3c7] text-gray-900 px-6 py-3 rounded-r-lg font-semibold hover:bg-[#fde68a]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">AERO<span className="text-[#fef3c7]">DESK</span></h3>
              <p className="text-gray-400 text-sm">India's most organized private aviation platform.</p>
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
        </div>
      </footer>
    </div>
  )
}
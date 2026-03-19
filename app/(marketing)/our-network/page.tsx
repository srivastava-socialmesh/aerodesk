'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function OurNetworkPage() {
  const operators = [
    { id: 1, name: "Delta Air Charter", location: "Mumbai", fleet: 12, rating: 4.8, image: "✈️", established: "2015" },
    { id: 2, name: "Bombardier Executive", location: "Delhi", fleet: 8, rating: 4.9, image: "✈️", established: "2018" },
    { id: 3, name: "India Jet Charter", location: "Bangalore", fleet: 15, rating: 4.7, image: "✈️", established: "2012" },
    { id: 4, name: "Maharashtra Aviation", location: "Pune", fleet: 6, rating: 4.6, image: "✈️", established: "2020" },
    { id: 5, name: "Royal Jets", location: "Jaipur", fleet: 5, rating: 4.5, image: "✈️", established: "2019" },
    { id: 6, name: "Coastal Air", location: "Goa", fleet: 4, rating: 4.8, image: "✈️", established: "2021" },
    { id: 7, name: "Southern Skies", location: "Chennai", fleet: 7, rating: 4.7, image: "✈️", established: "2017" },
    { id: 8, name: "Eastern Wings", location: "Kolkata", fleet: 5, rating: 4.6, image: "✈️", established: "2016" },
    { id: 9, name: "Desert Aviation", location: "Ahmedabad", fleet: 4, rating: 4.5, image: "✈️", established: "2022" },
    { id: 10, name: "HighFlyer", location: "Hyderabad", fleet: 6, rating: 4.7, image: "✈️", established: "2019" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation - Logo links to homepage */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition">
              AERO<span className="text-[#fef3c7]">DESK</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/promotions" className="text-gray-700 hover:text-blue-600">Promotions</Link>
              <Link href="/our-network" className="text-blue-600 font-semibold">Our Network</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Operator Network</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Connected with India's finest private aviation operators
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">100+</div>
            <div className="text-gray-600">Operators</div>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="text-4xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Aircraft</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600">25+</div>
            <div className="text-gray-600">Cities</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-between items-center">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">All</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">North</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">South</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">East</button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-100">West</button>
          </div>
          <div className="flex gap-2">
            <select className="border rounded-lg px-4 py-2">
              <option>Sort by: Rating</option>
              <option>Sort by: Fleet Size</option>
              <option>Sort by: Established</option>
            </select>
          </div>
        </div>
      </div>

      {/* Operators Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {operators.map((op) => (
            <div key={op.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-6xl">
                {op.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{op.name}</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    ★ {op.rating}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">📍 {op.location}</p>
                <p className="text-gray-600 mb-2">✈️ Fleet: {op.fleet} aircraft</p>
                <p className="text-gray-600 mb-4">📅 Est. {op.established}</p>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Pan India Coverage</h2>
              <p className="text-gray-300 mb-6">Our operators are strategically located across all major cities in India, ensuring you're never far from your next charter.</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-2xl mr-4">✈️</div>
                  <div>
                    <h3 className="font-semibold">North India</h3>
                    <p className="text-gray-400">Delhi, Jaipur, Lucknow, Chandigarh</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-2xl mr-4">✈️</div>
                  <div>
                    <h3 className="font-semibold">South India</h3>
                    <p className="text-gray-400">Bangalore, Chennai, Hyderabad, Kochi</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center text-2xl mr-4">✈️</div>
                  <div>
                    <h3 className="font-semibold">West India</h3>
                    <p className="text-gray-400">Mumbai, Pune, Goa, Ahmedabad</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-800 h-96 rounded-2xl flex items-center justify-center text-gray-400">
              [Interactive Map Coming Soon]
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-[#fef3c7] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Join Our Network?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">Become an AeroDesk partner and reach thousands of potential clients.</p>
          <Link href="/register?type=operator">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
              Apply as Operator
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
                <li><Link href="/features" className="hover:text-white">Features</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/operators" className="hover:text-white">For Operators</Link></li>
                <li><Link href="/corporate" className="hover:text-white">For Corporates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/safety" className="hover:text-white">Safety Standards</Link></li>
                <li><Link href="/gst" className="hover:text-white">GST Compliance</Link></li>
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
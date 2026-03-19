'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function MediaPage() {
  const pressReleases = [
    {
      id: 1,
      title: "AeroDesk Launches Nationwide Operator Network",
      date: "2024-03-10",
      summary: "Platform connects 100+ operators across India, making private aviation more accessible.",
      source: "Economic Times",
      image: "📰"
    },
    {
      id: 2,
      title: "AeroDesk Raises $5M in Series A Funding",
      date: "2024-02-15",
      summary: "Investment to accelerate growth and enhance platform capabilities.",
      source: "TechCrunch",
      image: "💰"
    },
    {
      id: 3,
      title: "Corporate Travel Desk Feature Launched",
      date: "2024-01-20",
      summary: "New feature streamlines corporate travel with multi-level approvals and budget tracking.",
      source: "Business Standard",
      image: "🏢"
    }
  ]

  const mediaCoverage = [
    { id: 1, outlet: "CNBC TV18", title: "Interview with AeroDesk CEO", date: "2024-03-05", image: "📺" },
    { id: 2, outlet: "Forbes India", title: "30 Under 30: AeroDesk Founders", date: "2024-02-10", image: "📰" },
    { id: 3, outlet: "YourStory", title: "How AeroDesk is Disrupting Private Aviation", date: "2024-01-15", image: "📱" },
  ]

  const resources = [
    { name: "Media Kit", description: "Logos, brand guidelines, and assets", icon: "📁" },
    { name: "Press Photos", description: "Executive photos and platform screenshots", icon: "📸" },
    { name: "Fact Sheet", description: "Company facts and statistics", icon: "📊" },
    { name: "Press Contact", description: "Reach our PR team", icon: "📧" },
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
              <Link href="/media" className="text-blue-600 font-semibold">Media</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Media Center</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Press releases, media coverage, and resources for journalists
          </p>
        </div>
      </div>

      {/* Press Releases */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Latest Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
              <div className="flex items-start">
                <div className="text-4xl mr-6">{item.image}</div>
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-600 font-semibold">{item.source}</span>
                    <span className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <button className="text-blue-600 font-semibold hover:underline">Read More →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media Coverage */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Media Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {mediaCoverage.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow p-6 text-center">
                <div className="text-5xl mb-4">{item.image}</div>
                <h3 className="font-bold mb-2">{item.outlet}</h3>
                <p className="text-gray-600 text-sm mb-3">{item.title}</p>
                <p className="text-xs text-gray-500">{new Date(item.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Media Resources</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {resources.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition cursor-pointer">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="bg-[#fef3c7] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Inquiries</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">For press-related questions, please contact our media relations team.</p>
          <div className="flex justify-center">
            <Link href="/contact">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800">
                Contact PR Team
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
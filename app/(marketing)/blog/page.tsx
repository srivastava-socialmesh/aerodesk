'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Rise of Private Aviation in India",
      excerpt: "How the private jet market is evolving in India's major metropolitan cities.",
      author: "Rahul Sharma",
      date: "2024-03-15",
      readTime: "5 min read",
      category: "Industry Trends",
      image: "✈️",
      slug: "rise-of-private-aviation-india"
    },
    {
      id: 2,
      title: "Empty Leg Flights: Your Guide to Luxury Travel at Discounted Rates",
      excerpt: "Everything you need to know about booking empty leg flights and saving up to 75%.",
      author: "Priya Patel",
      date: "2024-03-10",
      readTime: "8 min read",
      category: "Travel Tips",
      image: "🪑",
      slug: "empty-leg-flights-guide"
    },
    {
      id: 3,
      title: "Corporate Travel Trends 2024: Why Companies Are Choosing Private Charters",
      excerpt: "An analysis of how businesses are optimizing executive travel with private aviation.",
      author: "Anand Menon",
      date: "2024-03-05",
      readTime: "6 min read",
      category: "Corporate",
      image: "🏢",
      slug: "corporate-travel-trends-2024"
    },
    {
      id: 4,
      title: "Safety First: How AeroDesk Ensures Compliance",
      excerpt: "Our commitment to safety and regulatory compliance in every charter.",
      author: "Neha Gupta",
      date: "2024-02-28",
      readTime: "4 min read",
      category: "Safety",
      image: "🛡️",
      slug: "safety-compliance-aerodesk"
    },
    {
      id: 5,
      title: "Top 5 Private Jet Routes in India",
      excerpt: "Discover the most popular private aviation routes and why they're in demand.",
      author: "Vikram Singh",
      date: "2024-02-20",
      readTime: "7 min read",
      category: "Routes",
      image: "🗺️",
      slug: "top-private-jet-routes-india"
    },
    {
      id: 6,
      title: "A Guide to GST on Private Charters",
      excerpt: "Understanding tax implications when booking private aviation services.",
      author: "CA Rajesh Kumar",
      date: "2024-02-15",
      readTime: "10 min read",
      category: "Compliance",
      image: "📊",
      slug: "gst-guide-private-charters"
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
              <Link href="/blog" className="text-blue-600 font-semibold">Blog</Link>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">AeroDesk Blog</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Insights, news, and updates from the world of private aviation
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-full">All</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Industry Trends</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Travel Tips</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Corporate</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Safety</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Routes</button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full hover:bg-gray-100">Compliance</button>
        </div>
      </div>

      {/* Featured Post */}
      <div className="container mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-purple-600 p-12 flex items-center justify-center text-8xl">
              📰
            </div>
            <div className="md:w-3/5 p-8">
              <span className="text-sm text-blue-600 font-semibold">FEATURED</span>
              <h2 className="text-3xl font-bold mt-2 mb-4">The Future of Private Aviation in India</h2>
              <p className="text-gray-600 mb-4">An in-depth look at how the private aviation market is projected to grow 15% annually over the next decade, with insights from industry leaders.</p>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>By Editorial Team</span>
                <span className="mx-2">•</span>
                <span>Mar 18, 2024</span>
                <span className="mx-2">•</span>
                <span>12 min read</span>
              </div>
              <Link href="/blog/future-private-aviation-india">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  Read Article →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center text-6xl">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{post.category}</span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-blue-600">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12 space-x-2">
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">←</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">2</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">3</button>
          <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">→</button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Get the latest aviation insights delivered to your inbox.</p>
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
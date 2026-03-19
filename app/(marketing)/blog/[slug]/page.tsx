'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // In real app, fetch post based on slug
  const post = {
    title: "The Rise of Private Aviation in India",
    content: `
      <p>The private aviation sector in India has experienced remarkable growth over the past decade. With economic expansion and increasing business travel demands, more individuals and corporations are turning to private charters for their travel needs.</p>
      
      <h2>Market Overview</h2>
      <p>India's private aviation market is currently valued at over $500 million and is projected to grow at a CAGR of 15% through 2030. Major metropolitan cities like Mumbai, Delhi, and Bangalore account for 70% of all charter movements.</p>
      
      <h2>Key Drivers</h2>
      <p>Several factors are contributing to this growth:</p>
      <ul>
        <li>Rising number of high-net-worth individuals</li>
        <li>Increased corporate travel requirements</li>
        <li>Improved aviation infrastructure</li>
        <li>Growing tourism to exclusive destinations</li>
      </ul>
      
      <h2>Future Outlook</h2>
      <p>With the government's focus on regional connectivity and the entry of new operators, the private aviation sector is poised for exponential growth. AeroDesk is at the forefront of this revolution, connecting travelers with premium charter services.</p>
    `,
    author: "Rahul Sharma",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Industry Trends",
    image: "✈️",
    authorBio: "Rahul is an aviation industry analyst with over 15 years of experience in the Indian aviation sector."
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

      {/* Blog Post */}
      <article className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Back to blog */}
        <Link href="/blog" className="inline-flex items-center text-blue-600 mb-8 hover:underline">
          ← Back to Blog
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-4">
            <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">{post.category}</span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="h-96 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl mb-8 flex items-center justify-center text-9xl">
          {post.image}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Author Bio */}
        <div className="bg-gray-100 p-6 rounded-xl mb-12">
          <h3 className="font-bold mb-2">About the Author</h3>
          <p className="text-gray-700">{post.authorBio}</p>
        </div>

        {/* Share */}
        <div className="border-t border-b border-gray-200 py-6 mb-12">
          <h3 className="font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            <button className="w-10 h-10 bg-[#1877f2] text-white rounded-full hover:scale-110 transition">f</button>
            <button className="w-10 h-10 bg-[#1da1f2] text-white rounded-full hover:scale-110 transition">t</button>
            <button className="w-10 h-10 bg-[#0a66c2] text-white rounded-full hover:scale-110 transition">in</button>
            <button className="w-10 h-10 bg-[#0077b5] text-white rounded-full hover:scale-110 transition">li</button>
          </div>
        </div>

        {/* Related Posts */}
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[1,2].map((i) => (
            <Link key={i} href="/blog/related-post">
              <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition cursor-pointer">
                <h4 className="font-bold mb-2">Empty Leg Flights: Your Guide to Luxury Travel at Discounted Rates</h4>
                <p className="text-sm text-gray-600">Learn how to save up to 75% on private charters...</p>
              </div>
            </Link>
          ))}
        </div>
      </article>

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
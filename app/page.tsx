'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

// Airport database with IATA codes
const airports = [
  { name: "Mumbai", code: "BOM", city: "Mumbai", country: "India" },
  { name: "Delhi", code: "DEL", city: "Delhi", country: "India" },
  { name: "Bangalore", code: "BLR", city: "Bangalore", country: "India" },
  { name: "Chennai", code: "MAA", city: "Chennai", country: "India" },
  { name: "Kolkata", code: "CCU", city: "Kolkata", country: "India" },
  { name: "Hyderabad", code: "HYD", city: "Hyderabad", country: "India" },
  { name: "Ahmedabad", code: "AMD", city: "Ahmedabad", country: "India" },
  { name: "Pune", code: "PNQ", city: "Pune", country: "India" },
  { name: "Goa", code: "GOI", city: "Goa", country: "India" },
  { name: "Jaipur", code: "JAI", city: "Jaipur", country: "India" },
  { name: "Lucknow", code: "LKO", city: "Lucknow", country: "India" },
  { name: "Guwahati", code: "GAU", city: "Guwahati", country: "India" },
  { name: "New York", code: "JFK", city: "New York", country: "USA" },
  { name: "London", code: "LHR", city: "London", country: "UK" },
  { name: "Dubai", code: "DXB", city: "Dubai", country: "UAE" },
  { name: "Singapore", code: "SIN", city: "Singapore", country: "Singapore" },
]

// Testimonials data
const testimonials = [
  {
    name: "Rahul Sharma",
    position: "VP Operations, Reliance Industries",
    content: "AeroDesk has transformed how we manage executive travel. The platform is intuitive and the support team is exceptional.",
    rating: 5
  },
  {
    name: "Ajay Kumar",
    position: "Director, Delta Air Charter",
    content: "As an operator, AeroDesk helps us maximize fleet utilization. The empty leg feature alone has increased our revenue by 30%.",
    rating: 5
  },
  {
    name: "Priya Menon",
    position: "Travel Manager, Tata Motors",
    content: "The corporate travel desk features are exactly what we needed. Multi-level approvals and budget tracking are game-changers.",
    rating: 5
  }
]

// Features data
const features = [
  {
    title: "Flight Request & Lifecycle Tracking",
    description: "Create charter requests, specify flight and accommodation needs, and maintain visibility across the full request lifecycle.",
    icon: "✈️"
  },
  {
    title: "Operator Quotation & Fleet Management",
    description: "Operators can respond to charter requests with structured quotations, manage fleet availability, and create empty-leg opportunities.",
    icon: "📋"
  },
  {
    title: "Corporate Travel Desk",
    description: "Corporate Travel Desk users can create charter requests for employees, request jet seat allocations, and coordinate accommodation needs.",
    icon: "🏢"
  },
  {
    title: "Available Jet Seat Allocation",
    description: "Access seats on select private jet flights operating on predefined routes at discounted rates.",
    icon: "🪑"
  },
  {
    title: "Hotel Partner Accommodation",
    description: "Hotels maintain inventory visibility, configure stay availability, and handle accommodation requests tied to charter activity.",
    icon: "🏨"
  },
  {
    title: "AI-Assisted Compliance Review",
    description: "AI-assisted logic evaluates workflow inputs and highlights potential inconsistencies for administrative review.",
    icon: "🤖"
  }
]

export default function HomePage() {
  const [activeService, setActiveService] = useState('charter')
  const [activeTrip, setActiveTrip] = useState('oneway')
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')
  const [origin2, setOrigin2] = useState('')
  const [destination2, setDestination2] = useState('')
  const [origin3, setOrigin3] = useState('')
  const [destination3, setDestination3] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [departureDate2, setDepartureDate2] = useState('')
  const [departureDate3, setDepartureDate3] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [showOriginSuggestions, setShowOriginSuggestions] = useState(false)
  const [showDestSuggestions, setShowDestSuggestions] = useState(false)
  const [showOrigin2Suggestions, setShowOrigin2Suggestions] = useState(false)
  const [showDest2Suggestions, setShowDest2Suggestions] = useState(false)
  const [showOrigin3Suggestions, setShowOrigin3Suggestions] = useState(false)
  const [showDest3Suggestions, setShowDest3Suggestions] = useState(false)
  
  const originRef = useRef<HTMLDivElement>(null)
  const destRef = useRef<HTMLDivElement>(null)
  const origin2Ref = useRef<HTMLDivElement>(null)
  const dest2Ref = useRef<HTMLDivElement>(null)
  const origin3Ref = useRef<HTMLDivElement>(null)
  const dest3Ref = useRef<HTMLDivElement>(null)

  // Set today's date as default
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    setDepartureDate(today)
    setDepartureDate2(today)
    setDepartureDate3(today)
    setReturnDate(today)
  }, [])

  // Filter airports based on input
  const getSuggestions = (input: string) => {
    if (!input || input.length < 2) return []
    const searchTerm = input.toLowerCase()
    return airports.filter(airport => 
      airport.city.toLowerCase().includes(searchTerm) || 
      airport.code.toLowerCase().includes(searchTerm)
    ).slice(0, 5)
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (originRef.current && !originRef.current.contains(event.target as Node)) setShowOriginSuggestions(false)
      if (destRef.current && !destRef.current.contains(event.target as Node)) setShowDestSuggestions(false)
      if (origin2Ref.current && !origin2Ref.current.contains(event.target as Node)) setShowOrigin2Suggestions(false)
      if (dest2Ref.current && !dest2Ref.current.contains(event.target as Node)) setShowDest2Suggestions(false)
      if (origin3Ref.current && !origin3Ref.current.contains(event.target as Node)) setShowOrigin3Suggestions(false)
      if (dest3Ref.current && !dest3Ref.current.contains(event.target as Node)) setShowDest3Suggestions(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = () => {
    alert(`Searching ${activeService} flights from ${origin} to ${destination} for ${passengers} passenger(s)`)
  }

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed relative" 
         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-bold text-white hover:text-[#fef3c7] transition">
              AERO<span className="text-[#fef3c7]">DESK</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/promotions" className="text-white hover:text-[#fef3c7] transition">Promotions</Link>
              <Link href="/our-network" className="text-white hover:text-[#fef3c7] transition">Our Network</Link>
              <Link href="/blog" className="text-white hover:text-[#fef3c7] transition">Blog</Link>
              <Link href="/media" className="text-white hover:text-[#fef3c7] transition">Media</Link>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex items-center text-white">
                <i className="fas fa-phone-alt text-[#fef3c7] mr-2"></i>
                <span>+91 9819754038</span>
              </div>
              <Link href="/login" className="text-white hover:text-[#fef3c7] transition">Login</Link>
              <Link href="/register">
                <button className="bg-[#fef3c7] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#fde68a] transition">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Fly Smarter, <span className="text-[#fef3c7]">Stay Premium</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              India's most organized private aviation platform. Book charter flights, empty leg seats, and corporate travel with complete transparency.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                <span className="text-green-400 text-xl">✓</span>
              </div>
              <div>
                <p className="font-semibold text-white">GST Compliant</p>
                <p className="text-sm text-gray-400">Verified operators</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-xl">◉</span>
              </div>
              <div>
                <p className="font-semibold text-white">24/7 Support</p>
                <p className="text-sm text-gray-400">Always available</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <span className="text-purple-400 text-xl">✈️</span>
              </div>
              <div>
                <p className="font-semibold text-white">100+ Operators</p>
                <p className="text-sm text-gray-400">Pan India network</p>
              </div>
            </div>
          </div>

          {/* Booking Widget - Full Width with Transparency */}
          <div className="w-full bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            {/* Service Tabs - Evenly Spaced */}
            <div className="flex justify-between mb-8 border-b border-white/20 pb-4">
              {['charter', 'helicopter', 'seats'].map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`flex-1 text-center py-3 font-semibold transition capitalize ${
                    activeService === service
                      ? 'text-[#fef3c7] border-b-2 border-[#fef3c7]'
                      : 'text-white/70 hover:text-[#fef3c7]'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Trip Type Tabs - Evenly Spaced */}
            <div className="flex justify-between mb-8">
              {[
                { id: 'oneway', label: 'Oneway' },
                { id: 'round', label: 'Round Trip' },
                { id: 'multi', label: 'Multicity' }
              ].map((trip) => (
                <button
                  key={trip.id}
                  onClick={() => setActiveTrip(trip.id)}
                  className={`flex-1 text-center py-2 font-medium transition ${
                    activeTrip === trip.id
                      ? 'text-[#fef3c7]'
                      : 'text-white/60 hover:text-[#fef3c7]'
                  }`}
                >
                  {trip.label}
                </button>
              ))}
            </div>

            {/* Booking Form - Dynamic based on trip type */}
            {activeTrip === 'oneway' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Origin */}
                <div className="relative" ref={originRef}>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">From</label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => {
                      setOrigin(e.target.value)
                      setShowOriginSuggestions(true)
                    }}
                    onFocus={() => setShowOriginSuggestions(true)}
                    placeholder="City or Airport"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                  />
                  {showOriginSuggestions && getSuggestions(origin).length > 0 && (
                    <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                      {getSuggestions(origin).map((airport) => (
                        <div
                          key={airport.code}
                          onClick={() => {
                            setOrigin(`${airport.city} (${airport.code})`)
                            setShowOriginSuggestions(false)
                          }}
                          className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                        >
                          {airport.city} ({airport.code})
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Destination */}
                <div className="relative" ref={destRef}>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">To</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value)
                      setShowDestSuggestions(true)
                    }}
                    onFocus={() => setShowDestSuggestions(true)}
                    placeholder="City or Airport"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                  />
                  {showDestSuggestions && getSuggestions(destination).length > 0 && (
                    <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                      {getSuggestions(destination).map((airport) => (
                        <div
                          key={airport.code}
                          onClick={() => {
                            setDestination(`${airport.city} (${airport.code})`)
                            setShowDestSuggestions(false)
                          }}
                          className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                        >
                          {airport.city} ({airport.code})
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Date</label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fef3c7] [color-scheme:dark]"
                  />
                </div>

                {/* Passengers - Manual Input */}
                <div>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Passengers</label>
                  <input
                    type="number"
                    min="1"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    placeholder="Enter number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                  />
                </div>
              </div>
            )}

            {activeTrip === 'round' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {/* Origin */}
                <div className="relative" ref={originRef}>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">From</label>
                  <input
                    type="text"
                    value={origin}
                    onChange={(e) => {
                      setOrigin(e.target.value)
                      setShowOriginSuggestions(true)
                    }}
                    onFocus={() => setShowOriginSuggestions(true)}
                    placeholder="City or Airport"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                  />
                  {showOriginSuggestions && getSuggestions(origin).length > 0 && (
                    <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                      {getSuggestions(origin).map((airport) => (
                        <div
                          key={airport.code}
                          onClick={() => {
                            setOrigin(`${airport.city} (${airport.code})`)
                            setShowOriginSuggestions(false)
                          }}
                          className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                        >
                          {airport.city} ({airport.code})
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Destination */}
                <div className="relative" ref={destRef}>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">To</label>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => {
                      setDestination(e.target.value)
                      setShowDestSuggestions(true)
                    }}
                    onFocus={() => setShowDestSuggestions(true)}
                    placeholder="City or Airport"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                  />
                  {showDestSuggestions && getSuggestions(destination).length > 0 && (
                    <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                      {getSuggestions(destination).map((airport) => (
                        <div
                          key={airport.code}
                          onClick={() => {
                            setDestination(`${airport.city} (${airport.code})`)
                            setShowDestSuggestions(false)
                          }}
                          className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                        >
                          {airport.city} ({airport.code})
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Departure Date */}
                <div>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Depart</label>
                  <input
                    type="date"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fef3c7] [color-scheme:dark]"
                  />
                </div>

                {/* Return Date */}
                <div>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Return</label>
                  <input
                    type="date"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    min={departureDate}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fef3c7] [color-scheme:dark]"
                  />
                </div>

                {/* Passengers - Manual Input */}
                <div>
                  <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Passengers</label>
                  <input
                    type="number"
                    min="1"
                    value={passengers}
                    onChange={(e) => setPassengers(e.target.value)}
                    placeholder="Enter number"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                  />
                </div>
              </div>
            )}

            {activeTrip === 'multi' && (
              <div className="space-y-4">
                {/* First Leg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative" ref={originRef}>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">From</label>
                    <input
                      type="text"
                      value={origin}
                      onChange={(e) => {
                        setOrigin(e.target.value)
                        setShowOriginSuggestions(true)
                      }}
                      onFocus={() => setShowOriginSuggestions(true)}
                      placeholder="City or Airport"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                    {showOriginSuggestions && getSuggestions(origin).length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                        {getSuggestions(origin).map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setOrigin(`${airport.city} (${airport.code})`)
                              setShowOriginSuggestions(false)
                            }}
                            className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                          >
                            {airport.city} ({airport.code})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative" ref={destRef}>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">To</label>
                    <input
                      type="text"
                      value={destination}
                      onChange={(e) => {
                        setDestination(e.target.value)
                        setShowDestSuggestions(true)
                      }}
                      onFocus={() => setShowDestSuggestions(true)}
                      placeholder="City or Airport"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                    {showDestSuggestions && getSuggestions(destination).length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                        {getSuggestions(destination).map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setDestination(`${airport.city} (${airport.code})`)
                              setShowDestSuggestions(false)
                            }}
                            className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                          >
                            {airport.city} ({airport.code})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Date</label>
                    <input
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fef3c7] [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex items-end">
                    <span className="text-white/50 text-sm pb-3">Leg 1 of 3</span>
                  </div>
                </div>

                {/* Second Leg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative" ref={origin2Ref}>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">From</label>
                    <input
                      type="text"
                      value={origin2}
                      onChange={(e) => {
                        setOrigin2(e.target.value)
                        setShowOrigin2Suggestions(true)
                      }}
                      onFocus={() => setShowOrigin2Suggestions(true)}
                      placeholder="City or Airport"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                    {showOrigin2Suggestions && getSuggestions(origin2).length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                        {getSuggestions(origin2).map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setOrigin2(`${airport.city} (${airport.code})`)
                              setShowOrigin2Suggestions(false)
                            }}
                            className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                          >
                            {airport.city} ({airport.code})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative" ref={dest2Ref}>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">To</label>
                    <input
                      type="text"
                      value={destination2}
                      onChange={(e) => {
                        setDestination2(e.target.value)
                        setShowDest2Suggestions(true)
                      }}
                      onFocus={() => setShowDest2Suggestions(true)}
                      placeholder="City or Airport"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                    {showDest2Suggestions && getSuggestions(destination2).length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                        {getSuggestions(destination2).map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setDestination2(`${airport.city} (${airport.code})`)
                              setShowDest2Suggestions(false)
                            }}
                            className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                          >
                            {airport.city} ({airport.code})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Date</label>
                    <input
                      type="date"
                      value={departureDate2}
                      onChange={(e) => setDepartureDate2(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fef3c7] [color-scheme:dark]"
                    />
                  </div>
                  <div className="flex items-end">
                    <span className="text-white/50 text-sm pb-3">Leg 2 of 3</span>
                  </div>
                </div>

                {/* Third Leg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="relative" ref={origin3Ref}>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">From</label>
                    <input
                      type="text"
                      value={origin3}
                      onChange={(e) => {
                        setOrigin3(e.target.value)
                        setShowOrigin3Suggestions(true)
                      }}
                      onFocus={() => setShowOrigin3Suggestions(true)}
                      placeholder="City or Airport"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                    {showOrigin3Suggestions && getSuggestions(origin3).length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                        {getSuggestions(origin3).map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setOrigin3(`${airport.city} (${airport.code})`)
                              setShowOrigin3Suggestions(false)
                            }}
                            className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                          >
                            {airport.city} ({airport.code})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="relative" ref={dest3Ref}>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">To</label>
                    <input
                      type="text"
                      value={destination3}
                      onChange={(e) => {
                        setDestination3(e.target.value)
                        setShowDest3Suggestions(true)
                      }}
                      onFocus={() => setShowDest3Suggestions(true)}
                      placeholder="City or Airport"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                    {showDest3Suggestions && getSuggestions(destination3).length > 0 && (
                      <div className="absolute z-20 w-full mt-1 bg-gray-900 border border-white/10 rounded-lg shadow-xl">
                        {getSuggestions(destination3).map((airport) => (
                          <div
                            key={airport.code}
                            onClick={() => {
                              setDestination3(`${airport.city} (${airport.code})`)
                              setShowDest3Suggestions(false)
                            }}
                            className="px-4 py-3 text-white hover:bg-[#fef3c7] hover:text-black cursor-pointer transition"
                          >
                            {airport.city} ({airport.code})
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Date</label>
                    <input
                      type="date"
                      value={departureDate3}
                      onChange={(e) => setDepartureDate3(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#fef3c7] [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-[#fef3c7] text-xs font-medium mb-1 block">Passengers</label>
                    <input
                      type="number"
                      min="1"
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      placeholder="Enter number"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#fef3c7]"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="w-full mt-8 bg-[#fef3c7] text-black font-bold py-4 rounded-lg hover:bg-[#fde68a] transition-all hover:scale-[1.02]"
            >
              SEARCH FLIGHTS
            </button>
          </div>
        </div>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">A Comprehensive Aviation Ecosystem</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All your charter needs, coordinated through one intelligent platform.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How AeroDesk Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, transparent, and efficient - from request to departure
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[1,2,3].map((num) => (
                <div key={num} className="text-center">
                  <div className="w-16 h-16 bg-[#fef3c7] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {num}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {num === 1 ? "Create Request" : num === 2 ? "Receive Quotes" : "Fly Premium"}
                  </h3>
                  <p className="text-gray-600">
                    {num === 1 ? "Submit your charter requirements with flight details." :
                     num === 2 ? "Operators bid on your request with competitive quotes." :
                     "Select the best quote and enjoy your private charter."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
              <p className="text-xl text-gray-600">What our clients say about AeroDesk</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-2xl">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#fef3c7]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Experience Premium Travel?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join India's fastest growing private aviation platform today.
            </p>
            <Link href="/register">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
                Get Started Now
              </button>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {/* About */}
              <div>
                <Link href="/" className="text-2xl font-bold hover:text-[#fef3c7] transition">
                  AERO<span className="text-[#fef3c7]">DESK</span>
                </Link>
                <p className="text-gray-400 text-sm mt-4">
                  India's most organized private aviation platform for charters, empty legs, and corporate travel.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/features" className="hover:text-[#fef3c7] transition">Features</Link></li>
                  <li><Link href="/how-it-works" className="hover:text-[#fef3c7] transition">How It Works</Link></li>
                  <li><Link href="/operators" className="hover:text-[#fef3c7] transition">For Operators</Link></li>
                  <li><Link href="/corporate" className="hover:text-[#fef3c7] transition">For Corporates</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/terms" className="hover:text-[#fef3c7] transition">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="hover:text-[#fef3c7] transition">Privacy Policy</Link></li>
                  <li><Link href="/safety" className="hover:text-[#fef3c7] transition">Safety Standards</Link></li>
                  <li><Link href="/gst" className="hover:text-[#fef3c7] transition">GST Compliance</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="font-semibold mb-4">Contact Us</h4>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-phone-alt text-[#fef3c7] w-5"></i>
                    <span>+91 9897 54038</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-phone-alt text-[#fef3c7] w-5"></i>
                    <span>+91 22 2822 2202</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-envelope text-[#fef3c7] w-5"></i>
                    <span>info@aerodesk.com</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <i className="fas fa-map-marker-alt text-[#fef3c7] w-5"></i>
                    <span>Mumbai, India</span>
                  </li>
                </ul>

                {/* Social Media with Original Colors */}
                <div className="flex space-x-4 mt-6">
                  <a href="#" className="w-10 h-10 bg-[#1877f2] rounded-full flex items-center justify-center hover:scale-110 transition">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1da1f2] rounded-full flex items-center justify-center hover:scale-110 transition">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#0a66c2] rounded-full flex items-center justify-center hover:scale-110 transition">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#ff0000] rounded-full flex items-center justify-center hover:scale-110 transition">
                    <i className="fab fa-youtube text-white"></i>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#f77737] rounded-full flex items-center justify-center hover:scale-110 transition">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
              <p>© 2024 AERODESK. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
    </div>
  )
}

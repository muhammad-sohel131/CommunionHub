import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section style={{backgroundImage: 'url(./banner.jpg)', backgroundPosition: 'center'}} className="bg-[rgba(0,0,0,.7)] bg-no-repeat bg-cover bg-blend-overlay text-white py-20 min-h-[75vh] flex items-center">
    <div className="cs-container mx-auto text-center">
      <h1 className="lg:text-4xl text-3xl font-bold mb-4">Connecting People Across Faiths & Interests
      </h1>
      <p className="text-lg mx-auto max-w-[750px] mb-6">
      Brings individuals together, celebrating diversity and shared passions. It fosters understanding, builds bridges, and creates meaningful connections for a more inclusive world.
      </p>
      <button className="bg-[#1e40af] text-white px-6 py-3 rounded-lg font-semibol">
        <Link to='/events'>Explore Events</Link>
      </button>
    </div>
  </section>
  )
}

export default Hero
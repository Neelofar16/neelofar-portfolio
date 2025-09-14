import React from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

export default function App(){
  return (
    <div className="min-h-screen text-gray-900">
      <Hero />
      <main className="max-w-5xl mx-auto px-6">
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="text-center py-6 text-gray-500">© 2025 Neelofar Anjum</footer>
    </div>
  )
}

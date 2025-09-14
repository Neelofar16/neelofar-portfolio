import React from 'react'

export default function Hero(){
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-indigo-400 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold">Neelofar Anjum</h1>
          <p className="mt-4 text-lg text-indigo-100">AI/ML Engineer • Python Developer • Educator</p>
          <p className="mt-3 max-w-xl text-indigo-100/90">I build production-ready ML systems, dashboards, and web apps — and I explain them clearly for learners. Open to internships and collaborations.</p>
          <div className="mt-6 flex gap-3">
            <a className="inline-block bg-white text-indigo-600 px-5 py-2 rounded shadow" href="#projects">See Projects</a>
            <a className="inline-block border border-white/40 px-5 py-2 rounded text-white/95" href="https://github.com/Neelofar16" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <div className="mt-6 flex gap-6 text-indigo-100">
            <div><strong className="text-white">8+</strong><div className="text-sm">Projects</div></div>
            <div><strong className="text-white">3</strong><div className="text-sm">Internships</div></div>
            <div><strong className="text-white">6+</strong><div className="text-sm">Certifications</div></div>
          </div>
        </div>
        <div className="w-48 h-48 md:w-56 md:h-56 bg-white/20 rounded-full flex items-center justify-center border border-white/30">
          <img src="/assets/headshot.jpg" alt="Neelofar" className="w-40 h-40 rounded-full object-cover"/>
        </div>
      </div>
    </header>
  )
}

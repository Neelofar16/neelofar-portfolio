import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mt-8 mb-12 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold">Contact</h2>
      <p className="mt-2 text-gray-700">Email: <a className="text-indigo-600" href="mailto:nilo34616@gmail.com">nilo34616@gmail.com</a></p>
      <form className="mt-4 grid md:grid-cols-2 gap-3" action="https://formspree.io/f/myform" method="POST">
        <input name="name" placeholder="Your name" className="p-2 rounded border" required />
        <input name="email" placeholder="Your email" className="p-2 rounded border" required />
        <textarea name="message" placeholder="Message" className="p-2 rounded border md:col-span-2" rows="4" required></textarea>
        <button className="md:col-span-2 py-2 rounded bg-indigo-600 text-white">Send message</button>
      </form>
    </section>
  )
}

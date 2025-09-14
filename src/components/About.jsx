import React from 'react'

export default function About(){
  return (
    <section className="mt-12 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-3 text-gray-700">Final year B.E. student in Artificial Intelligence & Machine Learning at Guru Nanak Dev Engineering College. Skilled in Python, Flask, Streamlit, machine learning, time-series forecasting, and dashboards.</p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-medium">Skills</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Python</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Machine Learning</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Flask</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">Power BI</span>
          </div>
        </div>
        <div>
          <h4 className="font-medium">Internships</h4>
          <ul className="mt-2 text-gray-600">
            <li>LearnTricks — Cloud Intern</li>
            <li>Future Interns — AI tasks</li>
            <li>InternPE — ML implementations</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Education</h4>
          <p className="mt-2 text-gray-600">B.E. AIML — Guru Nanak Dev Engineering College (CGPA 7.82 till 6th sem)</p>
        </div>
      </div>
    </section>
  )
}

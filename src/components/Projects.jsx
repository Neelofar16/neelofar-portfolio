import React from 'react'

const projects = [
  {
    title: 'Sales Forecasting (Prophet + Power BI)',
    desc: 'Monthly sales forecasting using Prophet with Power BI dashboards for inventory decisions.',
    link: 'https://github.com/Neelofar16/sales-forecasting-prophet-'
  },
  {
    title: 'Customer Churn Prediction',
    desc: 'Classification models and Streamlit dashboards to identify churn risk using Telco dataset.',
    link: 'https://github.com/Neelofar16/customer-churn-prediction-'
  },
  {
    title: 'Real-Time Air Quality Monitoring',
    desc: 'WAQI API + ML models to predict PM2.5 with a public Streamlit interface.',
    link: 'https://github.com/Neelofar16/Real-Time-Air-Quality-Monitoring-and-PM2.5-Prediction-'
  },
  {
    title: 'Women Entrepreneurs Support Platform (WESP)',
    desc: 'Capstone: Role-based portal with mentorship, marketplace, SOS alerts and AI-assisted help.',
    link: 'https://github.com/Neelofar16/Women-Entrepreneurs-Support-Platform-'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Selected Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(p=>(
          <article key={p.title} className="bg-white rounded-lg p-4 shadow hover:translate-y-[-4px] transition">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <div className="mt-3 flex items-center justify-between">
              <a className="text-indigo-600" href={p.link} target="_blank" rel="noreferrer">View code</a>
              <a className="text-sm text-gray-500" href="#">Details →</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

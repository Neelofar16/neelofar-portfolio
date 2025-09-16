import React from 'react'

export default function About(){
  return (
    <section className="mt-12 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-semibold">About Me</h2>
      <p className="mt-3 text-gray-700">A dedicated and goal-oriented final year student pursuing B.E in Artificial Intelligence and Machine Learning from Guru Nanak Dev Engineering College Bidar, with a strong problem-solving mindset. Passionate about learning, adapting to new challenges, and working collaboratively to create meaningful solutions. Known for analytical thinking, effective communication, and the ability to work in dynamic environments. Seeking a dynamic role to apply technical expertise and contribute to impactful AIdriven solutions.</p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div>
          <h4 className="font-medium">Technical Skills</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">• Languages and Frameworks: Python, JavaScript, Java, HTML, CSS, Streamlit</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">• Libraries: Pandas, NumPy, Scikit-learn, Prophet, Matplotlib, Seaborn</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">• Databases and Tools: MongoDB, Power BI, Git, Jupyter Notebook, Google Colab, Ngrok, Dialogflow   </span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">• Concepts: Machine Learning, Data Visualization, Time Series Forecasting, Anomaly Detection, Chatbot Development</span>
            <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded">• Version Control and Other: Git, Operating Systems, Data Structures & Algorithms </span>
          </div>          
        </div>
        <div>
          <h4 className="font-medium">Internships</h4>
          <ul className="mt-2 text-gray-600">
            <li>HexSoftwares - Cyberscurity Intern</li>
            <li>TechnoHacks Edutech - UI/UX Intern</li>
            <li>LearnTricks - Cloud Intern</li>
            <li>Future Interns - AI tasks</li>
            <li>InternPE - ML implementations</li>
          </ul>

          <h4 className="font-medium">Soft Skills</h4>
          <ul className="mt-2 text-gray-600">
            <li> • Analytical Problem-Solving and Strategic Thinking</li>
            <li> • Collaborative Mindset and Leadership Potential </li>
            <li> • Clear & Confident Communication</li>
            <li> • Agility & Adaptability </li>
            <li> • Exceptional Time Management and Proactive Initiative</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Education</h4>
          <p className="mt-2 text-gray-600">✓ 10th – 2011-12 to 2019-2020
            School Name: Air Force School Bidar
            CGPA - 8.7  

            ✓ 12th – 2019-20 to 2021-22 
            College Name: Shaheen Group of Institutions 
            CGPA – 7.0

            ✓ B.E – 2021-22 to 2025-26
            College Name: Guru Nanak Dev Engineering College Bidar 
            University Name: Visvesvaraya Technological University 
            CGPA till 6th semester - 7.82 
          </p>
        </div>
      </div>
    </section>
  )
}

// components/Experiences.tsx
import { useEffect, useState } from 'react';

const experiences = [
    {
        title: 'Jr. Software Developer',
        company: 'Dynamic Methods Solutions',
        dateRange: 'Aug 2019 – Apr 2020',
        responsibilities: [
          'Worked with PHP & binding JSON data in HTML pages.',
          'Experienced with web applications using HTML5, JavaScript, and Angular.',
        ],
        icon: <i className="fa fa-cogs text-purple-600 text-3xl" />
      },
  {
    title: 'JavaScript Developer',
    company: 'Cybercom Creation',
    dateRange: 'Jun 2020 – Oct 2021',
    responsibilities: [
      'Responsible for front-end web development with popular React.js workflows for state management such as Redux.',
      'Familiarity with RESTful APIs and improving product functionality and user-friendliness.',
      'Facilitated collaboration with cross-functional teams including design, project managers, and development teams.',
    ],
    icon: <i className="fa fa-briefcase text-green-600 text-3xl" />
  },
  {
    title: 'Software Engineer',
    company: 'Zymr Inc.',
    dateRange: 'Nov 2021 – Present',
    responsibilities: [
      'Writing application interface codes using JavaScript/TypeScript following React.js flow.',
      'Familiarity with integration of external libraries, hooks, RESTful APIs, and UI/UX work flows.',
      'Experience in UI development using React.js, Redux, HTML, JavaScript, and CSS.',
      'R&D on SaaS applications and developed REST services to fetch security configurations and scrap using Playwright.',
    ],
    icon: <i className="fa fa-rocket text-blue-600 text-3xl" />
  }
  
];

export default function Experiences() {
    const [inView, setInView] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById('experiences');
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;
          const viewportHeight = window.innerHeight;
          if (sectionTop < viewportHeight * 0.8) {
            setInView(true);
          }
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <section id="experiences" className="pt-24 pb-12 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8 relative">
          <h2 className={`text-3xl font-bold mb-8 text-center ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
            My Work Experiences
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
            <div className="relative">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8'} ${index % 2 === 0 ? 'justify-start' : 'justify-end'} items-center`}
                >
                  {/* Connecting Line */}
                  <div
                    className={`absolute ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'} ${index % 2 === 0 ? 'transform -translate-x-1/2' : 'transform translate-x-1/2'} top-1/2`}
                    style={{
                      width: 'calc(50% - 2rem)', // Adjust width to fit design
                      height: '1px',
                      backgroundColor: 'gray',
                      borderBottom: '1px dotted gray',
                      transform: 'translateY(-50%)',
                      // Ensure the line is centered with respect to the timeline dot
                    }}
                  ></div>
                  <div className={`w-full md:w-1/2 lg:w-1/3 p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 ${inView ? 'animate__animated animate__fadeIn' : ''}`}>
                    <div className={`flex items-start mb-4`}>
                      <div className="mt-1 mr-4">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold dark:text-gray-800">{exp.title}</h3>
                        <p className="text-xs	 text-gray-600">{exp.company} <span className="text-gray-400">| {exp.dateRange}</span></p>
                        <ul className="list-disc pl-4 mt-2 italic">
                          {exp.responsibilities.map((res, i) => (
                            <li key={i} className="text-xs	 text-gray-700">{res}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className={`absolute ${index % 2 === 0 ? 'left-1/2 transform -translate-x-1/2' : 'right-1/2 transform translate-x-1/2'} flex items-center bg-white rounded-full w-6 h-6 border-2 border-gray-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
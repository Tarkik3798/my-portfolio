// components/Skills.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJsSquare, faHtml5, faCss3Alt, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const skills = [
  { name: 'React', icon: faReact },
  { name: 'Node.js', icon: faNodeJs },
  { name: 'JavaScript', icon: faJsSquare },
  { name: 'HTML5', icon: faHtml5 },
  { name: 'CSS3', icon: faCss3Alt },
  { name: 'Git', icon: faGitAlt },
];

export default function Skills() {
  return (
    <section id="skills" className="pt-24 pb-12 h-screen bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transform transition-all hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-gray-200 group-hover:to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              <div className="relative z-10">
                <FontAwesomeIcon icon={skill.icon} className="text-6xl text-gray-700 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

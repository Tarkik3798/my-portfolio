// components/Projects.tsx
const projects = [
    { title: "Project 1", description: "A cool project about X", image: "/project1.jpg" },
    { title: "Project 2", description: "A creative project on Y", image: "/project2.jpg" },
    // Add more projects
  ];
  
  export default function Projects() {
    return (
      <section className="p-12">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src={project.image} alt={project.title} className="rounded-md mb-4"/>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
import { useState } from 'react';
import { projects } from '../../data';

const categories = ['הכל', 'startup', 'consulting'];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('הכל');

  const filteredProjects = projects.filter(project => 
    activeCategory === 'הכל' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          פרויקטים נבחרים
        </h2>

        <div className="filter-buttons mb-12">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="post-card">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary-color text-white px-6 py-2 rounded-lg hover:bg-accent-color transition-colors"
                  >
                    פרטים נוספים
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 
import { useEffect, useState } from 'react';
import GetData from './fetch';

type Project = {
  id: number;
  attributes: {
    name: string;
    technologies: {
      technologies: string[];
    };
    image: {
      data: {
        attributes: {
          url: string;
        };
      }[];
    };
    WebsiteLink: string;
  };
};

const ProjectList = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData();
      console.log("inside data is", data);
      setProjects(data.data || []);
    };
    fetchData();
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <h3>{project.attributes.name}</h3>
          <img
            src={`${import.meta.env.VITE_API_URL.split('?')[0]}${project.attributes.image.data[0].attributes.url}`}
            alt={project.attributes.name}
            className="w-20 h-20"
          />
          <ul>
            <li>Technologies:</li>
            <li>{project.attributes.technologies.technologies.join(', ')}</li>
          </ul>
          <a href={project.attributes.WebsiteLink} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

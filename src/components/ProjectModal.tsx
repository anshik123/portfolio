import React from 'react';
import { X, ExternalLink, Github, Calendar, Users, Code } from 'lucide-react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl: string;
    liveUrl: string;
    longDescription?: string;
    features?: string[];
    duration?: string;
    teamSize?: string;
    role?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-colors duration-200"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h2 className="text-3xl font-bold text-white mb-4 sm:mb-0">{project.title}</h2>
            <div className="flex gap-3">
              <a
                href={project.githubUrl}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                Code
              </a>
              <a
                href={project.liveUrl}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {project.duration && (
              <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                <Calendar className="text-blue-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Duration</p>
                  <p className="font-medium">{project.duration}</p>
                </div>
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                <Users className="text-green-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">Team Size</p>
                  <p className="font-medium">{project.teamSize}</p>
                </div>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-3 p-4 bg-gray-700/50 rounded-lg">
                <Code className="text-purple-400" size={20} />
                <div>
                  <p className="text-sm text-gray-400">My Role</p>
                  <p className="font-medium">{project.role}</p>
                </div>
              </div>
            )}
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Project Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </div>

          {project.features && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-green-400">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-400">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
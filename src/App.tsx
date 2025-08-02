import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { ParticleBackground } from './components/ParticleBackground';
import { TypingAnimation } from './components/TypingAnimation';
import { SkillBar } from './components/SkillBar';
import { ProjectCard } from './components/ProjectCard';
import { ContactForm } from './components/ContactForm';
import { ProjectModal } from './components/ProjectModal';
import { ScrollToTop } from './components/ScrollToTop';
import { LoadingSpinner } from './components/LoadingSpinner';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { smoothScrollTo, getCurrentSection } from './utils/smoothScroll';
import { 
  User, 
  Code, 
  Database, 
  Server, 
  Smartphone, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  Briefcase,
  Calendar
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const currentSection = getCurrentSection(sections);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (sectionId: string) => {
    smoothScrollTo(sectionId);
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
    // Create a dummy CV download
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,John Doe - Full Stack Developer CV\n\nThis is a demo CV file.';
    link.download = 'John_Doe_CV.txt';
    link.click();
  };
  const skills = {
    frontend: [
      { name: 'React/Next.js', percentage: 95, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
      { name: 'TypeScript', percentage: 90, color: 'bg-gradient-to-r from-blue-600 to-blue-400' },
      { name: 'Vue.js', percentage: 85, color: 'bg-gradient-to-r from-green-500 to-green-400' },
      { name: 'Tailwind CSS', percentage: 92, color: 'bg-gradient-to-r from-teal-500 to-cyan-400' }
    ],
    backend: [
      { name: 'Node.js', percentage: 88, color: 'bg-gradient-to-r from-green-600 to-green-500' },
      { name: 'Python/Django', percentage: 85, color: 'bg-gradient-to-r from-yellow-500 to-green-500' },
      { name: 'PostgreSQL', percentage: 82, color: 'bg-gradient-to-r from-blue-600 to-indigo-600' },
      { name: 'MongoDB', percentage: 80, color: 'bg-gradient-to-r from-emerald-500 to-green-600' }
    ]
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and payment processing.',
      longDescription: 'A comprehensive e-commerce platform built from the ground up with modern web technologies. This project showcases full-stack development skills including user authentication, payment processing, inventory management, and responsive design. The platform supports multiple user roles, real-time notifications, and advanced search functionality.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      features: [
        'User authentication and authorization',
        'Shopping cart and wishlist functionality',
        'Secure payment processing with Stripe',
        'Admin dashboard for product management',
        'Real-time inventory tracking',
        'Order history and tracking',
        'Responsive design for all devices',
        'Email notifications and confirmations'
      ],
      duration: '3 months',
      teamSize: '2 developers',
      role: 'Full Stack Developer',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'A sophisticated task management application designed for team collaboration. Built with Vue.js and Socket.io for real-time updates, this application provides an intuitive interface for managing projects, tasks, and team workflows. Features include drag-and-drop task organization, real-time notifications, and comprehensive reporting.',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      features: [
        'Real-time collaboration with Socket.io',
        'Drag-and-drop task organization',
        'Project and team management',
        'Time tracking and reporting',
        'File attachments and comments',
        'Custom workflows and statuses',
        'Email and in-app notifications',
        'Advanced filtering and search'
      ],
      duration: '4 months',
      teamSize: '3 developers',
      role: 'Lead Frontend Developer',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization dashboard with interactive charts, location-based forecasts, and historical data analysis.',
      longDescription: 'An advanced weather analytics dashboard that provides comprehensive weather data visualization and analysis. Built with Next.js and Chart.js, this application offers real-time weather updates, historical data analysis, and predictive forecasting. The dashboard features interactive charts, customizable widgets, and location-based weather tracking.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'Weather API'],
      features: [
        'Real-time weather data integration',
        'Interactive charts and visualizations',
        'Historical weather data analysis',
        'Location-based weather tracking',
        'Customizable dashboard widgets',
        'Weather alerts and notifications',
        'Export data functionality',
        'Mobile-responsive design'
      ],
      duration: '2 months',
      teamSize: '1 developer',
      role: 'Solo Full Stack Developer',
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com'
    }
  ];

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead development of enterprise web applications using React, Node.js, and AWS. Managed a team of 4 developers and improved application performance by 40%.',
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL']
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies. Implemented CI/CD pipelines and improved deployment efficiency by 60%.',
      technologies: ['Vue.js', 'Python', 'Django', 'Docker', 'MongoDB']
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Web Studio',
      period: '2019 - 2020',
      description: 'Created responsive and interactive user interfaces for various clients. Collaborated with designers to implement pixel-perfect designs and improve user experience.',
      technologies: ['React', 'JavaScript', 'SASS', 'Webpack']
    }
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onNavigate={handleNavigation}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-2xl shadow-blue-500/50"
            />
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-8 h-12">
            <TypingAnimation
              texts={[
                'Full Stack Developer',
                'React Specialist',
                'Node.js Expert',
                'UI/UX Enthusiast'
              ]}
            />
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating exceptional digital experiences through innovative web technologies
            and modern development practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              onClick={() => handleNavigation('projects')}
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:bg-opacity-20 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              onClick={handleDownloadCV}
              <Download size={20} />
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  I'm a passionate Full Stack Developer with over 5 years of experience in creating 
                  robust web applications. I specialize in modern JavaScript frameworks and have a 
                  strong background in both frontend and backend development.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  My journey in web development started with a curiosity about how websites work, 
                  and it has evolved into a deep passion for creating seamless user experiences 
                  and scalable applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <User size={20} />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-400">
                    <Code size={20} />
                    <span>50+ Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                <Code size={48} className="mx-auto mb-4 text-blue-400" />
                <h4 className="text-lg font-semibold mb-2">Frontend</h4>
                <p className="text-gray-400 text-sm">React, Vue.js, TypeScript</p>
              </div>
              <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                <Server size={48} className="mx-auto mb-4 text-green-400" />
                <h4 className="text-lg font-semibold mb-2">Backend</h4>
                <p className="text-gray-400 text-sm">Node.js, Python, Express</p>
              </div>
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                <Database size={48} className="mx-auto mb-4 text-purple-400" />
                <h4 className="text-lg font-semibold mb-2">Database</h4>
                <p className="text-gray-400 text-sm">PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 text-center hover:transform hover:scale-105 transition-all duration-300">
                <Smartphone size={48} className="mx-auto mb-4 text-orange-400" />
                <h4 className="text-lg font-semibold mb-2">Mobile</h4>
                <p className="text-gray-400 text-sm">React Native, Flutter</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-8 text-blue-400 flex items-center gap-3">
                <Code size={28} />
                Frontend Development
              </h3>
              {skills.frontend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 200}
                />
              ))}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold mb-8 text-green-400 flex items-center gap-3">
                <Server size={28} />
                Backend Development
              </h3>
              {skills.backend.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                  delay={index * 200 + 400}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                delay={index * 200}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Work Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
                )}
                <div className="flex items-start mb-12">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-6 z-10">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 flex-1 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-blue-400 text-sm">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                    </div>
                    <h4 className="text-lg text-blue-400 mb-3">{exp.company}</h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a 
                  href="mailto:john.doe@example.com"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <Mail className="text-blue-400" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">john.doe@example.com</p>
                  </div>
                </a>
                <a 
                  href="tel:+15551234567"
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-green-500/50 transition-all duration-300 group"
                >
                  <Phone className="text-green-400" size={24} />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-400 group-hover:text-green-400 transition-colors duration-300">+1 (555) 123-4567</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-gray-400">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-800/50 border-t border-gray-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 John Doe. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

export default App;
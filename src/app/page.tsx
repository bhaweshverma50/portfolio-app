'use client';

import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  User,
  // Code2,
  Briefcase,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Brain,
  Layout,
  ExternalLink,
  MessageSquare,
  Download,
} from 'lucide-react';
// import { LineChart, Line, ResponsiveContainer } from 'recharts';

// Types
interface Skill {
  name: string;
  level: number;
}

interface ChartDataPoint {
  name: number;
  value: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
}

interface PortfolioData {
  name: string;
  title: string;
  description: string;
  skills: Skill[];
  chartData: ChartDataPoint[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
}

interface ParticleProps {
  x: number;
  y: number;
  id: string;
  angle: number;
  velocity: number;
  lifetime: number;
  size: number;
  color: string;
}

// Particle component with enhanced spread
const Particle: React.FC<ParticleProps> = ({ x, y, angle, velocity, lifetime, size, color }) => {
  const translateX = Math.cos(angle) * velocity;
  const translateY = Math.sin(angle) * velocity;

  return (
    <div
      className="absolute w-1 h-1 rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        animation: `particle ${lifetime}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
        transform: `translate(${translateX}px, ${translateY}px)`,
      }}
    />
  );
};

const PortfolioPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<ParticleProps[]>([]);

  // Enhanced sample data
  const portfolioData: PortfolioData = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    description:
      'Passionate about creating beautiful and functional web applications with modern technologies. Experienced in building scalable applications and mentoring junior developers.',
    skills: [
      { name: 'React/Next.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Docker', level: 65 },
    ],
    chartData: Array(12)
      .fill(null)
      .map((_, i) => ({
        name: i,
        value: 60 + i * 2,
      })),
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc',
        period: '2021 - Present',
        description: 'Leading a team of 5 developers in building enterprise-scale applications',
        technologies: ['React', 'Node.js', 'AWS', 'TypeScript'],
      },
      {
        title: 'Frontend Developer',
        company: 'Digital Innovations',
        period: '2019 - 2021',
        description: 'Developed responsive web applications using modern frameworks',
        technologies: ['React', 'Vue.js', 'JavaScript'],
      },
      {
        title: 'Backend Developer',
        company: 'Data Systems Corp',
        period: '2018 - 2019',
        description: 'Built RESTful APIs and microservices',
        technologies: ['Python', 'Django', 'PostgreSQL'],
      },
      {
        title: 'Full Stack Developer',
        company: 'Startup Hub',
        period: '2017 - 2018',
        description: 'Developed full-stack applications for various clients',
        technologies: ['Node.js', 'React', 'MongoDB'],
      },
      {
        title: 'Junior Developer',
        company: 'Web Solutions Ltd',
        period: '2016 - 2017',
        description: 'Maintained and updated existing web applications',
        technologies: ['PHP', 'JavaScript', 'MySQL'],
      },
    ],
    education: [
      {
        degree: 'Master of Computer Science',
        institution: 'Tech University',
        period: '2020 - 2022',
        description: 'Specialized in Artificial Intelligence and Machine Learning',
        achievements: ['4.0 GPA', 'Published 2 research papers'],
      },
      {
        degree: 'Bachelor of Computer Science',
        institution: 'State University',
        period: '2016 - 2020',
        description: 'Focus on Software Engineering',
        achievements: ["Dean's List", 'Led Programming Club'],
      },
      {
        degree: 'Web Development Bootcamp',
        institution: 'Code Academy',
        period: '2015',
        description: 'Intensive 12-week program',
        achievements: ['Best Final Project Award'],
      },
      {
        degree: 'Cloud Computing Certification',
        institution: 'AWS Academy',
        period: '2019',
        description: 'AWS Solutions Architect Associate',
        achievements: ['Passed with distinction'],
      },
      {
        degree: 'Data Science Certificate',
        institution: 'DataCamp',
        period: '2018',
        description: 'Complete Data Science Track',
        achievements: ['Completed 30+ courses'],
      },
    ],
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Built a full-featured e-commerce platform with real-time inventory management',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
        github: 'github.com/johndoe/ecommerce',
        link: 'ecommerce-demo.com',
      },
      {
        title: 'AI Image Generator',
        description: 'Created an AI-powered image generation tool using stable diffusion',
        technologies: ['Python', 'PyTorch', 'React', 'FastAPI'],
        github: 'github.com/johndoe/ai-image-gen',
      },
      {
        title: 'Task Management System',
        description: 'Developed a collaborative task management system with real-time updates',
        technologies: ['React', 'Firebase', 'Material-UI'],
        link: 'task-master.com',
      },
      {
        title: 'Social Media Dashboard',
        description: 'Analytics dashboard for social media management',
        technologies: ['Vue.js', 'D3.js', 'Node.js'],
        github: 'github.com/johndoe/social-dashboard',
      },
      {
        title: 'Weather App',
        description: 'Real-time weather forecasting application with location tracking',
        technologies: ['React Native', 'OpenWeather API'],
        link: 'weather-app.com',
      },
      {
        title: 'Portfolio Website',
        description: 'Personal portfolio website with modern design',
        technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
        github: 'github.com/johndoe/portfolio',
      },
      {
        title: 'Blog Platform',
        description: 'Full-stack blog platform with CMS',
        technologies: ['Gatsby', 'GraphQL', 'Strapi'],
        link: 'blog-platform.com',
      },
      {
        title: 'Video Chat App',
        description: 'Real-time video chat application with rooms',
        technologies: ['WebRTC', 'Socket.io', 'React'],
        github: 'github.com/johndoe/video-chat',
      },
      {
        title: 'Recipe App',
        description: 'Recipe sharing and meal planning application',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        link: 'recipe-app.com',
      },
    ],
  };

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isClient]);

  const createParticle = (baseX: number, baseY: number, index: number): ParticleProps => {
    const angle = (index / 100) * Math.PI * 10;
    const spread = Math.random() * 5 + 0.5; // Increased spread factor
    return {
      id: `${Date.now()}-${index}`,
      x: baseX,
      y: baseY,
      angle: angle * spread,
      velocity: 2 + (index % 5) * 200, // Increased velocity
      lifetime: 0.5 + (index % 3) * 0.3, // Longer lifetime
      size: 10 + (index % 4),
      color: `hsl(${(index * 10) % 360}, 70%, 70%)`, // Rainbow colors
    };
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isClient) return;

    // Create more particles with wider spread
    const baseParticles = Array.from(
      { length: 100 },
      (
        _,
        i // Increased particle count
      ) => createParticle(e.clientX + Math.random() * 10, e.clientY + Math.random() * 10, i)
    );

    setParticles((prev) => [...prev, ...baseParticles]);

    // Cleanup particles
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !baseParticles.find((bp) => bp.id === p.id)));
    }, 1000); // Increased cleanup timeout
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8 overflow-hidden cursor-none" onClick={handleClick}>
      <style>{`
        @keyframes particle {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--translateX), var(--translateY)) scale(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      {/* Only render client-side elements when in browser */}
      {isClient && (
        <>
          {/* Particles */}
          {particles.map((particle) => (
            <Particle key={particle.id} {...particle} />
          ))}

          {/* Custom cursor */}
          <div
            className="fixed w-4 h-4 rounded-full border-2 border-white pointer-events-none z-50 transition-transform duration-100 mix-blend-difference"
            style={{
              left: mousePosition.x - 8,
              top: mousePosition.y - 8,
            }}
          />

          {/* Cursor light effect */}
          <div
            className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl pointer-events-none"
            style={{
              left: mousePosition.x - 192,
              top: mousePosition.y - 192,
            }}
          />
        </>
      )}

      {/* Bento Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Profile Card */}
        <Card className="relative col-span-1 md:col-span-3 overflow-hidden backdrop-blur-xl bg-white/10 border-0 shadow-xl">
          <div className="p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar Section */}
            <div className="relative group">
              <div className="h-32 w-32 md:h-40 md:w-40 rounded-full bg-gradient-to-r from-blue-800 to-indigo-700 p-1">
                <div className="h-full w-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <User className="h-16 w-16 md:h-20 md:w-20 text-white/70 group-hover:text-white transition-all duration-300" />
                </div>
              </div>
              <div className="absolute -bottom-0 right-2 bg-green-500 h-7 w-7 rounded-full border-4 border-green-800" />
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-white mb-2">Bhawesh Kumar Verma</h1>
              <div className="inline-block bg-gradient-to-r from-blue-800 to-indigo-700 rounded-full px-4 py-1 mb-4">
                <p className="text-sm text-white">Full Stack Developer</p>
              </div>

              <p className="text-white/80 text-lg mb-6 max-w-2xl">
                Passionate about creating beautiful and functional web applications with modern technologies.
                Experienced in building scalable applications and mentoring junior developers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <Button className="bg-white/10 hover:bg-white/20 text-white space-x-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Contact Me</span>
                </Button>
                <Button className="bg-gradient-to-r from-blue-800 to-indigo-700 hover:opacity-90 text-white space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Skills Card */}
        <Card className="relative overflow-hidden backdrop-blur-xl bg-white/10 border-0 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Brain className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Skills</h2>
            </div>
            <div className="space-y-4">
              {portfolioData.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-white">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Growth Chart Card */}
        {/* <Card className="relative overflow-hidden backdrop-blur-xl bg-white/10 border-0 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Code2 className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Growth</h2>
            </div>
            {isClient && (
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={portfolioData.chartData}>
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </Card> */}

        {/* Experience Card */}
        <Card className="relative overflow-hidden backdrop-blur-xl bg-white/10 border-0 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Briefcase className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Experience</h2>
            </div>
            <div className="space-y-4 text-white/80">
              {portfolioData.experience.map((experience) => (
                <div key={experience.title} className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <h3 className="font-semibold text-white">{experience.title}</h3>
                    <p className="text-sm">{experience.company}</p>
                    <p className="text-sm">{experience.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Education Card */}
        <Card className="relative overflow-hidden backdrop-blur-xl bg-white/10 border-0 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Education</h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {portfolioData.education.map((education) => (
                <div key={education.degree} className="space-y-4 text-white/80">
                  <div className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300">
                    <h3 className="font-semibold text-white">{education.degree}</h3>
                    <p className="text-sm">{education.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card className="relative col-span-1 md:col-span-2 lg:col-span-3 overflow-hidden backdrop-blur-xl bg-white/10 border-0 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Layout className="h-6 w-6 text-white" />
              <h2 className="text-xl font-semibold text-white">Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {portfolioData.projects.map((project) => (
                <div
                  key={project.title}
                  className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                >
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-2">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioPage;

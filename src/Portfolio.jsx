import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ChevronDown, 
  ExternalLink, 
  Code, 
  Brain, 
  Terminal, 
  Cpu, 
  Database,
  Briefcase,
  GraduationCap,
  Download,
  X
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll listener for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Data from Resume & Projects
  const personalInfo = {
    name: "Pragaman Kumar Anurag",
    role: "AI Automation Specialist & Software Engineer",
    tagline: "Building scalable AI agents and privacy-first software solutions.",
    location: "Pune, Maharashtra",
    email: "kumaranuragpragaman@gmail.com",
    phone: "+91 7250940272",
    linkedin: "linkedin.com/in/pragaman-kumar-anurag",
    github: "github.com/Pragaman07"
  };

  const skills = [
    { category: "Languages", items: ["Python", "Java", "C", "SQL"], icon: <Code size={20} /> },
    { category: "AI & ML", items: ["PyTorch", "TensorFlow", "Hugging Face", "Federated Learning", "Opacus", "Gemini API"], icon: <Brain size={20} /> },
    { category: "Product & Tools", items: ["Streamlit", "Docker", "Git", "Postman", "BRD Analysis", "Agile/Scrum"], icon: <Terminal size={20} /> },
    { category: "Cloud & Data", items: ["AWS Cloud Foundations", "SQLite", "Google Colab", "VS Code"], icon: <Database size={20} /> }
  ];

  const experience = [
    {
      company: "Noboru World",
      role: "Technical Product Intern",
      period: "June 2025 - Present",
      location: "Pune",
      description: "Spearheading product lifecycles and AI automation strategies.",
      achievements: [
        "Developed 'SHERPA', an internal AI agent increasing lead capacity by 600%.",
        "Orchestrated data-driven content strategies achieving 50,000+ organic views in one month.",
        "Integrated NotebookLM and Antigravity to automate manual reporting and research.",
        "Led BRD creation and Sprint Planning for client-side RM Software."
      ]
    }
  ];

  const projects = [
    {
      id: 1,
      title: "SHERPA",
      subtitle: "Automated Outbound Intelligence Engine",
      tags: ["Python", "Gemini 1.5", "Apollo API", "PhantomBuster"],
      shortDesc: "A 'Headless Sales Employee' agent that automates prospecting, enriching, and drafting, increasing capacity from 8 to 60 leads/day.",
      fullDesc: "Designed to solve the manual bottleneck in sales operations. SHERPA utilizes a 'Bridge Architecture' to connect LinkedIn scraping (PhantomBuster) with Data Enrichment (Apollo API) and AI Drafting (Gemini).",
      metrics: [
        "600% Increase in Daily Lead Volume",
        "Zero 'Generic Spam' - 100% Personalized via AI",
        "Single-Node Architecture (Low Cost)"
      ],
      type: "Automation"
    },
    {
      id: 2,
      title: "Filing Buddy",
      subtitle: "Digital Transformation & Custom CA Software",
      tags: ["Web Performance", "BRD", "AI Agents", "Google Analytics"],
      shortDesc: "Comprehensive digital overhaul for a FinTech firm, including LCP/FCP optimization and a custom SaaS portal design.",
      fullDesc: "Led the technical optimization of the Filing Buddy website, resolving technical debt to improve Core Web Vitals. Conceptualized a custom CA management portal through detailed Business Requirement Documents (BRD).",
      metrics: [
        "Achieved 'Green Score' in Core Web Vitals",
        "Integrated Google Agentspace for workflow automation",
        "40% reduction in content drafting time"
      ],
      type: "Product"
    },
    {
      id: 3,
      title: "Trust Vault",
      subtitle: "Federated AI Assistant",
      tags: ["Python", "Streamlit", "Federated Learning", "Differential Privacy"],
      shortDesc: "A privacy-first NLP assistant utilizing Federated Learning and simulated Homomorphic Encryption.",
      fullDesc: "Architected a secure on-device processing system for text generation and Q&A using Phi-2 and DistilBERT. Optimized inference for CPU-only edge devices.",
      metrics: [
        "Privacy-Preserving Architecture",
        "Low-resource edge compatibility",
        "Secure On-Device Processing"
      ],
      type: "AI/ML"
    },
    {
      id: 4,
      title: "FraudShield",
      subtitle: "Transaction Anomaly Detector",
      tags: ["Scikit-learn", "Python", "Streamlit", "Anomaly Detection"],
      shortDesc: "Real-time financial fraud detection system using Isolation Forest and LOF algorithms.",
      fullDesc: "Engineered a system to flag suspicious transactions in real-time. Built an interactive Streamlit dashboard for users to upload CSVs and visualize fraud trends.",
      metrics: [
        "Real-time Detection",
        "Interactive Visualization Dashboard",
        "High Accuracy with Isolation Forest"
      ],
      type: "ML"
    }
  ];

  const education = [
    {
      school: "Kalinga Institute of Industrial Technology (KIIT)",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "CGPA: 9.00/10",
      year: "2022 - 2026 (Expected)"
    }
  ];

  // Modal Component for Projects
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
        <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-blue-400 font-medium">{project.subtitle}</p>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-full transition-colors">
                <X className="w-6 h-6 text-slate-400" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 mb-6 leading-relaxed">
                {project.fullDesc}
              </p>
              
              <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-3">Key Outcomes</h4>
                <ul className="space-y-2">
                  {project.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-start text-slate-300 text-sm">
                      <span className="mr-2 text-green-400">✓</span>
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-slate-800 bg-slate-900/50 flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-200 transition-colors">
              Close Detail
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            P<span className="text-blue-500">.</span>K<span className="text-blue-500">.</span>Anurag
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-slate-400'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 flex flex-col space-y-4">
            {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-slate-300 hover:text-blue-400 py-2"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-blue-400 text-xs font-semibold tracking-wide uppercase">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Intelligent Systems</span> <br /> 
              that Drive Growth.
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              Hi, I'm <span className="text-white font-medium">{personalInfo.name}</span>. 
              I bridge the gap between complex AI architecture and strategic product development, 
              building tools like <span className="text-blue-400">SHERPA</span> and privacy-first assistants.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('projects')} className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center">
                View My Work
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
              <button onClick={() => scrollToSection('contact')} className="px-8 py-3.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 flex items-center justify-center">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900/30 border-y border-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
            <p className="text-slate-400">Tools and technologies I use to build scalable solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/5 group">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="text-sm text-slate-400 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-white mb-6 sticky top-24">Experience</h2>
            </div>
            <div className="md:w-2/3 space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l border-slate-800">
                  <div className="absolute -left-1.5 top-0 w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-slate-500 bg-slate-900 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  
                  <div className="text-blue-400 font-medium mb-4">{exp.company} • {exp.location}</div>
                  <p className="text-slate-400 mb-6">{exp.description}</p>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-300">
                        <span className="mr-3 text-blue-500 mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Education Block */}
               <div className="relative pl-8 border-l border-slate-800 pt-8">
                  <div className="absolute -left-1.5 top-8 w-3 h-3 bg-purple-500 rounded-full border-4 border-slate-950"></div>
                  <h3 className="text-xl font-bold text-white mb-2">Education</h3>
                  {education.map((edu, idx) => (
                    <div key={idx} className="bg-slate-900/50 p-5 rounded-xl border border-slate-800">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-lg font-semibold text-white">{edu.school}</h4>
                            <span className="text-xs text-slate-500">{edu.year}</span>
                        </div>
                        <p className="text-blue-400 text-sm mb-1">{edu.degree}</p>
                        <p className="text-slate-400 text-sm">{edu.grade}</p>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl">
              A selection of my work in AI Agents, Web Optimization, and Fraud Detection. 
              Click on a project to view architectural details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all cursor-pointer flex flex-col h-full"
              >
                <div className="p-8 flex-1">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg ${project.type === 'Automation' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'}`}>
                       {project.type === 'Automation' || project.type === 'AI/ML' ? <Brain size={24} /> : <Briefcase size={24} />}
                    </div>
                    <ExternalLink className="text-slate-600 group-hover:text-blue-400 transition-colors w-5 h-5" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 font-medium text-sm mb-4">{project.subtitle}</p>
                  <p className="text-slate-400 mb-6 line-clamp-3">{project.shortDesc}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs text-slate-300 bg-slate-950 px-2 py-1 rounded border border-slate-800">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                         <span className="text-xs text-slate-500 px-2 py-1">+{project.tags.length - 3}</span>
                    )}
                  </div>
                </div>
                <div className="px-8 py-4 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-sm">
                    <span className="text-slate-500">View Metrics & Architecture</span>
                    <span className="text-blue-400 font-medium group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600/5 clip-path-slant"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-4">Let's Work Together</h2>
              <p className="text-slate-400">
                I'm currently looking for full-time opportunities or freelance projects in 
                AI Automation and Product Engineering.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors group">
                <div className="bg-slate-900 p-3 rounded-lg text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-colors">
                  <Mail size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-slate-500">Email Me</p>
                  <p className="text-white font-medium text-sm sm:text-base break-all">{personalInfo.email}</p>
                </div>
              </a>
              
              <a href={`tel:${personalInfo.phone}`} className="flex items-center p-4 bg-slate-950 border border-slate-800 rounded-xl hover:border-blue-500/50 transition-colors group">
                <div className="bg-slate-900 p-3 rounded-lg text-slate-400 group-hover:text-green-400 group-hover:bg-green-500/10 transition-colors">
                  <Phone size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-slate-500">Call Me</p>
                  <p className="text-white font-medium">{personalInfo.phone}</p>
                </div>
              </a>
            </div>

            <div className="flex justify-center gap-6">
               <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                 <Linkedin size={20} />
                 <span>LinkedIn</span>
               </a>
               <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                 <Github size={20} />
                 <span>GitHub</span>
               </a>
            </div>
            
            <div className="mt-10 text-center">
                 <button className="px-6 py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-2">
                    <Download size={18} />
                    Download Resume
                 </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900">
        <div className="container mx-auto px-6 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Pragaman Kumar Anurag. Built with React & Tailwind.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
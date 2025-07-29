"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code, Eye, ArrowRight, Star, Crown, Briefcase, User } from "lucide-react";
import { useState } from "react";


const clientProjects = [
  {
    title: "TechScout",
    description: "TechScout is a comprehensive platform designed to help businesses discover, compare, and select the right software solutions. It offers detailed analyses across various categories, including accounting, HRMS, CRM, ERP, and more, enabling users to make informed decisions tailored to their specific needs. The platform features trending software options, provides free demos, and utilizes a scoring methodology based on user reviews and product page quality to guide selections. Additionally, TechScout offers services for software companies to increase visibility and credibility by getting listed, showcasing awards, and facilitating effortless software comparisons for potential customers.",
    image: "/techsocut-home.png",
    live: "https://www.techscout.in/",
    tech: ["Next.js", "React.js", "Chart.js", "MongoDb","AWS"],
    category: "E-commerce",
    client: "TechCorp Solutions",
    status: "Live",
    featured: true
  },
  {
    title: "AZ Led Website",
    description: "Az Sys is a leading provider of LED display solutions based in Mumbai, specializing in the design and manufacture of high-performance LED video walls. Their products include indoor and outdoor video walls, LED sign boards, LED standees, and LED video vans, all designed to deliver vibrant colors, sharp images, and seamless performance.",
    image: "/az-home.png",
    live: "https://azsys.in/",
    tech: ["Next.js","React.js", "Firebase"],
    category: "Healthcare",
    client: "MedTech Inc",
    status: "Live",
    featured: true
  },
  {
    title: "Safari Kid School",
    description: "Safari Kid is an international chain of preschools and daycare centers offering a child-centric curriculum focused on whole-child development. With a presence in India, Safari Kid provides experiential learning, nurturing environments, and personalized education programs designed to foster academic excellence and character development. The centers emphasize innovative teaching methods and global practices to ensure each child thrives, preparing them for future success. Safari Kid has been recognized for its contributions to early childhood education with various national and international awards.",
    image: "/safari-home-new.png",
    live: "https://safarikidindia.com/",
    tech: ["Next.js","React.js", "Firebase"],
    category: "Real Estate",
    client: "PropertyPro Ltd",
    status: "Live",
    featured: true
  },
   {
    title: "Kaf InfoTech",
    description: "KAF Infotech is a Mumbai-based technology firm committed to providing innovative digital solutions and fostering education through modern and effective learning platforms.",
    image: "/kaf-home.png",
    live: "https://kafinfotech.com/",
    tech: ["Next.js","React.js", "Firebase"],
    category: "Real Estate",
    client: "PropertyPro Ltd",
    status: "Live",
    featured: true
  },
   {
    title: "MLH Trust",
    description: "The Malik Liyaqat Husain (MLH) Education and Charitable Trust is dedicated to empowering underprivileged individuals through education, healthcare, and skill development. Established in 2010, the trust provides financial assistance for professional courses, skill-based training for dropout students, and support for medical and marriage expenses. MLH Trust aims to uplift communities and promote sustainable development, focusing on access to education and essential services.",
    image: "/mlh-home.png",
    live: "https://www.mlhngo.com/",
    tech: ["Next.js","React.js", "Firebase"],
    category: "Real Estate",
    client: "PropertyPro Ltd",
    status: "Live",
    featured: true
  }
];

const personalProjects = [
  {
    title: "Weather App",
    description: "Real-time weather application with beautiful UI and location-based forecasts",
    image: "/weather.png",
    code: "https://github.com/Sufiyan-11/weather-app-react",
    live: "https://weather-appp-react.netlify.app/",
    tech: ["React", "API", "CSS3"],
    category: "Web App"
  },
  {
    title: "Movie App",
    description: "Discover and explore movies with detailed information and ratings",
    image: "/movieapp.png",
    code: "https://github.com/Sufiyan-11/movie-app-react",
    live: "https://movies-appp-react.netlify.app/",
    tech: ["React", "API"],
    category: "Entertainment"
  },
  {
    title: "Morgan",
    description: "Modern business website with sleek design and smooth animations",
    image: "/morgan.png",
    code: "https://github.com/Sufiyan-11/react-website",
    live: "https://react-website-morgan.netlify.app/#/",
    tech: ["React", "SCSS", "Animation"],
    category: "Business"
  },
  {
    title: "Comforty (E-com)",
    description: "Full-featured e-commerce platform for furniture with cart and checkout",
    image: "/comforty.png",
    code: "https://github.com/Sufiyan-11/Ecom-website",
    live: "https://comforty-chair-ecom.netlify.app",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "E-commerce"
  },
  {
    title: "SeedKaro",
    description: "Agricultural platform connecting farmers with modern farming solutions",
    image: "/seedkaro.png",
    code: "https://github.com/Sufiyan-11/Project-4",
    live: "https://seedkaro-sufiyan-shaikh.netlify.app",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "Agriculture"
  },
  {
    title: "Stack",
    description: "Developer community platform for sharing knowledge and resources",
    image: "/stack.png",
    code: "https://github.com/Sufiyan-11/Stack",
    live: "https://stack-by-sufiyanshaikh.netlify.app",
    tech: ["HTML", "CSS", "Bootstrap"],
    category: "Community"
  },
  {
    title: "Coffee Shop",
    description: "Cozy coffee shop website with menu, location, and online ordering",
    image: "/coffee shop.png",
    code: "https://github.com/Sufiyan-11/Coffee-shop",
    live: "https://sufiyan-11.github.io/Coffee-shop/",
    tech: ["HTML", "CSS"],
    category: "Food & Beverage"
  },
  {
    title: "Ark Studio",
    description: "Creative design studio showcase with portfolio and client testimonials",
    image: "/ark.png",
    code: "https://github.com/Sufiyan-11/Project-3",
    live: "https://sufiyan-11.github.io/Project-3/",
    tech: ["HTML", "CSS"],
    category: "Design"
  },
];

const ClientProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        ease: [0.25, 0.25, 0, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-red-500/20 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-amber-400/50 hover:border-amber-300/70 transition-all duration-500 h-full shadow-2xl shadow-amber-500/20"
    >
      {/* Premium glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-400/10 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Crown icon for featured projects */}
      <div className="absolute top-4 right-4 z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
          className="p-2 bg-amber-500/20 backdrop-blur-sm rounded-full border border-amber-400/50"
        >
          <Crown className="w-5 h-5 text-amber-400" />
        </motion.div>
      </div>

      {/* Live status badge */}
      <div className="absolute top-4 left-4 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.15 + 0.2 }}
          className="flex items-center gap-2 px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full border border-green-400/50"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs font-semibold text-green-300">LIVE</span>
        </motion.div>
      </div>

      {/* Image container */}
      <div className="relative overflow-hidden h-56 sm:h-60 md:h-56 lg:h-60">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/50 to-orange-900/50 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 ${
            isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } group-hover:scale-110`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Hover overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-amber-500/30 to-orange-500/30 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-3"
          >
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group/btn"
            >
              <Eye className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-14rem)] sm:h-[calc(100%-15rem)] md:h-[calc(100%-14rem)] lg:h-[calc(100%-15rem)]">
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.4 }}
          className="flex items-center gap-2 mb-3"
        >
          <Briefcase className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-300">{project.client}</span>
        </motion.div> */}

        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.5 }}
          className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        
         <div 
      className="relative inline-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.6 }}
          className="text-gray-300 text-sm sm:text-base mb-4 flex-grow leading-relaxed"
        >
          {project.description.length > 100 ? project.description.slice(0, 100) + "..." : project.description}
        </motion.p>
        {/* Popover for full text */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 10 }}
          className="absolute left-0 bottom-5 z-100 w-full p-3 bg-gray-800 text-gray-200 text-sm rounded-lg shadow-lg"
        >
          {project.description}
        </motion.div>
      )}
      </div>

        {/* Tech stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.7 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((tech: string) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs bg-amber-500/20 text-amber-300 rounded-md border border-amber-400/50 hover:border-amber-300/70 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.8 }}
          className="mt-auto relative z-20"
        >
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all duration-300 group/btn text-sm sm:text-base"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            View Live Project
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const PersonalProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-500 h-full"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Category badge */}
      <div className="absolute top-4 left-4 z-10">
        <motion.span 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: index * 0.1 + 0.3 }}
          className="inline-block px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 rounded-full backdrop-blur-sm border border-cyan-500/30"
        >
          {project.category}
        </motion.span>
      </div>

      {/* Image container */}
      <div className="relative overflow-hidden h-48 sm:h-52 md:h-48 lg:h-52">
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-700 animate-pulse flex items-center justify-center">
            <div className="w-12 h-12 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image 
          src={project.image} 
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover transition-all duration-700 ${
            isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          } group-hover:scale-110`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
        
        {/* Hover overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            className="flex gap-3"
          >
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group/btn"
            >
              <Eye className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
            </a>
            <a 
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/30 transition-all duration-300 group/btn"
            >
              <Code className="w-5 h-5 text-white group-hover/btn:scale-110 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)] sm:h-[calc(100%-13rem)] md:h-[calc(100%-12rem)] lg:h-[calc(100%-13rem)]">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.4 }}
          className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-gray-300 text-sm sm:text-base mb-4 flex-grow leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tech stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((tech: string, techIndex: number) => (
            <span 
              key={tech}
              className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-md border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.7 }}
          className="flex gap-3 mt-auto relative z-20"
        >
          <a 
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-xl border border-gray-600 hover:border-gray-500 transition-all duration-300 group/btn text-sm sm:text-base"
          >
            <Code className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
            Code
          </a>
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-500 hover:to-cyan-400 text-white rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 group/btn text-sm sm:text-base"
          >
            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            Live
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 text-sm font-semibold bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20 mb-6">
              My Works
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.25, 0, 1] }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent mb-6"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.25, 0, 1] }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
             From client success stories to personal innovations - explore my journey 
            in creating impactful digital solutions.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.25, 0, 1] }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-8 rounded-full"
          />
        </div>

        {/* Client Projects Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl border border-amber-400/30">
                <Crown className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Client Projects</h3>
                <p className="text-amber-400 font-medium">Live Production Applications</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-500/50 to-transparent" />
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientProjects.map((project, index) => (
              <ClientProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Personal Projects section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/30">
                <User className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Personal Projects</h3>
                <p className="text-cyan-400 font-medium">Learning & Experimentation</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {personalProjects.map((project, index) => (
              <PersonalProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 sm:mt-20"
        >
          <p className="text-gray-400 mb-6 text-lg">
            Interested in working together?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let&apos;s Create Something Amazing
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
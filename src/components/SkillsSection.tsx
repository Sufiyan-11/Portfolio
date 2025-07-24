"use client"
import React, { useState, useEffect } from 'react';
import { Sparkles} from 'lucide-react';
import { RiTailwindCssFill,RiNextjsFill } from "react-icons/ri";
import { SiJquery, SiFirebase } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";

const skillsLeft = [
  { name: "React Js", icon: <FaReact />, percent: 90, color: "from-cyan-400 to-blue-500", bgGlow: "bg-cyan-400/20" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, percent: 90, color: "from-teal-400 to-cyan-500", bgGlow: "bg-teal-400/20" },
  { name: "GitHub", icon: <FaGithub />, percent: 90, color: "from-purple-400 to-pink-500", bgGlow: "bg-purple-400/20" },
  { name: "CSS", icon: <FaCss3Alt />, percent: 90, color: "from-blue-400 to-indigo-500", bgGlow: "bg-blue-400/20" },
  { name: "JavaScript", icon: <FaJs />, percent: 90, color: "from-yellow-400 to-orange-500", bgGlow: "bg-yellow-400/20" },
];

const skillsRight = [
  { name: "Next.js", icon: <RiNextjsFill />, percent: 85, color: "from-gray-400 to-gray-600", bgGlow: "bg-gray-400/20" },
  { name: "HTML", icon: <FaHtml5 />, percent: 90, color: "from-orange-400 to-red-500", bgGlow: "bg-orange-400/20" },
  { name: "Bootstrap", icon: <FaBootstrap />, percent: 90, color: "from-purple-400 to-violet-500", bgGlow: "bg-purple-400/20" },
  { name: "jQuery", icon: <SiJquery />, percent: 70, color: "from-blue-400 to-cyan-500", bgGlow: "bg-blue-400/20" },
  { name: "Firebase", icon: <SiFirebase />, percent: 60, color: "from-yellow-400 to-amber-500", bgGlow: "bg-yellow-400/20" },
];

interface SkillCardProps {
  skill: typeof skillsLeft[0];
  index: number;
  isVisible: boolean;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isVisible }) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedPercent(skill.percent);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.percent, index]);

  return (
    <div
      className={`group relative p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 
        hover:border-gray-600/50 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1
        ${isHovered ? skill.bgGlow : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${index * 0.1}s`,
        animation: isVisible ? `fadeInUp 0.6s ease-out forwards` : 'none'
      }}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${skill.bgGlow} blur-xl`}></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <span className="text-xl">{skill.icon}</span>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-white text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-300">
              {skill.name}
            </h3>
            <span className="text-sm text-gray-400 font-semibold">{skill.percent}% Proficiency</span>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative">
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out relative`}
              style={{ width: `${animatedPercent}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
            </div>
          </div>
          
          {/* Percentage indicator */}
          <div 
            className="absolute top-0 transform -translate-x-1/2 -translate-y-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ left: `${animatedPercent}%` }}
          >
            <div className={`px-2 py-1 bg-gradient-to-r ${skill.color} text-white text-xs font-bold rounded shadow-lg`}>
              {skill.percent}%
            </div>
            <div className={`w-2 h-2 bg-gradient-to-r ${skill.color} transform rotate-45 mx-auto -mt-1`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across various technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
            {skillsLeft.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {skillsRight.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index + skillsLeft.length}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "10+", label: "Technologies" },
            { number: "3+", label: "Years Experience" },
            { number: "50+", label: "Projects Built" },
            { number: "90%", label: "Average Proficiency" }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
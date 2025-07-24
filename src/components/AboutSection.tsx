"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, ExternalLink, Calendar, MapPin, FileText, Award, Code, Users } from "lucide-react";

const education = [
  {
    title: "MCA, Mumbai University",
    place: "Late Bhausaheb Hiray Institute of Computer Application",
    date: "2020 - 2022",
    details: [
      "Research Paper Published in IJARSCT Journal",
      "NPTEL Cloud Computing Certificate",
    ],
    links: [
      { href: "/research%20paper.pdf", label: "Paper", icon: FileText },
      { href: "/certificate.pdf", label: "Certificate", icon: Award },
      { href: "/Cloud%20computing.jpg", label: "Cloud Cert", icon: Code },
    ],
    // grade: "First Class",
  },
  {
    title: "BSC.IT, Mumbai University",
    place: "Maharashtra College Of Arts, Science and Commerce",
    date: "2016-2019",
    details: ["Strong foundation in Computer Science fundamentals", "Active participation in technical workshops"],
    links: [],
    // grade: "First Class",
  },
];

const experience = [
  {
    title: "Frontend Developer",
    place: "KafInfo Tech",
    date: "May 2023 - Present",
    details: [
      "Proficient in utilizing technologies such as Next.js, React.js, and Firebase to develop dynamic websites.",
      "Successfully contributed to the development of multiple client projects.",
      "Collaborated with cross-functional teams to deliver high-quality solutions."
    ],
    links: [],
    skills: ["Next.js", "React.js", "Firebase", "TypeScript"],
    type: "Full-time"
  },
  {
    title: "Web Developer Intern",
    place: "Late Bhausaheb Hiray Institute of Computer Application",
    date: "Mar 2022 - Aug 2022",
    details: [
      "Worked in College Incubation Center.",
      "Developed ERP Project using .Net MVC framework.",
      "Gained hands-on experience in enterprise application development."
    ],
    links: [
      { href: "/Experience%20letter.jpg", label: "Experience Letter", icon: FileText },
    ],
    skills: [".NET MVC", "C#", "SQL Server"],
    type: "Internship"
  },
  {
    title: "Service Desk Analyst",
    place: "HCL",
    date: "Feb 2020 - Nov 2020",
    details: [
      "Handled incoming queries and help requests from end users, over the phone.",
      "Resolved technical issues remotely and maintained confidentiality.",
      "Achieved 95% customer satisfaction rating."
    ],
    links: [],
    skills: ["Technical Support", "Problem Solving", "Customer Service"],
    type: "Full-time"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.25, 0, 1]
    }
  }
};

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/20 via-transparent to-transparent"></div>
      
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -20, 20, -20],
              opacity: [0, 1, 0.5, 1, 0],
              scale: [0.5, 1.2, 0.8, 1]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Enhanced SVG Blob Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ 
          opacity: 0.15, 
          scale: 1, 
          rotate: 10,
        }}
        transition={{ 
          duration: 2, 
          ease: "easeOut",
          rotate: { repeat: Infinity, duration: 20, repeatType: "reverse" }
        }}
        className="absolute left-1/2 top-1/4 -translate-x-1/2 w-[800px] h-[800px] -z-10 pointer-events-none"
      >
        <div className="w-full h-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-7xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 tracking-tight"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            About Me
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center gap-20"
        >
          {/* Enhanced Main About Text */}
          <motion.div
            // variants={itemVariants}
            className="relative group max-w-4xl"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20 shadow-2xl">
              <motion.p
                className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Hi! I&apos;m <motion.span 
                  className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold text-2xl md:text-3xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Sufiyan Shaikh
                </motion.span>, a passionate programmer and web developer. I love building beautiful, functional web apps and solving real-world problems with code. My strengths are logical thinking, attention to detail, and a drive to keep learning and growing in tech. I thrive in collaborative teams and always aim to deliver my best work.
              </motion.p>
            </div>
          </motion.div>

          {/* Enhanced Timeline Section */}
          <div className="relative w-full max-w-5xl mx-auto">
            {/* Enhanced Vertical timeline bar */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1">
              <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-cyan-200 rounded-full origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>

            <div className="flex flex-col gap-16">
              {/* Enhanced Education Section */}
              <motion.div 
              // variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-8 ml-16 md:ml-20"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl shadow-lg">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    Education
                  </h3>
                </motion.div>
                
                {education.map((edu, idx) => (
                  <motion.div
                    key={edu.title}
                    // variants={itemVariants}
                    className="relative mb-12 ml-16 md:ml-20"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Enhanced Timeline dot */}
                    <motion.div
                      className="absolute -left-12 md:-left-16 top-8 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce border-4 border-white shadow-lg shadow-cyan-400/50"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full "></div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/50 via-blue-500/50 to-purple-500/50 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-cyan-400/20 overflow-hidden">
                        {/* Floating orb decoration */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-xl"></div>
                        
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                            <div>
                              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                                {edu.title}
                              </h4>
                              <div className="flex items-center gap-2 text-gray-300 mb-1">
                                <MapPin className="w-4 h-4 text-cyan-400" />
                                <p className="text-sm md:text-base">{edu.place}</p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Calendar className="w-4 h-4 text-blue-400" />
                                <p className="text-sm">{edu.date}</p>
                              </div>
                            </div>
                            {/* {edu.grade && (
                              <div className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/20 rounded-xl">
                                <span className="text-green-300 font-semibold text-sm">{edu.grade}</span>
                              </div>
                            )} */}
                          </div>

                          {edu.details.length > 0 && (
                            <ul className="space-y-2 mb-4">
                              {edu.details.map((detail, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm md:text-base leading-relaxed">{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}

                          {edu.links.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                              {edu.links.map((link, i) => {
                                const IconComponent = link.icon;
                                return (
                                  <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/30 text-cyan-300 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <IconComponent className="w-4 h-4" />
                                    {link.label}
                                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                                  </motion.a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Experience Section */}
              <motion.div 
              // variants={itemVariants}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-8 ml-16 md:ml-20"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                    Experience
                  </h3>
                </motion.div>

                {experience.map((exp, idx) => (
                  <motion.div
                    key={exp.title + exp.date}
                    // variants={itemVariants}
                    className="relative mb-12 ml-16 md:ml-20"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* Enhanced Timeline dot */}
                    <motion.div
                      className="absolute -left-12 md:-left-16 top-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full animate-bounce border-4 border-white shadow-lg shadow-purple-400/50"
                      whileHover={{ scale: 1.2, rotate: -180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="group relative"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/50 via-pink-500/50 to-red-500/50 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                      <div className="relative bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-sm rounded-3xl shadow-2xl p-6 border border-purple-400/20 overflow-hidden">
                        {/* Floating orb decoration */}
                        <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-xl"></div>
                        
                        <div className="relative z-10">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                            <div>
                              <h4 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                {exp.title}
                              </h4>
                              <div className="flex items-center gap-2 text-gray-300 mb-1">
                                <MapPin className="w-4 h-4 text-purple-400" />
                                <p className="text-sm md:text-base">{exp.place}</p>
                              </div>
                              <div className="flex items-center gap-2 text-gray-400">
                                <Calendar className="w-4 h-4 text-pink-400" />
                                <p className="text-sm">{exp.date}</p>
                              </div>
                            </div>
                            <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/20 rounded-xl">
                              <span className="text-purple-300 font-semibold text-sm">{exp.type}</span>
                            </div>
                          </div>

                          {exp.details.length > 0 && (
                            <ul className="space-y-2 mb-4">
                              {exp.details.map((detail, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-start gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm md:text-base leading-relaxed">{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          )}

                          {exp.skills && exp.skills.length > 0 && (
                            <div className="mb-4">
                              <div className="flex items-center gap-2 mb-3">
                                <Code className="w-4 h-4 text-purple-400" />
                                <span className="text-sm font-semibold text-purple-300">Skills Used:</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                  <motion.span
                                    key={i}
                                    className="px-3 py-1 bg-gray-800/60 border border-purple-400/30 text-purple-200 rounded-lg text-xs font-medium"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(168, 85, 247, 0.1)" }}
                                  >
                                    {skill}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          )}

                          {exp.links.length > 0 && (
                            <div className="flex flex-wrap gap-3">
                              {exp.links.map((link, i) => {
                                const IconComponent = link.icon;
                                return (
                                  <motion.a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/link flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-400/30 text-purple-300 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <IconComponent className="w-4 h-4" />
                                    {link.label}
                                    <ExternalLink className="w-3 h-3 opacity-60 group-hover/link:opacity-100 transition-opacity" />
                                  </motion.a>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-2xl backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-gray-200 font-medium">Let&apos;s collaborate and build something amazing together!</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
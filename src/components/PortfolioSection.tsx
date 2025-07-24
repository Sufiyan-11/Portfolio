"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Weather App",
    image: "/weather.png",
    code: "https://github.com/Sufiyan-11/weather-app-react",
    live: "https://weather-appp-react.netlify.app/",
  },
  {
    title: "Movie App",
    image: "/movieapp.png",
    code: "https://github.com/Sufiyan-11/movie-app-react",
    live: "https://movies-appp-react.netlify.app/",
  },
  {
    title: "Morgan",
    image: "/morgan.png",
    code: "https://github.com/Sufiyan-11/react-website",
    live: "https://react-website-morgan.netlify.app/#/",
  },
  {
    title: "Comforty (E-com)",
    image: "/comforty.png",
    code: "https://github.com/Sufiyan-11/Ecom-website",
    live: "https://comforty-chair-ecom.netlify.app",
  },
  {
    title: "SeedKaro",
    image: "/seedkaro.png",
    code: "https://github.com/Sufiyan-11/Project-4",
    live: "https://seedkaro-sufiyan-shaikh.netlify.app",
  },
  {
    title: "Stack",
    image: "/stack.png",
    code: "https://github.com/Sufiyan-11/Stack",
    live: "https://stack-by-sufiyanshaikh.netlify.app",
  },
  {
    title: "Coffee Shop",
    image: "/coffee shop.png",
    code: "https://github.com/Sufiyan-11/Coffee-shop",
    live: "https://sufiyan-11.github.io/Coffee-shop/",
  },
  {
    title: "Ark Studio",
    image: "/ark.png",
    code: "https://github.com/Sufiyan-11/Project-3",
    live: "https://sufiyan-11.github.io/Project-3/",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-cyan-400 mb-10 text-center"
        >
          Portfolio
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl shadow-lg p-5 flex flex-col h-full border border-gray-700 hover:border-cyan-400 transition group"
            >
              <div className="overflow-hidden rounded-xl mb-4">
                <Image src={project.image} alt={project.title} width={400} height={220} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h5 className="text-xl font-bold text-white mb-4">{project.title}</h5>
              <div className="flex gap-4 mt-auto">
                <a href={project.code} target="_blank" className="flex-1 text-center bg-gray-900 hover:bg-cyan-600 text-cyan-400 hover:text-white font-semibold px-4 py-2 rounded-full transition">View Code</a>
                <a href={project.live} target="_blank" className="flex-1 text-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-4 py-2 rounded-full transition">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
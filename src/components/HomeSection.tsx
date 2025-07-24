"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { FiDownload } from "react-icons/fi";

const roles = [
  "Next.js Developer",
  "React.js Developer",
  "Programmer",
  "Problem Solver",
  "Tech Explorer",
];

export default function HomeSection() {
  const typeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let i = 0;
    let j = 0;
    let isDeleting = false;
    let current = "";
    let timeout: NodeJS.Timeout;
    const type = () => {
      const role = roles[i % roles.length];
      if (!isDeleting) {
        current = role.slice(0, j + 1);
        j++;
        if (j === role.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1200);
          return;
        }
      } else {
        current = role.slice(0, j - 1);
        j--;
        if (j === 0) {
          isDeleting = false;
          i++;
        }
      }
      if (typeRef.current) typeRef.current.textContent = current;
      timeout = setTimeout(type, isDeleting ? 60 : 100);
    };
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" className="pt-32 pb-16 min-h-[80vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-950 to-cyan-950">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Hello, my name is <span className="text-cyan-400">Sufiyan Shaikh</span>
            <span className="inline-block align-middle ml-2"><Image src="/giphy.gif" alt="hi" width={65} height={50} className="inline-block animate-bounce" /></span>
          </h1>
          <div className="text-xl sm:text-2xl font-medium mb-6 flex items-center gap-2">
            <span>I am a</span>
            <span ref={typeRef} className="text-cyan-400 font-bold animate-pulse"></span>
          </div>
          <a 
              href="/Resume.pdf" 
              target="_blank" 
              className="inline-flex items-center justify-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-cyan-500/25 hover:-translate-y-0.5"
            >
              <FiDownload className="w-4 h-4 mr-2" />
              Download CV
            </a>
        </div>
        <div className="flex-1 flex justify-center">
          <Image src="/hi-robot.gif" alt="robot" width={320} height={320} className="rounded-2xl shadow-2xl w-64 h-64 md:w-80 md:h-80 object-contain" />
        </div>
      </div>
    </section>
  );
} 
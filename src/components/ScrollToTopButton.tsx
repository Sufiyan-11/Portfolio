import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setVisible(scrollTop > 300);
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-50 transition-all duration-500 ease-out transform ${
      visible 
        ? "translate-y-0 opacity-100 scale-100 animate-bounce" 
        : "translate-y-16 opacity-0 scale-75 pointer-events-none"
    }`}>
      {/* Progress Ring */}
      <div className="relative">
        <svg 
          className="w-14 h-14 -rotate-90 absolute inset-0" 
          viewBox="0 0 56 56"
        >
          {/* Background Circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress Circle */}
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-gradient transition-all duration-300 ease-out"
            style={{
              strokeDasharray: `${2 * Math.PI * 24}`,
              strokeDashoffset: `${2 * Math.PI * 24 * (1 - scrollProgress / 100)}`,
            }}
          />
        </svg>
        
        {/* Main Button */}
        <button
          onClick={scrollToTop}
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 
                     shadow-xl hover:shadow-2xl transition-all duration-300 ease-out
                     hover:scale-110 active:scale-95 group
                     before:absolute before:inset-0 before:rounded-full 
                     before:bg-gradient-to-br before:from-blue-600 before:via-purple-600 before:to-pink-600
                     before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
                     focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
          aria-label="Scroll to top"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 
                          opacity-75 blur-md group-hover:blur-lg transition-all duration-300 -z-10" />
          
          {/* Icon Container */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <ChevronUp 
              size={24} 
              className="text-white drop-shadow-sm group-hover:drop-shadow-md 
                         transition-all duration-300 group-hover:-translate-y-0.5" 
            />
          </div>
          
          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 
                          opacity-0 group-hover:opacity-30 animate-ping" />
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm 
                        rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300
                        whitespace-nowrap pointer-events-none">
          Scroll to top
          <div className="absolute top-full right-3 w-0 h-0 border-l-2 border-r-2 border-t-4 
                          border-transparent border-t-gray-900" />
        </div>
      </div>
    </div>
  );
}
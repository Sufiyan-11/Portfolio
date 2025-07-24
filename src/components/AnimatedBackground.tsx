"use client";
import { motion } from "framer-motion";

interface AnimatedBackgroundProps {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}

export default function AnimatedBackground({
  color = "#22d3ee",
  className = "",
  style = {},
  duration = 8,
  delay = 0,
}: AnimatedBackgroundProps) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.18, scale: 1, rotate: 360 }}
      transition={{ duration, delay, repeat: Infinity, repeatType: "loop", ease: "linear" }}
      className={`absolute z-0 ${className}`}
      style={style}
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_1_2)">
        <ellipse cx="300" cy="300" rx="300" ry="300" fill={color} />
      </g>
      <defs>
        <filter id="filter0_f_1_2" x="-100" y="-100" width="800" height="800" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur_1_2" />
        </filter>
      </defs>
    </motion.svg>
  );
} 
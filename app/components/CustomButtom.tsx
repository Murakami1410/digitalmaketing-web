"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface CustomButtomProps {
  title: string;
  className?: string;
  handleclick?: () => void;
  btnType?: "button" | "submit" | "reset";
}

const CustomButtom: React.FC<CustomButtomProps> = (props) => {
  const { title, className, handleclick, btnType } = props;
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Alterado para 50
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <button
        disabled={false}
        type={btnType || "button"}
        className={`mt-5 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 bg-transparent px-6 font-medium text-neutral-200 transition hover:scale-110 ${className}`}
        onClick={handleclick}
      >
        <span>{title}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    </motion.div>
  );
};

export default CustomButtom;
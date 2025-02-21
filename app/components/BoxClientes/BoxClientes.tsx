import { useEffect, useState } from "react";
import Image from "next/image";
import Star from "../../../public/Star.svg";
import { motion } from "framer-motion";

interface BoxClientesProps {
  description: string;
  name: string;
  empresa: string;
}

export default function BoxClientes(props: BoxClientesProps) {
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    renderStars();
  }, []);

  function renderStars() {
    const starsArray = Array(5).fill(0);
    setStars(starsArray);
  }

  return (
    <motion.div
      className="w-full max-w-full sm:max-w-lg bg-transparent flex flex-wrap sm:flex-nowrap gap-6 sm:gap-8 items-center shadow-xl rounded-md p-6 sm:p-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col gap-4 w-full">
        <div className="w-fit flex gap-2">
          {stars.map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image src={Star} alt="Star Icon" className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          ))}
        </div>
        <div className="w-full overflow-hidden">
          <p className="text-[14px] sm:text-[16px] font-light py-2 sm:py-3 text-white opacity-80 break-words">
            {props.description}
          </p>
          <div>
            <p className="text-[14px] sm:text-[16px] font-bold text-white">{props.name}</p>
            <p className="text-[14px] sm:text-[16px] font-regular text-white opacity-80">
              {props.empresa}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

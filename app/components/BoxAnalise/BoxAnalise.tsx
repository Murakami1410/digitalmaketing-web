import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface BoxAnaliseProps {
    title: string;
    description: string;
}

export default function BoxAnalise(props: BoxAnaliseProps) {
    const controls = useAnimation();
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                controls.start({ opacity: 1, x: 0 });
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls, lastScrollY]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -window.innerWidth }}
            animate={controls}
            transition={{ duration: 2 }} // Aumentando a duração da transição para 2 segundos
            className={`w-full bg-[#111827] flex gap-8 items-center shadow-xl rounded-md p-10 hover:scale-2`}
        >
            <div className="flex flex-col gap-4">
                <div className="w-full">
                    <p className='text-[16px] font-light py-3 text-white opacity-80'>
                        {props.title}
                    </p>
                    <p className='text-[28px] font-bold text-white'>
                        {props.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

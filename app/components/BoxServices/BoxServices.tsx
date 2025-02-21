import { useState, useEffect } from "react";
import CustomButtom from "../CustomButtom";
import Image, { StaticImageData } from "next/image";
import { motion, useAnimation } from "framer-motion";

interface BoxServicesProps {
    title: string;
    description: string;
    image_component: StaticImageData;
}

export default function BoxServices(props: BoxServicesProps) {
    const [currentImage, setCurrentImage] = useState(props.image_component);
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, transition: { duration: 1 } }}
            animate={controls}
            className={`flex gap-8 items-center shadow-xl rounded-md p-14 text-black w-full bg-transparent`}
        >
            <div className="flex flex-col gap-4">
                <div className="w-fit">
                    <Image src={currentImage} alt="." />
                </div>
                <div className="w-full">
                    <p className='text-[28px] font-bold py-3 text-white'>
                        {props.title}
                    </p>
                    <p className='text-[16px] font-light text-white opacity-80'>
                        {props.description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

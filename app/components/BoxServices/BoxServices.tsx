import { useState } from "react";
import CustomButtom from "../CustomButtom";
import Image, { StaticImageData } from "next/image";

interface BoxProgramasProps {
    title: string;
    description: string;
 
    image_component: StaticImageData;
}

export default function BoxProgramas(props: BoxProgramasProps) {
    const [currentImage, setCurrentImage] = useState(props.image_component);

    return (
        <div className={`w-1/3 flex gap-8 items-center shadow-xl  rounded-md p-14 text-black w-full bg-transparent hover:scale-2`}>
            <div className="flex flex-col gap-4">
            <div className="w-fit">
                <Image 
                    src={currentImage} 
                    alt="." 
                />
            </div>
            <div className="w-full">
                <p className='text-[28px] font-bold py-3 text-white'>   
                    {props.title}
                </p>
                <p className='text-[16px] font-light text-white opacity-80 '> 
                    {props.description}
                </p>
                </div>
            </div>
        </div>
    )
}
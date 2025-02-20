import { useState } from "react";
import Image, { StaticImageData } from "next/image";

interface BoxAnaliseProps {
    title: string;
    description: string;
 

}

export default function BoxProgramas(props: BoxAnaliseProps) {

    return (
        <div className={`w-full bg-[#111827] flex gap-8 items-center shadow-xl  rounded-md p-10  hover:scale-2`}>
            <div className="flex flex-col gap-4">
            <div className="w-full">
                <p className='text-[16px] font-light py-3 text-white opacity-80'>   
                    {props.title}
                </p>
                <p className='text-[28px] font-bold text-white  '> 
                    {props.description}
                </p>
                </div>
            </div>
        </div>
    )
}
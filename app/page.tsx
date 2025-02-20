"use client";

import Image from "next/image";
import React from "react";
import CustomButtom from "./components/CustomButtom";
import BoxServices from "./components/BoxServices/BoxServices";
import alvo from "../public/alvo.svg";
import foguete from "../public/foguete.svg";
import globo from "../public/globo.svg";
import seta from "../public/Seta.svg";

export default function Home() {
  return (
    <div className="">
      <section className="h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264322-b44d383a2906?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center" />
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <h1 className="text-center text-[48px] font-bold  ">
            Transforme Sua Presença
            <span className="bg-gradient-to-r from-[#2e005c] to-[#090979] inline-block text-transparent bg-clip-text">

              Digital

            </span>
          </h1>
          <p className="text-center w-1/3 opacity-80">Criamos estratégias de marketing digital de ponta que geram resultados e cresce seu negócio</p>
          <CustomButtom title="Saiba Mais" className="mt-10 p-3 font-bold text-white rounded-full border-2 hover:border-2 hover:border-[blue] hover:text-blue hover:p-3 hover:rounded-full transition-all ease-in delay-75" />
        </div>
      </section>

      <section className="@conteiner relative mt-10 p-20 flex flex-col items-center justify-center relative ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-[48px]">Nossos Serviços</h1>
          <p className="opacity-80">Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital</p>
        </div>
        <div className="flex flex-row gap-8  mt-20 @sm:flex-col">

          <BoxServices

            image_component={foguete}
            description='Estratégias digitais abrangentes adaptadas aos seus objetivos de negócios'
            title='Estrategia Digital'
          />
          <BoxServices

            image_component={alvo}
            description='Envolvendo o gerenciamento de mídia social e a criação de conteúdo'
            title='Social Media'
          />

          <BoxServices

            image_component={globo}
            description='Técnicas avançadas de SEO para melhorar sua visibilidade online'
            title='Otimização de SEO'
          />

          <BoxServices

            image_component={seta}
            description='Análise detalhada e acompanhamento de desempenho'
            title='Analise & Reports'
          />
        </div>
      </section>
    </div>
  );
}

"use client";

import Image from "next/image";
import React from "react";
import CustomButtom from "./components/CustomButtom";
import BoxServices from "./components/BoxServices/BoxServices";
import alvo from "../public/alvo.svg";
import foguete from "../public/foguete.svg";
import globo from "../public/globo.svg";
import { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import seta from "../public/seta.svg";
import BoxAnalise from "./components/BoxAnalise/BoxAnalise";
import BoxClientes from "./components/BoxClientes/BoxClientes";
import barra from "../public/barra.svg";
import escudo from "../public/escudo.svg";
import raio from "../public/raio.svg";
import time from "../public/time.svg";
import send from "../public/send.svg";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Home() {
  return (
    <div className="">
      <section className="h-screen flex items-center justify-center relative px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557264322-b44d383a2906?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
        <div className="flex flex-col items-center justify-center absolute inset-0 text-center px-4">
          <h1 className="text-[32px] md:text-[52px] font-bold leading-tight ">
            Transforme Sua Presença <span className="bg-gradient-to-r from-[#2e005c] to-[#090979] inline-block text-transparent bg-clip-text"> Digital</span>
          </h1>
          <p className="w-full md:w-2/3 opacity-80 text-base md:text-lg mt-4">
            Criamos estratégias de marketing digital de ponta que geram resultados e fazem seu negócio crescer.
          </p>
          <CustomButtom
            title="Saiba Mais"
            className="mt-10 p-3 font-bold text-white rounded-full border-2 hover:border-blue-500 hover:text-blue-500 transition-all"
          />

        </div>
      </section>

      <section className="container mx-auto mt-10 p-4 md:p-6 text-center">
        <h1 className="font-bold text-3xl md:text-4xl">Nossos Serviços</h1>
        <p className="opacity-80 max-w-2xl mx-auto">Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital.</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <BoxServices image_component={foguete} description="Estratégias digitais abrangentes adaptadas aos seus objetivos" title="Estratégia Digital" />
          <BoxServices image_component={alvo} description="Gerenciamento de mídia social e criação de conteúdo" title="Social Media" />
          <BoxServices image_component={globo} description="SEO avançado para melhorar sua visibilidade online" title="Otimização de SEO" />
          <BoxServices image_component={seta} description="Análise detalhada e acompanhamento de desempenho" title="Análise & Reports" />
        </div>
      </section>

      <section className="bg-[#111827] mt-10 p-6 md:p-20 text-center text-white">
        <h1 className="font-bold text-3xl md:text-4xl">Porque Escolher a Gente</h1>
        <p className="opacity-80 max-w-2xl mx-auto">Oferecemos soluções de marketing digital para seu crescimento.</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <BoxServices image_component={escudo} description="Segurança e confiança garantidas" title="Estratégia Digital" />
          <BoxServices image_component={raio} description="Agilidade na execução e resultados rápidos" title="Social Media" />
          <BoxServices image_component={time} description="Equipe experiente e especializada" title="Otimização de SEO" />
          <BoxServices image_component={barra} description="Análise completa e relatórios detalhados" title="Análise & Reports" />
        </div>
      </section>

      <section className="gradient-um w-full flex flex-col gap-20 p-20">
        <div className="w-full flex flex-col  items-center justify-center ">
          <h1 className="font-bold text-3xl md:text-4xl">Crescimento dos nossos Clientes</h1>
          <p className="opacity-80 max-w-2xl mx-auto">Ajudamos empresas a alcançar resultados extraordinários.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-8 gap-10">
          <div className="w-full md:w-1/2">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-5 mx-auto">
            <div className="flex flex-row gap-10">
              <BoxAnalise title="Conversion Rate" description="15,8%" />
              <BoxAnalise title="Conversion Rate" description="15,8%" />
            </div>
            <div className="flex flex-row gap-10">
              <BoxAnalise title="Conversion Rate" description="15,8%" />
              <BoxAnalise title="Conversion Rate" description="15,8%" />
            </div>
          </div>
        </div>


        <div className="flex flex-wrap justify-center gap-10 md:gap-20 lg:gap-40 p-10 md:p-20 text-center">
          {[
            { value: "500+", label: "Clientes" },
            { value: "95%", label: "Taxa de Sucesso" },
            { value: "10M+", label: "Alcance" },
            { value: "24/7", label: "Suporte" },
          ].map((item, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-auto">
              <h1 className="text-3xl md:text-4xl font-bold">{item.value}</h1>
              <p className="opacity-80">{item.label}</p>
            </div>
          ))}
        </div>

      </section>

      <section className="gradient-dois w-full flex flex-col gap-12 p-8 md:p-16 lg:p-20">
      
        <div className="w-full flex flex-col items-center text-center mt-10">
          <h1 className="font-bold text-2xl md:text-4xl">Crescimento dos nossos Clientes</h1>
          <p className="opacity-80 max-w-lg md:max-w-2xl">
            Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <BoxClientes description="Depoimento incrível de um cliente satisfeito." name="Jorge" empresa="CEO ESPM" />
          <BoxClientes description="Nossa empresa cresceu exponencialmente com essa equipe!" name="Mariana" empresa="Fundadora XYZ" />
          <BoxClientes description="Resultados excepcionais, equipe altamente qualificada!" name="Carlos" empresa="CMO ABC" />
        </div>
      </section>


      <section className="bg-black text-white p-10 text-center">
        <h1 className="text-3xl md:text-4xl">Entre em Contato</h1>
        <p className="opacity-80 text-lg sm:text-sm">Leve sua presença digital para o próximo nível.</p>
        <form className="flex flex-col items-center gap-4 mt-8 w-full max-w-md mx-auto">
          <input type="text" placeholder="Nome" className="bg-transparent p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Email" className=" bg-transparent p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Descrição" className="bg-transparent p-3 w-full border rounded-md focus:ring-2 focus:ring-blue-500" rows={5} />
          <div className="flex flex-row items-center justify-center gap-4">
            <CustomButtom title="Send Message" className="mt-4 px-6 py-3 font-bold text-white rounded-full bg-blue-600 hover:bg-blue-500 transition-all" />
            
          </div>
        </form>
      </section>

    </div>
  );
}

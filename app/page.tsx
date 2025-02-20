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
import seta from "../public/Seta.svg";
import BoxAnalise from "./components/BoxAnalise/BoxAnalise";
import BoxClientes from "./components/BoxClientes/BoxClientes";

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
          <h1 className="text-[32px] md:text-[52px] font-bold leading-tight">
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

      <section className="container mx-auto mt-10 p-6 flex flex-col items-center text-center">
        <h1 className="font-bold text-[32px] md:text-[48px]">Nossos Serviços</h1>
        <p className="opacity-80 max-w-2xl">Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <BoxServices image_component={foguete} description='Estratégias digitais abrangentes adaptadas aos seus objetivos de negócios' title='Estrategia Digital' />
          <BoxServices image_component={alvo} description='Envolvendo o gerenciamento de mídia social e a criação de conteúdo' title='Social Media' />
          <BoxServices image_component={globo} description='Técnicas avançadas de SEO para melhorar sua visibilidade online' title='Otimização de SEO' />
          <BoxServices image_component={seta} description='Análise detalhada e acompanhamento de desempenho' title='Analise & Reports' />
        </div>
      </section>

      <section className="bg-[#111827] mt-10 p-6 md:p-20 flex flex-col items-center text-center text-white">
        <h1 className="font-bold text-[32px] md:text-[48px]">Porque Escolher a Gente</h1>
        <p className="opacity-80 max-w-2xl">Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital.</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <BoxServices image_component={foguete} description='Estratégias digitais abrangentes adaptadas aos seus objetivos de negócios' title='Estrategia Digital' />
          <BoxServices image_component={alvo} description='Envolvendo o gerenciamento de mídia social e a criação de conteúdo' title='Social Media' />
          <BoxServices image_component={globo} description='Técnicas avançadas de SEO para melhorar sua visibilidade online' title='Otimização de SEO' />
          <BoxServices image_component={seta} description='Análise detalhada e acompanhamento de desempenho' title='Analise & Reports' />
        </div>
      </section>

      <section className="gradient-um w-full flex flex-col gap-20 p-20">
        <div className="w-full flex flex-col  items-center justify-center ">
          <h1 className="font-bold text-[32px] md:text-[48px]">Crescimento dos nossos Clientes</h1>
          <p className="opacity-80 max-w-2xl w-2/5">Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital.</p>
        </div>
        <div className="flex flex-row">
          <div className="bg-transparent w-1/2">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
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


        <div className=" flex flex-row gap-40 justify-center mx-auto p-20">
          <div className="text-center">
            <h1 className="text-[40px]">500+</h1>
            <p className="opacity-80">Clientes</p>
          </div>

          <div >
            <h1 className="text-[40px]">95%</h1>
            <p className="opacity-80">Taxa de Sucesso</p>
          </div>
          <div className="text-center">

            <h1 className="text-[40px]">10M+</h1>
            <p className="opacity-80">Alcance</p>
          </div>

          <div className="text-center">
            <h1 className="text-[40px]">24/7</h1>
            <p className="opacity-80">Suporte</p>
          </div>

        </div>
      </section>

      <section className="gradient-dois w-full flex flex-col gap-20 p-20 ">
        
        <div className="w-full flex flex-col  items-center justify-center mt-20 ">
          <h1 className="font-bold text-[32px] md:text-[48px]">Crescimento dos nossos Clientes</h1>
          <p className="opacity-80 max-w-2xl w-2/5">Oferecemos soluções abrangentes de marketing digital para ajudar sua empresa a prosperar no digital.</p>
        </div>
        <div className="w-full grid grid-cols-3 p-2">
          <BoxClientes description="asdjiasdijasdijasdijasdasdiasdasdijadsasdiasdasdjasdasdiasdasdjsdaiasd" name="Jorge" empresa="CEO ESPM " />
          <BoxClientes description="asdjiasdijasdijasdijasdasdiasdasdijadsasdiasdasdjasdasdiasdasdjsdaiasd" name="Jorge" empresa="CEO ESPM " />
          <BoxClientes description="asdjiasdijasdijasdijasdasdiasdasdijadsasdiasdasdjasdasdiasdasdjsdaiasd" name="Jorge" empresa="CEO ESPM " />
       </div>
      </section>

      <section>
        <div className="text-center">
          <h1 className="text-[48px]">Entre em Contato</h1>
          <p className="text-[20px] opacity-80"> Pronto para levar sua presença digital para o próximo nível? Contate-nos hoje.</p>
        </div>
        <div className="">
          <input type="text" name="" id="" className="" />
          <label className="">Nome</label>
        </div>
      </section>

    </div>
  );
}

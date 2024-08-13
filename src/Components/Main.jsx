import React from 'react';
import GitHubLogo from '../assets/githubLogo.svg?react';
import LinkedinLogo from '../assets/linkedinLogo.svg?react';
import ArrowBotton from '../assets/ArrowBotton.svg?react';

import style from './Main.module.css';

const Main = () => {
  return (
    <>
      <main
        className={`pt-16 w-screen h-screen flex flex-col gap-2 justify-center items-center p-3 lg:flex-row lg:px-20 xl:px-56`}
      >
        <div className="lg:order-2 lg:w-1/3 flex justify-end">
          <div className="rounded-sm h-44 w-44 md:w-56 md:h-56 ">
            <div className={style.image}></div>
          </div>
        </div>

        <section className="text-cinza-50 flex flex-col justify-center items-center gap-2 lg:w-2/3 lg:items-start ">
          <p className="font-Roboto font-bold text-cinza-300 text-lg md:text-2xl">
            Rhuan Guilherme
          </p>
          <h1 className="font-Poppins font-bold text-cinza-100 text-2xl md:text-4xl">
            Desenvolvedor Full Stack
          </h1>
          <p className="font-Roboto  text-cinza-300 text-sm text-center leading-6 md:text-base lg:text-left">
            Seja bem vindo o meu portifolio, sou um desenvolvedor com
            experiência em tecnologias front-end e back-end. Minha especialidade
            é criar soluções eficientes usando Node.js e React. Explore meu
            portfólio para conhecer mais sobre meus projetos e habilidades.
          </p>
        </section>
      </main>
    </>
  );
};

export default Main;

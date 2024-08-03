import React from 'react';
import GitHubLogo from '../assets/githubLogo.svg?react';
import LinkedinLogo from '../assets/linkedinLogo.svg?react';
import ArrowBotton from '../assets/ArrowBotton.svg?react';

const Main = () => {
  return (
    <>
      <main className="flex justify-between items-center h-screen px-56 relative">
        <section className="flex flex-col w-1/2">
          <span className="text-cinza-500 dark:text-cinza-300 font-semibold text-2xl font-Poppins">
            Rhuan Guilherme
          </span>
          <span className="text-cinza-800 dark:text-cinza-100 font-bold text-5xl font-Poppins">
            Desenvolvedor Full Stack
          </span>
          <span className="text-cinza-500 dark:text-cinza-300 font-Roboto mt-1 text-base leading-7">
            Seja bem vindo o meu portifolio, sou um desenvolvedor com
            experiência em tecnologias front-end e back-end. Minha especialidade
            é criar soluções eficientes usando Node.js e React. Explore meu
            portfólio para conhecer mais sobre meus projetos e habilidades.
          </span>
          <div className="flex gap-2 mt-1 font-Poppins font-medium text-cinza-800 dark:text-cinza-200">
            <a
              href="https://github.com/Rhuan-Guilherme"
              target="_blank"
              className="border-2 border-cinza-800 dark:border-cinza-300 rounded-[4px] py-1 px-4 flex items-center gap-3 text-lg hover:scale-105 transition-all duration-300"
              rel="noreferrer"
            >
              <GitHubLogo />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/rhuanguilherme23/"
              target="_blank"
              className="border-2 border-cinza-800 dark:border-cinza-300 rounded-[4px] py-1 px-4 flex items-center gap-3 text-lg hover:scale-105 transition-all duration-300"
              rel="noreferrer"
            >
              <LinkedinLogo />
              Linkedin
            </a>
          </div>
        </section>
        <section className="w-1/2 flex justify-end">
          <div className="border-2 border-cinza-800 dark:border-cinza-300 p-0.5 rounded-lg w-[500px] shadow-md">
            <img className="w-full rounded-md" src="./rhuan.jpg" alt="" />
          </div>
        </section>

        <div className="absolute bottom-6 left-1/2 text-cinza-300 font-medium font-Roboto flex flex-col items-center text-sm animate-bounce">
          SCROLL
          <ArrowBotton />
        </div>
      </main>
    </>
  );
};

export default Main;

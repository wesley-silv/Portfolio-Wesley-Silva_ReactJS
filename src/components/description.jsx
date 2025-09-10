import React from 'react';
import { FaGraduationCap, FaBriefcase, FaLaptopCode, FaLanguage } from 'react-icons/fa';

const Description = () => {
  return (
    <div className="my-24 mx-8">
      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4 gap-8">
        <article className="bg-gray-100 flex flex-col items-center shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto md:w-full lg:w-[48%]">
          <div className="relative p-1 rounded-lg overflow-hidden">
            <img
              src="/profile_design.png"
              alt="Wesley Silva"
              className="rounded-lg object-cover w-60 h-62"
            />
          </div>
          <h4 className="mt-6 text-blue-700 text-2xl font-bold text-center">
            Wesley Silva
          </h4>
          <p className="text-center text-lg">
            <span className="text-blue-900 font-semibold">
              Desenvolvedor Front-end
            </span><br />
            Ciência da Computação UAM/SP
          </p>
        </article>

        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Sobre Mim
          </h4>
          <p className="leading-relaxed text-gray-700">
            Sou um desenvolvedor web comprometido com a excelência e a
            inovação, com uma formação sólida em ciência da computação e
            especialização em desenvolvimento Full Stack. Após transitar para a
            tecnologia em 2021, venho aprimorando minhas habilidades para criar
            soluções dinâmicas e intuitivas.
          </p>
          <p className="leading-relaxed mt-4 text-gray-700">
            Formação contínua em tecnologias modernas com
            <span className="text-blue-900 font-semibold"> Rocketseat </span>
            e
            <span className="text-blue-900 font-semibold"> Alura</span>.
          </p>
        </article>
      </section>

      <section className="flex flex-row max-lg:flex-col justify-between items-center max-lg:mx-4 gap-8 mt-12">
        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Competências
          </h4>
          <ul className="text-gray-700 space-y-2">
            <li>
              <FaLaptopCode className="inline-block mr-2 size-5 text-blue-700" />
              <span className="text-blue-900 font-semibold">Front-end:</span>{" "}
              HTML, CSS, JavaScript, Bootstrap, React, Vue, Angular
            </li>
            <li>
              <FaLaptopCode className="inline-block mr-2 size-5 text-blue-700" />
              <span className="text-blue-900 font-semibold">Back-end:</span>{" "}
              Node.js, Express, MongoDB, Mongoose, APIs REST
            </li>
            <li>
              <FaLaptopCode className="inline-block mr-2 size-5 text-blue-700" />
              <span className="text-blue-900 font-semibold">Database:</span>{" "}
              MySQL, MariaDB, PostgreSQL, SQL
            </li>
          </ul>
        </article>

        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Experiências
          </h4>
          <p className="leading-relaxed text-gray-700">
            <FaBriefcase className="inline-block mr-2 size-5 text-blue-700" />
            <span className="text-blue-900 font-semibold">KN Leads:</span>{" "}
            Desenvolvimento front-end de interfaces e e-commerce, com foco na
            experiência do usuário e otimização de performance.
            <br />
            <FaBriefcase className="inline-block mr-2 size-5 text-blue-700" />
            <span className="text-blue-900 font-semibold">Gerenciamento:</span>{" "}
            Manutenção de redes e gerenciamento de radares de tráfego.
          </p>
        </article>

        <article className="bg-gray-100 shadow-lg rounded-lg p-8 m-4 max-lg:mx-auto lg:w-[48%]">
          <h4 className="mb-4 text-blue-700 text-2xl font-bold text-center">
            Acadêmico
          </h4>
          <p className="leading-relaxed text-gray-700">
            <FaGraduationCap className="inline-block mr-2 size-7 text-blue-700" />
            <span className="text-blue-900 font-semibold">Graduação</span> em
            Ciência da Computação, focado em ampliar conhecimentos tecnológicos específicos.
            <br />
            <FaLanguage className="inline-block mr-2 size-8 text-blue-700" />
            <span className="text-blue-900 font-semibold">Inglês </span> avançado para comunicação efetiva e colaboração com equipes no ambiente de desenvolvimento de aplicações.
          </p>
        </article>
      </section>
    </div>
  );
};

export default Description;

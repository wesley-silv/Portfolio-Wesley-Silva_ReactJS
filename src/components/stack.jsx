import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs, IoLogoPython } from "react-icons/io5";
import { SiTailwindcss, SiBootstrap, SiJquery } from "react-icons/si";
import React, { useState } from 'react';

const Stack = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  const handleClick = (iconName) => {
    setActiveIcon(activeIcon === iconName ? null : iconName);
  };

  return (
    <div className="my-44 text-center">
      <p className="mx-8 mb-8 text-2xl text-gray-800 font-semibold">
        Tecnologias e Frameworks que utilizo!
      </p>
      <section className="flex flex-row flex-wrap justify-center gap-6 mb-12">
        <IoLogoHtml5 
          className="text-red-500 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("HTML")} 
        />
        <IoLogoCss3 
          className="text-blue-500 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("CSS")} 
        />
        <SiBootstrap 
          className="text-indigo-700 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("Bootstrap")} 
        />
        <SiTailwindcss 
          className="text-blue-400 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("TailwindCSS")} 
        />
        <IoLogoJavascript 
          className="text-yellow-500 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("JavaScript")} 
        />
        <SiJquery 
          className="text-blue-600 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("JQuery")} 
        />
        <IoLogoReact 
          className="text-blue-500 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("React")} 
        />
        <IoLogoNodejs 
          className="text-green-500 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("Node")} 
        />
         <IoLogoPython
          className="text-blue-500 cursor-pointer text-5xl hover:scale-110 transition-transform duration-200"
          onClick={() => handleClick("Python")} 
        />
      </section>

      <div className="flex flex-col items-center gap-4 max-w-screen-lg mx-auto">
        {activeIcon === "HTML" && (
          <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">HTML5</h3>
            <p className="text-lg">
              HTML5 é a base de toda página da web, estruturando o conteúdo que o usuário vê e interage.
              Com ele é possível criar uma estrutura sólida, facilitando a inserção de textos, imagens, vídeos e outras mídias de forma organizada.
            </p>
          </div>
        )}
        {activeIcon === "CSS" && (
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">CSS3</h3>
            <p className="text-lg">
              CSS é a linguagem de estilos que dá vida e cor ao HTML. É utilizado para customizar layouts,
              cores, fontes, e o comportamento visual das páginas. Ele permite criar experiências de usuário ricas e atraentes.
            </p>
          </div>
        )}
        {activeIcon === "Bootstrap" && (
          <div className="bg-indigo-700 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">Bootstrap</h3>
            <p className="text-lg">
              Bootstrap é uma biblioteca poderosa para criar layouts responsivos e atraentes. Ele oferece classes e componentes prontos,
              que agilizam o desenvolvimento front-end, mantendo uma aparência moderna e adaptável.
            </p>
          </div>
        )}
        {activeIcon === "TailwindCSS" && (
          <div className="bg-blue-400 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">Tailwind CSS</h3>
            <p className="text-lg">
              Tailwind CSS é uma ferramenta de estilo altamente customizável que facilita o desenvolvimento de páginas elegantes.
              Ele permite uma sintaxe flexível, reduzindo o CSS externo e tornando o código HTML mais legível e mantido diretamente.
            </p>
          </div>
        )}
        {activeIcon === "JavaScript" && (
          <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">JavaScript</h3>
            <p className="text-lg">
              JavaScript é a linguagem de programação mais popular para web, usada para adicionar interatividade e dinamicidade.
              Ele é poderoso para criar funcionalidades complexas e é a base para diversas bibliotecas e frameworks.
            </p>
          </div>
        )}
        {activeIcon === "JQuery" && (
          <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">jQuery</h3>
            <p className="text-lg">
              jQuery é uma biblioteca JavaScript leve que simplifica a manipulação de elementos HTML e animações,
              proporcionando interatividade e efeitos com menos código.
            </p>
          </div>
        )}
        {activeIcon === "React" && (
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">React</h3>
            <p className="text-lg">
              React é uma biblioteca JavaScript para criar interfaces de usuário, especialmente para SPAs.
              Com uma arquitetura baseada em componentes, facilita a construção de interfaces complexas e responsivas.
            </p>
          </div>
        )}
        {activeIcon === "Node" && (
          <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">Node.js</h3>
            <p className="text-lg">
              Node.js é um ambiente JavaScript server-side que permite criar aplicações escaláveis e rápidas,
              com uma ampla gama de possibilidades para desenvolvimento back-end.
            </p>
          </div>
        )}
        {activeIcon === "Python" && (
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-left w-full">
            <h3 className="text-2xl font-bold mb-2">Python</h3>
            <p className="text-lg">
              Python é uma linguagem de programação versátil e de alto nível, ideal para desenvolvimento web, análise de dados, 
              inteligência artificial e automação. Sua sintaxe clara e legibilidade a tornam acessível para iniciantes e poderosa para especialistas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Stack;

import { FaSquareGithub, FaLink } from 'react-icons/fa6';

export const Projects = () => {
  return (
    <div className="p-8 sm:p-12 mx-auto my-20 rounded-lg shadow-2xl  bg-gradient-to-br from-blue-50 to-blue-100 max-w-7xl" id='projects'>
      <h2 className="text-blue-700 text-4xl text-center font-bold pb-2 uppercase tracking-wide drop-shadow-lg">Projetos</h2>
      <h3 className="text-center text-xl text-blue-900 font-semibold pb-12">
        Conheça algumas das aplicações que desenvolvi em projetos pessoais, profissionais e colaborativos.
      </h3>

      <section className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white p-5 sm:p-6 rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.03] hover:border-blue-700 hover:shadow-blue-200 flex flex-col min-h-[480px] relative"
          >
            <div className="relative mb-4 flex justify-center">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg shadow transition-all duration-300"
                  style={{ minHeight: '160px', maxHeight: '160px' }}
                />
              )}
              <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-20 transition bg-blue-700"></div>
            </div>
            <h2 className="text-blue-700 text-2xl font-bold mb-2 text-center">{project.title}</h2>
            <p className="text-gray-700 font-semibold text-center mb-2">{project.techStack}</p>
            <p className="text-gray-600 mb-4 text-center flex-grow">{project.description}</p>
            <ul className="flex justify-center gap-6 mt-auto">
              <li>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title='Repositório'
                  className=" bg-gray-500 rounded-full hover:bg-blue-700 transition-colors shadow group"
                >
                  <FaSquareGithub className="text-4xl text-blue-700 group-hover:text-blue-800 transition-colors" />
                </a>
              </li>
              <li>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live Project"
                  title='Projeto'
                  className="bg-blue-100 rounded-full hover:bg-blue-700 transition-colors shadow group"
                >
                  <FaLink className="text-4xl text-blue-700 group-hover:text-blue-800 transition-colors" />
                </a>
              </li>
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};

// Projects dates
const projects = [
  {
    title: 'Coofee',
    techStack: 'JavaScript, React, Vite, Tailwind CSS e API',
    description: 'Projeto de e-commerce de café com funcionalidades de carrinho de compras, filtros e integração com API para exibição de produtos.',
    githubLink: 'https://github.com/wesley-silv/Coffee_ReactJS',
    liveLink: 'https://coffee.vercel.app/',
    image: '/coffee_design.png',
  },
  {
    title: 'Calculadora',
    techStack: 'React, React icons, Router e Vite',
    description: 'Aplicação de calculadora em React com interface responsiva e operações matemáticas básicas.',
    githubLink: 'https://github.com/wesley-silv/Calculator-React-JS',
    liveLink: 'https://calculator-react-js-lemon.vercel.app/',
    image: 'https://raw.githubusercontent.com/wesley-silv/Calculator-React-JS/main/public/cover.png',
  },
  {
    title: 'Busca CEP',
    techStack: 'React, API, Axios',
    description: 'Projeto de busca de CEP usando integração com API para consulta de endereços em tempo real.',
    githubLink: 'https://github.com/wesley-silv/Search-CEP-React-JS',
    liveLink: 'https://buscador-de-cep-em-react-67h6.vercel.app/',
    image: 'https://raw.githubusercontent.com/wesley-silv/Search-CEP-React-JS/main/public/cover.png',
  },
  {
    title: 'Organograma',
    techStack: 'React, Vite, API',
    description: 'Organograma para visualização de hierarquia organizacional, desenvolvido com integração de API.',
    githubLink: 'https://github.com/wesley-silv/Organogram-React-JS',
    liveLink: 'https://react-app-organo-ct1x-d9922o0b5-wesley-silv.vercel.app/',
    image: 'https://raw.githubusercontent.com/wesley-silv/Organogram-React-JS/main/public/cover.png',
  },
  {
    title: 'Cálculos Financeiros',
    techStack: 'HTML, CSS, JavaScript, Node.js, Express, Nodemon e BRAPI',
    description: 'Matemática financeira para investimentos, desenvolvido com integração de API para consulta de cotações.',
    githubLink: 'https://github.com/wesley-silv/Maths-calcs',
    liveLink: 'https://mathscalcs.vercel.app',
    image: 'https://raw.githubusercontent.com/wesley-silv/Maths-calcs/main/public/cover.png',
  },
  {
    title: 'Automação Redes',
    techStack: 'Python, Subprocess, Json, Tkinter',
    description: 'Automação de configuração de redes IPs/DHCP utilizando bibliotecas Python para gerenciamento de dispositivos de rede.',
    githubLink: 'https://github.com/wesley-silv/Network-auto-config_Python',
    liveLink: 'https://',
    image: '/network_design.png',
  }
];

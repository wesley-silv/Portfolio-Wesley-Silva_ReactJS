import './App.css';
import Navbar from './components/navbar';
import Media from './components/media';
import Banner from './components/banner';
import Stack from './components/stack';
import CodeSample from './components/code-sample';
import Tools from './components/tools';
import Description from './components/description';
import { Projects } from './components/projects';
import Footer from './components/footer';

const App = () => {
  const words = [
    'Desenvolvedor Web Front-end apaixonado por criar experiências incríveis.',
    'Transformando ideias em soluções digitais eficazes e também responsivas.',
    'Seja bem-vindo ao portfólio de um profissional focado em tecnologia.',
    'Aqui, você encontrará projetos que demonstram inovação e habilidades técnicas.',
    'Explore o que há de melhor em desenvolvimento web e design de interfaces.'
  ];
  
  const viewTime = 3000;

  const writing = [
    `"Programar é alcançar horizontes e lugares fantásticos, seja criando ou reinventando uma nova perspectiva. Transformando projetos de papel em um organismo funcional, onde a cada contato com a interface haja uma descoberta inédita."`
  ];
  const viewLettersTime = 100;

  return (
    <div className="app">
      <Navbar />
      <Media />
      <Banner words={words} time={viewTime} />
      
      {/* Adicionamos o ID "main-content" aqui para a navegação funcionar corretamente */}
      <div id="main-content">
        <Description />
        <CodeSample letters={writing} time={viewLettersTime} />
        <Stack /> 
        <Tools />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;

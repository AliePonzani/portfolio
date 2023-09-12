import React from 'react';
import './App.css';
import foto from './Imagens/fotoPB.png'
import aquario from './Imagens/img1.png'
import { FaSquareGithub, FaLinkedin, FaEnvelope, FaSquareWhatsapp, FaLaptopCode } from 'react-icons/fa6';

function App() {
  return (
    <div>
      <header>
        <div className='logo'><FaLaptopCode style={{ fontSize: '30px' }} />Aline</div>
        <div className='menu'>
          <a href="#apresentacao">Apresentação</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#linguagens">Linguagens</a>
        </div>
      </header>
      <div className='interface'>
        <section className='apresentacao' id='apresentacao'>
          <img className='foto' src={foto} alt='foto'></img>
          <div className='conteudoApresentacao'>
            <h1>Olá, muito prazer</h1>
            <label>Aline F. Ponzani</label>
            <p>Desenvolvedora Back-End</p>
            <div className='icones_redes'>
              <a href='https://github.com/AliePonzani'><FaSquareGithub /></a>
              <a href='https://www.linkedin.com/in/aline-ponzani'><FaLinkedin /></a>
              <a href="mailto:alinef.ponzani@gmail.com"><FaEnvelope /></a>
              <a href='https://api.whatsapp.com/send?phone=5511976363569'><FaSquareWhatsapp /></a>
            </div>
          </div>
        </section>
        <section className='sobre' id='sobre'>
          <h1 className='titulo'>Sobre</h1>
          <div className='conteudoSobre'>
            <img src={aquario} alt='aquario'/>
            <p>
              Desde minha chegada a São Paulo em 2006, minha trajetória profissional tem sido uma jornada
              de
              aprendizado e superação. Após trabalhar com o público e atuar como empreendedora em uma
              cafeteria,
              tive meu primeiro contato com a programação durante a pandemia de 2020. Em 2022, iniciei o
              curso de
              Análise e Desenvolvimento de Sistemas, e desde então venho me apaixonando cada vez mais pela
              área. <br /><br />
              Atualmente, estou buscando uma oportunidade de estágio para aplicar e aprimorar os
              conhecimentos
              adquiridos na faculdade. Tenho um forte interesse em atuar como desenvolvedora, tanto no
              front-end
              quanto no back-end, com uma inclinação maior para o back-end. Paralelamente, estou envolvida
              em um
              projeto de iniciação científica, desenvolvendo um site que auxiliará no ensino de
              matemática.<br /><br />
              Com minha dedicação, perseverança e vontade de aprender, estou determinada a contribuir para
              uma
              equipe de programação, aplicando minhas habilidades técnicas e meu entusiasmo pela área. Meu
              objetivo é trabalhar como desenvolvedora, trazendo soluções criativas e alcançando
              resultados
              excepcionais no campo da programação.
            </p>
          </div>

        </section>
        <section className='projetos' id='projetos'>
          <h1 className='titulo'>Projetos</h1>
        </section>
        <section className='linguagens' id='linguagens'>
          <h1 className='titulo'>Linguagens</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
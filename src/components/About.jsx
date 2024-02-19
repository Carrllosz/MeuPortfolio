import React from 'react';
import eu from '../assets/eu.jpg';
import retangulogrid from '../assets/retangulo-grid.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#F8CFC9] text-white'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 relative'>
          <div className='flex flex-col justify-center items-center'>
            {/* Estilizando a div que contém a imagem retangulogrid */}
            <div 
              className='w-[200px] h-[200px] relative flex items-center justify-center sm:mx-60' 
              style={{
                backgroundImage: `url(${retangulogrid})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Centralizando a imagem 'eu' dentro da imagem 'retangulogrid' */}
              <img src={eu} alt='Eu' className='max-h-[150px] max-w-[150px] mx-auto' />
            </div>
          </div>
          <div>
            <p className='bg-[#EE826C] border-2 px-3 py-3 border-[transparent] relative'>Estudante de Ciência da Computação na Universidade Federal de Alagoas. Apaixonado por front-end seja web ou mobile, o início da minha jornada se deu quando participei do Hackathon Encat organizado pelo Desafio Insano, onde, em grupo, desenvolvemos uma solução para o problema proposto e ficamos entre as cinco melhores ideias. Atualmente trabalho em uma empresas das subsidiárias do grupo Appian como estagiário de PMO.</p>  
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;

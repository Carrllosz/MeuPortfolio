import React from 'react';

const Experience = () => {
  return (
    <div name='experience' className='w-full md:h-full text-black bg-[#F8CFC9]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 text-center'>
          <p className='text-4xl font-bold inline border-b-4 text-white border-pink-600'>
            Experiências
          </p>
          <p className='py-6 text-white'>// Confira algumas das minhas experiências</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-white'>
          <div className='group container rounded-md flex flex-col justify-center items-center mx-auto content-div  bg-[#E48E00]'>
            <h2 className='font-bold text-[1rem]'>Estagiário de PMO</h2>
            <h3 className='font-bold text-[0.7rem]'>Mineração Vale verde</h3>
            <p className='text-[0.7rem] '>Desenvolvimento de dashboards (com Power BI)</p>
            <p className='text-[0.7rem]'>Criação de relatórios operacionais</p>
          </div>

          <div className='group container rounded-md flex flex-col justify-center items-center mx-auto content-div px-4 bg-[#D6591E]'>
            <h2 className='font-bold text-[1rem]'>Programador web</h2>
            <h3 className='font-bold text-[0.8rem]'>Hackathon - AraComp - UFAL</h3>
            <p className='text-[0.7rem]'>Desenvolvimento de um marketplace no qual foi projetado para auxiliar os usuários nas compras das bijuterias feitas com cápsulas de café pelas professoras de Química do Campus Arapiraca.</p>
          </div>

          <div className='group container rounded-md flex flex-col justify-center items-center mx-auto content-div px-4 bg-[#99B83C]'>
            <h2 className='font-bold'>Programador web</h2>
            <h3 className='font-bold text-[0.8rem]'>Hackathon - Encat - Desafio Insano</h3>
            <p className='text-[0.7rem]'>Desenvolvimento de um site para auxiliar os usuários na busca da taxação do ICMS nos produtos e na classificação por estado.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from 'react';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#F8CFC9]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-6 flex flex-col justify-center h-full'>
        <p className='text-2xl sm:text-3xl font-bold text-[#E45338]'>Olá, meu nome é</p>
        <h1 className='text-[90px] sm:text-8xl font-bold text-[#fff] text-center'> João Carlos</h1>
        <div className='flex w-full text-center justify-center text-1xl sm:text-7x1 font-bold text-[#E45338] border-2 px-4 py-3 my-2 border-[#E45338] rounded-full'>
          <h2>Desenvolvedor Front-end e Mobile</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;

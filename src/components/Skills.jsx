import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Python from '../assets/python.png'
import MYSQL from '../assets/My.png'
import mongodb from '../assets/mongodb.jpg'
import node from '../assets/node.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#F8CFC9] text-white'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full items-center'>
          <div className='text-center'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
              <p className='py-4'>// Confira algumas das minhas habilidades</p>
          </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon'/>
                    <p className='my-4'>HTML</p>
                </div>
                
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt='HTML icon'/>
                    <p className='my-4'>CSS</p>
                </div>
                
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='HTML icon'/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='HTML icon'/>
                    <p className='my-4'>REACT</p>
                </div>
                
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={mongodb} alt='HTML icon'/>
                    <p className='my-4'>MongoDB</p>
                </div>
                
                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={MYSQL} alt='HTML icon'/>
                    <p className='my-4'>MYSQL</p>
                </div>

                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={node} alt='HTML icon'/>
                    <p className='my-4'>Node</p>
                </div>

                <div className=' hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='HTML icon'/>
                    <p className='my-4'>PYTHON</p>
                </div> 

                
            </div>
        </div>
    </div>
  );
};

export default Skills;
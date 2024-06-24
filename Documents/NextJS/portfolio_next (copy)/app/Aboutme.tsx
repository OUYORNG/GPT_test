import React from 'react'
import SkillComponent from './SkillComponent'

function Aboutme() {
  return (
    <div className=' h-[100vh] bg-yellow-200 font-mono' >
        <div className='
        font-bold text-4xl
        pt-4 pl-4 pr-4
        '>About me</div>
        <div className='flex justify-center items-start
        p-4 mr-8 ml-8
        '>
            <div className='w-16 h-1 bg-black
            mt-3 mr-3'
            ></div>
            <div className='
            text-xl
            '>
            A very curious and passionate to learn new things with flexible and easy-going personality. I have a strong commitment to learn multiple programming languages and tools. I would prefer my leisure time to keep up with the upcomming technology and improves my skills.
            </div>
        </div>
        <SkillComponent/>
    </div>
  )
}

export default Aboutme
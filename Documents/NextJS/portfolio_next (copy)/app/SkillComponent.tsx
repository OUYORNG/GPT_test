import React from 'react'

function SkillComponent() {
    const skills = [
        {
            name:'HTML'
        },
        {
            name:'CSS'
        }
    ]
  return (
    <div className='flex flex-col items-center justify-center bg-red-400    '>
        <div className='text-4xl font-bold'>My Skills</div>
        <div className="container p-4 gap-6 flex justify-center flex-wrap">
            <div className="model
             w-48 h-48
            bg-red-200
            flex justify-center items-end
            rounded-xl
            "> 
            <img src="" alt="" />
            <div className='p-4'>Major name</div>
            </div>
            <div className="model
             w-48 h-48
            bg-red-200
            flex justify-center items-end
            rounded-xl
            "> 
            <img src="" alt="" />
            <div className='p-4'>Major name</div>
            </div>
            <div className="model
             w-48 h-48
            bg-red-200
            flex justify-center items-end
            rounded-xl
            "> 
            <img src="" alt="" />
            <div className='p-4'>Major name</div>
            </div>
        </div> 
        
    </div>
  )
}

export default SkillComponent
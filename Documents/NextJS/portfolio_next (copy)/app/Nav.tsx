import React from 'react'

function Nav() {
  return (
    <nav className='bg-red-200 flex justify-center'>
        <img src="" alt="" />
        <div className=" items-center flex max-md:flex-col  max-md:w-auto p-4 max-md:p-0 mt-4 font-medium border  rounded-lg   md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  justify-evenly ">
            <a href="" className="block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
            >About Me</a>
            <a href="" className="block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
            >Portfolio</a>
            <a href="" className="block py-2 px-3 text-[#2b5e64] focus:text-[#63cbff] hover:scale-125 transition duration-150 ease-out hover:ease-in rounded max-md:focus:bg-blue-400 max-md:focus:text-white md:p-0 max-md:hover:scale-100 no-underline"
            >Contact</a>
        </div>
    </nav>
)
}

export default Nav
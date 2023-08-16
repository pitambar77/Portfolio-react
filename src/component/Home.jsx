import React from 'react'
import HeroImage from "../assets/pitambar.jpeg"
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className=' flex justify-center items-center h-screen w-full bg-gradient-to-b from-black  via-black to-gray-800'>
        <div className=' max-w-screen-lg max-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className=' mt-10 tex-3xl sm:text-4xl font-bold text-white'>
                    Hi, I'm Pitambar Majhi
                </h2>
                <h2 className=' tex-2xl sm:text-2xl font-bold text-sky-500 py-2'>
                    Frontend Developer
                </h2>
                <p className=' text-gray-500 py-4 max-w-md font-semibold'>
                "Greetings! I bring experience in building and designing web applications.
                 My current passion revolves around crafting with technologies like React, Tailwind, JavaScript, HTML, and CSS.
                 <br/> Let's collaborate on your next digital venture!"
                </p>
                <div>
                    <Link
                    to='portfolio' smooth duration={500}
                     className=' group text-white w-fit py-3 px-6 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 '>
                        <HiOutlineArrowNarrowRight size={20} className='ml-1'/>
                        </span>
                        
                    </Link>
                </div>
            </div>
            <div>
            <img className=' rounded-2xl mx-auto w-2/3 md:w-full ' src={HeroImage} alt="my profile" />

            </div>
        </div>
    </div>
  )
}

export default Home
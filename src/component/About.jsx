import React from 'react'

const About = () => {
  return (
    <div name="about" className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About<span className='mx-2 text-cyan-400'>Me</span> </p>
            </div>
            <h2 className=' text-2xl font-semibold text-orange-300'>MERN Stack Developer!</h2>
            <div className='  mt-10 font-semibold text-gray-400 space-y-4'>
                <p >
                    "Hello, I'm a dedicated MERN Stack Developer with a passion for crafting immersive digital experiences. 
                    Proficient in HTML, CSS, and JavaScript, I excel at transforming design concepts into responsive, engaging web interfaces. 
                    My expertise spans the entire MERN stack, including MongoDB, Express.js, React, and Node.js. 
                </p>
                
                <p>
                    With React and Redux, I build dynamic and interactive front-end applications that offer seamless user experiences. 
                    On the server side, I utilize Node.js and Express.js to create scalable and efficient back-end solutions,
                    while MongoDB provides a flexible and powerful database for data management. 
                </p>
                
                <p>
                    I prioritize clean code and pixel-perfect designs to deliver optimal performance and user satisfaction. Explore my portfolio to see my work, and let’s collaborate to bring your digital ideas to life."
                </p>
            </div>
           
              
            <div className='w-full py-4 grid grid-cols-2 sm:grid-cols-2 gap-4 sm:px-0'>
                <div>
                   
                    <p className=' font-semibold py-2'>Phone :<span className=' font-normal mx-2 text-gray-400'>+91 7735317551</span></p>
                    <p className=' font-semibold py-2'>Location :<span className=' font-normal mx-2 text-gray-400'>Bangalore</span></p>
                    <p className=' font-semibold py-2'>Email :<span className=' font-normal mx-2 text-gray-400'>pitambermajhi33@gmail.com</span></p>
                </div>
                <div>
                    <h2 className=' font-semibold py-2'>
                        Education : <span className='font-normal mx-3 text-gray-400'>B.Tech</span>
                    </h2>
                    <h2 className=' font-semibold py-2'>
                        Department : <span className='font-normal mx-3 text-gray-400'>CSE</span>
                    </h2>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About
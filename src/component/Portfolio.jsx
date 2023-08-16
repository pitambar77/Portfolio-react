import React from 'react'
import StickyMenu from "../assets/StickyMenu.png"
import ImgSlide from "../assets/ImageSlider.png"
import SignUp from "../assets/SignUp.png"
import dasboardImg from "../assets/Dashboard.png"

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:StickyMenu,
            href:"https://github.com/pitambar77/StickyMenuBar.git",
            name:"sticky Menu"
        },
        {
            id:2,
            src:ImgSlide,
            name:"Image Slider",
            href:"https://github.com/pitambar77/ImageSlider.git"
        },
        {
            id:3,
            src:SignUp,
            name:"Sign In",
            href:"https://github.com/pitambar77/Dashboard_Heade_Login.git"

        },
       
        {
            id:4,
            src:dasboardImg,
            name:"Dashboard",
            href:"https://github.com/pitambar77/Dashboard_Heade_Login.git"
            
        },
    ]



  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-gray-800 text-white md:h-screen '>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className=' py-6'>Check out some of my work right here </p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src,href,name})=>(
                    <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className=' rounded-md duration-200 hover:scale-105' />
                    <div className=' flex items-center justify-center'>
                     
                        <h2 className=' w-3/4 px-6 py-3 m-4 ' >{name}</h2>  
                        
                       
                        {/* <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo </button> */}
                        <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400' ><a href={href}>Code</a></button>
                    </div>

                </div>
                    
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio
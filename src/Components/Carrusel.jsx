import React from 'react'
import { useState } from 'react'

function LogoCarousel() {
    const logos = [`logo1`, 'logo2', 'logo3', 'logo4',]
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const handleNext = () => {
      setCurrentIndex(currentIndex === logos.length - 1 ? 0 : currentIndex + 1)
    }
  
    const handlePrevious = () => {
      setCurrentIndex(currentIndex === 0 ? logos.length - 1 : currentIndex - 1)
    }
  
    return (
      <div className="flex justify-center items-center ">
      <button className="bg-sky-300 rounded-full p-10 mr-4 text-white" onClick={handlePrevious}>Anterior</button>
        {logos.map((logo, index) => (
          <img
            key={logo}
            src={`/${logo}.png`}
            className={`w-72 h-72 rounded-full m-4 p-5 ${index === currentIndex ? 'opacity-100' : 'opacity-50' }`}
            alt='logo'
          />
        ))}
      <button className="rounded-full bg-sky-300 p-10 text-white" onClick={handleNext}>Siguiente</button>
    </div>
    )
  }
  
  export default LogoCarousel
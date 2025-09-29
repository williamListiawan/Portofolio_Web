import { words } from "../constants"
import Button from "../components/Button";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnnimatedCounter from "../components/AnimatedCounter.jsx";

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
         {
          y: 50,
          opacity : 0,
         },
         {
          y: 0,
          opacity : 1,  
          stagger: 1.2,
          duration: 1,
          ease: 'power2.inOut'
         },
        )
    })


  return (
    <section id='hero' className='relative overflow-hidden'>
    <div className='absolute top-0 left-0 z-10'>
     <img src="public/images/bg.png" alt="background" />
    </div>
    
    <div className='hero-layout'>
        {/*Left: Hero Content */}
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
    <div className='flex flex-col gap-7'>
        <div className='hero-text'>
            <h1>
                Shaping 
                <span className="slide">
                    <span className="wrapper">
                        {words.map((words) => (
                            <span key={words.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                <img
                                    src={words.imgPath}
                                    alt={words.text}
                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                    />

                                    <span>{words.text}</span>
                            </span>
                        ))}
                    </span>
                </span>
            </h1>
            <h1>into Real Pojects</h1>
            <h1>that Deliver Results</h1>
        </div>
        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                Hi, I'm William, a Software Engineering based in Indonesia with a passion for code
            </p>
        
        <Button
        className="md:w-80 md:h-16 w-60 h-12"
        id="Button"
        text="See my work"/>                
      </div>
     </header>

        {/*Rigth: 3D Model  */}
        <figure>
            <div className="hero-3d-layout border-black-200 ">
            <HeroExperience/>    
            </div>
            </figure>                     



    </div>
    <AnnimatedCounter/>
   </section>
  )
}

export default Hero
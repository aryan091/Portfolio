import aboutImg from '../assets/aboutme.png'
import { ABOUT_TEXT } from '../constants'
import { motion } from "framer-motion"

const About = () => {

  return (
    <div className='border-b border-neutral-900 pb-4 custom-scrollbar'>
        <h1 className='my-20 text-center text-4xl'>About 
            <span className="text-neutral-500"> Me</span>
        </h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className='rounded-s-2xl' src={aboutImg} alt="About Me" />
            </div>
            </motion.div>
            <motion.div 
            whileInView={{opacity:1 , x:0}}
            initial={{opacity:0 , x:100}}
            transition={{duration:0.5}}
            className='w-full lg:w-1/2'> 
                <div className='flex flex-col items-center lg:items-start'>
                    <p className='my-2 max-w-xl py-6'>
                        {ABOUT_TEXT}
                    </p>
                    <button className="learn-more" >
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text" onClick={ () => {
                      window.open(`https://drive.google.com/uc?export=download&id=1uF7AfsWKqGaH1gmuK7wljpZrPxBxbI9L`, `_self`  )
                      }} >Download</span>
                    </button>
                </div>
            </motion.div>
        </div>
    </div>
  );
};

export default About;

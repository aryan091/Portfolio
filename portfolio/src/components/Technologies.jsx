import { RiReactjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion"

const iconVariant = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 custom-scrollbar">
        <motion.h1 
        whileInView={{opacity:1 , y:0}}
        initial={{opacity:0 , y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1 , x:0}}
        initial={{opacity:0 , x:-100}}
        transition={{duration:1.5}}
         className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariant(2.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsFill className='text-6xl text-cyan-400'/>

            </motion.div>

            <motion.div
                        variants={iconVariant(3)}
                        initial="initial"
                        animate="animate"
            
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-6xl text-[rgba(132,186,100,var(--tw-text-opacity))]'/>
                
            </motion.div>
            <motion.div 
                        variants={iconVariant(5)}
                        initial="initial"
                        animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-800'/>
                
            </motion.div>
            <motion.div
                        variants={iconVariant(2)}
                        initial="initial"
                        animate="animate"
            
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-6xl text-cyan-400'/>
                
            </motion.div>
            <motion.div 
                        variants={iconVariant(6)}
                        initial="initial"
                        animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <AiOutlineJavaScript className='text-6xl text-yellow-400'/>
                
            </motion.div>

            <motion.div 
                        variants={iconVariant(2.5)}
                        initial="initial"
                        animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-6xl text-white-400'/>
                
            </motion.div>

            <motion.div 
                        variants={iconVariant(6)}
                        initial="initial"
                        animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <AiOutlineHtml5 className='text-6xl text-orange-400'/>
                
            </motion.div>

            <motion.div 
                        variants={iconVariant(2.5)}
                        initial="initial"
                        animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaCss3Alt className='text-6xl text-blue-500'/>
                
            </motion.div>

            <motion.div 
                        variants={iconVariant(6)}
                        initial="initial"
                        animate="animate"
            
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiTailwindCssFill className='text-6xl text-[rgba(56,189,248,var(--tw-text-opacity))]'/>
                
            </motion.div>




        </motion.div>
    </div>
  )
}

export default Technologies
import { RiReactjsFill } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { AiOutlineJavaScript } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsFill className='text-6xl text-cyan-400'/>

            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiNodejsLine className='text-6xl text-green-500'/>
                
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-6xl text-green-800'/>
                
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-6xl text-cyan-400'/>
                
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <AiOutlineJavaScript className='text-6xl text-yellow-400'/>
                
            </div>

            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-6xl text-white-400'/>
                
            </div>


        </div>
    </div>
  )
}

export default Technologies
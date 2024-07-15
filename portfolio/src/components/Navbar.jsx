import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaSquareXTwitter} from 'react-icons/fa6'
import { SiLeetcode } from "react-icons/si";
import {FaInstagram} from 'react-icons/fa'
import { SiGeeksforgeeks } from "react-icons/si";

const Navbar = () => {
  return (
<nav className="  mb-20 flex items-center justify-between py-6 ">

<div className="flex flex-shrink-0 items-center text-4xl">
    <p className='mx-2 w-10 cursor-pointer hover:text-pink-500'>AD</p> 

</div>
<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <FaLinkedin className='cursor-pointer hover:text-pink-500'  onClick={() => window.open('https://www.linkedin.com/in/aryandaftari/', '_blank')}/>
    <FaGithub className='cursor-pointer hover:text-pink-500' onClick={() => window.open('https://github.com/aryan091', '_blank')}/>
    <FaSquareXTwitter className='cursor-pointer hover:text-pink-500' onClick={() => window.open('https://x.com/aryan75529', '_blank')} />
    <FaInstagram className='cursor-pointer hover:text-pink-500' onClick={() => window.open('https://www.instagram.com/_aryan_0007', '_blank')}/>
    <SiLeetcode className='cursor-pointer hover:text-pink-500' onClick={() => window.open('https://leetcode.com/u/aryandaftari7/', '_blank')}/>
    <SiGeeksforgeeks className='cursor-pointer hover:text-pink-500' onClick={() => window.open('https://www.geeksforgeeks.org/user/aryandaftari7/', '_blank')}/>

</div>
</nav>  
)
}

export default Navbar
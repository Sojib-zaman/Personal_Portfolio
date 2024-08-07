import React from 'react'
import {FaGithub , FaLinkedin} from 'react-icons/fa'; 

import { FaFacebook } from 'react-icons/fa';
import {GrTwitter , GrYoutube} from 'react-icons/gr';

const SocialLinks = () => {

  const links = [
    {
      id : 1 , 
      child: (
        <>
        Github <FaGithub />
        </>
      ),
      href : "https://github.com/Sojib-zaman" , 
      style : "rounded-tr-md"
    },
    {
      id : 2 , 
      child: (
        <>
        Facebook <FaFacebook />
        </>
      ),
      href : "https://www.facebook.com/roqunurzaman.sojib/" , 
    },
    {
      id : 3 , 
      child: (
        <>
        Linkedin <FaLinkedin />
        </>
      ),
      href : "https://www.linkedin.com/in/md-roqunuzzman-sojib-3134ba244/" , 
    },
    {
      id : 4 , 
      child: (
        <>
        Youtube <GrYoutube />
        </>
      ),
      href : "https://www.youtube.com/channel/UCUczVhS18mP0FL9A_6blJrw", 
    },
    {
      id : 5 , 
      child: (
        <>
        Twitter <GrTwitter />
        </>
      ),
      href : "https://x.com/SojibZaman3", 
      style : "rounded-br-md"
    }
  ]



  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map((scl) =>
          <li key={scl.id} className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-300 ml-[-120px] hover:rounded-md duration-300 hover:ml-[-10px] ${scl.style}`}>

          <a href={scl.href} className='flex justify-between items-center w-full text-[#030712]' target='_blank' rel="noreferrer">
            {scl.child}
          </a>
        </li>
      )}
      </ul>
    </div>
  )
}

export default SocialLinks
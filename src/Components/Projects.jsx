import React from 'react'
import busbuddy from '../assets/rsz_1busbuddy.png'
import Capture from '../assets/resized/Capture.png'
import intro from '../assets/bgpic.bmp'
import r2 from '../assets/resized/r2.jpeg'
import lilkid from '../assets/resized/lilkid.gif'
import toplogo1 from '../assets/resized/toplogo1.png'
import { FaCode } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";




const Projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Bus Buddy',
      img: busbuddy,
      demo: 'https://www.canva.com/design/DAF1kCA4bA4/veZ75ew_upfT7dm7OW-vKA/view',
      code: '',
      info: 'BusBuddy aims to upgrade the bus experience at BUET with state-of-the-art facilities. It represents a centralized, interconnected system.',
    },
    {
      id: 2,
      title: 'DX-BALL',
      img: intro,
      demo: 'https://youtu.be/XCTOcCHHvx0?si=GiXgkLPHdmYWGBHE',
      code: 'https://github.com/Sojib-zaman/DXBALL',
      info: 'DXBALL is a simple game developed using C Igraphics. The game is about capturing the ball with the paddle and breaking the bricks with the ball.'
    },
    {
      id: 3,
      title: 'Waves',
      img: Capture,
      demo: 'https://youtu.be/e2n8sNTd86w?si=eQ21Yjfg6BcZEAHX',
      code: '',
      info: 'Waves is my first ever project in 1-1. It basically creates some sample sine and cosine waves and vary them according to the user input. It was a fun project to work with.'
    },
    {
      id: 4,
      title: 'Radare Malware Analysis',
      img: r2,
      demo: 'https://youtu.be/KkzGZMDdOY0?si=9KLFBCX9FDtXaayS',
      code: '',
      info: 'Radare2 is a portable reverse engineering framework.It has lots of Cli tools to work with binary files and understand the way they work.'
    },
    {
      id: 5,
      title: 'Football Manager',
      img: lilkid,
      demo: 'https://youtu.be/0kmgnuPTiO8?si=rf9aA4-efIYa4JR_',
      code: 'https://github.com/Sojib-zaman/football-manager',
      info: 'Football Manager is a simple football management game developed using Java. The game is about managing a football team, buying and selling players, maintaining the team'
    },
    {
      id: 6,
      title: 'Project Fornax',
      img: toplogo1,
      demo: 'https://youtu.be/EAmra81vv7M?si=77m32j6zgSMuXA4p',
      code: 'https://github.com/Sojib-zaman/Project-Fornax',
      info: 'This is my first website using React and Database. This is an educational website where students can learn and teachers can teach.'
    },


  ]

  return (
    <div id="Projects" className="bg-gray-950 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className='text-3xl font-bold border-b-gray-500 border-b-4'>Projects</p>
        </div>


        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-5  p-3">
          {
            projects.map((project) => (
              <div className="relative rounded-md border-2 border-white overflow-hidden group" key={project.id} style={{ height: '200px' }}>
                <img src={project.img} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0" />

                <div className="relative z-10 h-full hidden group-hover:flex flex-col items-center justify-center">
                  <div className="flex items-center justify-center">
                    <a href={project.demo} title="demo" className="relative inline-flex items-center justify-center p-3 m-2  border-cyan-100 border-2" target="_blank" rel="noreferrer" role="button"><FaExternalLinkAlt/></a>
                    <a href={project.code} title="code" className="relative inline-flex items-center justify-center p-3 m-2  border-cyan-100 border-2 " target="_blank" rel="noreferrer" role="button"><FaCode/></a>
                  </div>
                  <p className="mt-4 text-white text-center">
                    {project.info}
                  </p>
                </div>
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};



export default Projects
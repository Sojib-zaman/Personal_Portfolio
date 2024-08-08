import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase , FaPython , FaCode } from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';
import { FaJava } from "react-icons/fa6"

const Experience = () => {
  const skills = [
    { id: 1, title: 'HTML', icon: <FaHtml5 className="text-4xl" /> },
    { id: 2, title: 'CSS', icon: <FaCss3 className="text-4xl" /> },
    { id: 3, title: 'JavaScript', icon: <FaJs className="text-4xl" /> },
    { id: 4, title: 'React', icon: <FaReact className="text-4xl" /> },
    { id: 5, title: 'Node.js', icon: <FaNodeJs className="text-4xl" /> },
    { id: 6, title: 'Flutter', icon: <SiFlutter className="text-4xl" /> },
    { id: 7, title: 'PostgreSQL', icon: <FaDatabase className="text-4xl" /> },
    { id: 8, title: 'Oracle', icon: <FaDatabase className="text-4xl" /> },
    { id: 9 , title: 'Java', icon: <FaJava className="text-4xl" /> },
    {id: 11, title: 'C++', icon: <FaCode className="text-4xl" /> },
    {id: 12, title: 'Python', icon: <FaPython className="text-4xl" /> },
  ];

  return (
    <div id="Experience" className='bg-gray-950 w-full mx-auto pt-5 h-screen text-white'>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
          <p className='text-3xl font-bold border-b-gray-500 border-b-4'>Skills</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div className="flex flex-col items-center" key={skill.id}>
              {skill.icon}
              <p className='text-lg font-bold mt-2'>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

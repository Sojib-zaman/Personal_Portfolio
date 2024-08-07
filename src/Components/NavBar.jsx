import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const NavBar = () => {

  const [showMenu, setShowMenu] = React.useState(false); // state to show or hide the menu

  const otherpages = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Education" },
    { id: 6, link: "ContactMe" },

  ];

  return (
    <div className="flex justify-between items-center h-20 py-3 px-5 w-full text-white bg-transparent fixed">


      <div>
        <h1 className="text-5xl font-signature ml-2">Sojib</h1>
      </div>
      <ul className="hidden md:flex">
        {
          otherpages.map((page) => (
            <a href={`#${page.link}`}className="text-gray-500 cursor-pointer px-4 hover:text-sky-400 hover:scale-105 duration-150">{page.link}</a>
          )
          )}
      </ul>


      <div onClick={() => setShowMenu(!showMenu)} className='cursor-pointer px-4 z-10 text-gray-500 md:hidden'>
        {showMenu ? <FaTimes /> : <FaBars />}
      </div>

      {
        showMenu && (
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-500 text-gray-100'>

            {

              otherpages.map((page) => (

                <a href={`#${page.link}`} key={page.id} className='px-4 cursor-pointer py-6 text-4xl'>{page.link}
                </a>
              ))}

          </ul>
        )
      }

    </div>
  )
}

export default NavBar
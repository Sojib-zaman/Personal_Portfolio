import React from 'react'
const NavBar = () => {



  const otherpages = [
    { id: 1, link: "Home" },
    { id: 2, link: "About" },
    { id: 3, link: "Experience" },
    { id: 4, link: "Projects" },
    { id: 5, link: "Education" },
    { id: 6, link: "ContactMe" },

  ];
  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

  return (
    <div className="flex justify-between items-center h-20 py-3 px-5 w-full text-white bg-transparent fixed" id="navbar">


      <div>
        <h1 className="text-5xl font-signature ml-2">Sojib</h1>
      </div>
      <ul className="hidden md:flex">
        {
          otherpages.map((page) => (
            <a href={`#${page.link}`}className="text-gray-500 cursor-pointer px-4 hover:text-sky-400 hover:scale-105 duration-150">{page.link}</a>
          )
          )
        }
      </ul>
      

      </div>
  )
}

export default NavBar
import React from 'react'
import mypic from '../assets/myimg.jpg'
import cover from '../assets/cover.jpg'

const HomePage = () => {
    return (
        <div id="Home" className="h-screen w-full bg-gray-950">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row text-white">
                <div className='flex flex-col justify-center h-full'>


                    <div class="rounded-t-lg h-64 w-auto overflow-hidden">
                        <img class="object-cover object-top w-full" src={cover} alt='Mountain' />
                    </div>
                    <div class="mx-auto w-80 h-80 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img class="object-cover object-center h-80" src={mypic} alt='Sojib' />
                    </div>
                    <div class="text-center mt-2">
                        <h1 class="font-bold text-2xl">MD. Roqunuzzaman Sojib</h1>
                        <p class="text-sky-500 font-sans">Computer Science and Engineering</p>
                        <p class=" font-sans text-sky-500">Bangladesh University of Engineering and Technology</p>
                    </div>


                </div>
                <div>

                </div>

            </div>

        </div>
    )
}

export default HomePage;
import { GiGraduateCap } from "react-icons/gi";
import buet from '../assets/buet.png'
import ndc from '../assets/ndc.png'
import drmc from '../assets/drmc.jpeg'

import React from "react";
const Education = () => {
    return (
        <div id="Education" className='bg-gray-950 w-full mx-auto pt-5 h-screen text-white'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-3xl font-bold border-b-gray-500 border-b-4'>Education</p>
                </div>

                <div className="h-screen">
                    <div className="flex flex-col  justify-center p-3 m-2 text-lg font-bold text-white ">
                        <div className="flex  mb-4">
                            <img src={buet} className="object-contain max-h-16 max-w-16"></img>
                            <div className="ml-4">
                                <div className="flex ">
                                    <GiGraduateCap />
                                    <div className="ml-2 text-fuchsia-400">BSc in Computer Science and Engineering</div>
                                </div>
                                <div>Bangladesh University of Engineering and Technology</div>
                                <div>2019-2025</div>
                            </div>
                        </div>
                        <div className="flex  mb-4">
                            <img src={ndc} className="object-contain max-h-16 max-w-16"></img>
                            <div className="ml-4">
                                <div className="flex ">
                                    <GiGraduateCap />
                                    <div className="ml-2 text-fuchsia-400">Higher Secondary School Certificate</div>
                                </div>
                                <div>Notre Dame College</div>
                                <div>2017-2019</div>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={drmc} className="object-contain max-h-16 max-w-16"></img>
                            <div className="ml-4">
                                <div className="flex">
                                    <GiGraduateCap />
                                    <div className="ml-2 text-fuchsia-400">Secondary School Certificate</div>
                                </div>
                                <div>Dhaka Residential Model College</div>
                                <div>2007-2017</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );

};
export default Education;
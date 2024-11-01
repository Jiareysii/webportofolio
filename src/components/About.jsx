import React from 'react'
import AboutImage from "../assets/About.png";

const About = () => {
    return (
      <div className="bg-black text-white py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <img
              src={AboutImage}
              alt=""
              className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
            />
            <div className="flex-1">
              <p className="text-lg mb-8">
              a UI/UX designer passionate about creating user-friendly and visually appealing digital experiences. With a background in visual arts, I specialize in user research, wireframing, prototyping, and user testing to ensure my designs meet real user needs. Outside of design, I enjoy sketching ideas and painting. I'm eager to connect with fellow creatives and continue learning to elevate my craft!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    User Research & Usability Testing
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-9/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Prototyping
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-10/12"
                    ></div>
                  </div>
                </div>
                <div className="flex items-center">
                  <label htmlFor="htmlandcss" className="w-2/12">
                    Visual Design
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-500 h-2.5 rounded-full 
                      transform transition-transform duration-300 hover:scale-105 w-12/12"
                    ></div>
                  </div>
                </div>
              </div>
              <div className="mt-12 flex justify-between text-center">
                  <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-500">
                          6+
                      </h3>
                      <p>Months Experience</p>
                  </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
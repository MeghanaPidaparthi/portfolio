import React from "react";
import githubIcon from "./assets/mark-github.svg";
import github from "./assets/mark-github-2.svg";
import education from "./assets/education.svg";
import LinkedIn from "./assets/LinkedIn.svg";
import htmlIcon from "./assets/html.svg";
import cssIcon from "./assets/css.svg";
import jsIcon from "./assets/js.svg";
import reactIcon from "./assets/react.svg";
import javaIcon from "./assets/java.svg";
import python from "./assets/python.svg"
import Figma from "./assets/figma.svg";
import Arrow from "./assets/Arrow_Up_Right_MD.svg"
import "./index.css"
import { Link } from "react-router-dom";
const Portfolio = () => {
  return (
    <div className="bg-background text-white font-montserrat min-h-screen px-4 sm:px-10 py-10">
      {/* Header */}
      <header className="text-center">
       <h3 className="text-4xl sm:text-6xl text-[#fff] font-bold mb-4">Hello!</h3>
        <h1 className="text-4xl sm:text-6xl text-primaryPurple font-bold mb-4">
           I'm Meghana
        </h1>
        <p className="text-grayLight text-lg sm:text-xl">
          A passionate web developer who loves creating innovative websites and a casual coder!
        </p>
      </header>

      {/* Grid Container */}
      <div className="grid gap-8 mt-10 md:grid-cols-3 ">
        {/* About Me Section */}
        <div className="p-6 border border-border rounded-lg section-hover">
          <h2 className="text-lg font-semibold text-heading mb-4">About Me</h2>
          <p>
            Hi! I’m Meghana, a
            <span className="text-primaryPurple font-bold"> web developer</span> passionate about
            creating responsive, user-friendly websites. I’m currently pursuing B. Tech in Computer
            Science. I enjoy exploring modern JavaScript frameworks. Beyond coding, I love cooking
            and painting. Let’s build something amazing together!
          </p>
        </div>

        {/* Projects Section */}
        <div className="p-6 border border-border rounded-lg section-hover">
          <h2 className="text-lg font-semibold text-heading mb-4">Projects</h2>
          <ul className="space-y-6">
            <li className="text-center">
              <span className="block text-lg font-semibold">KalaaBazaar</span>
              <div className="mt-2 flex justify-center space-x-4">
              <Link to="/project-details/1">
                  <button className="bg-primaryPurple text-white px-4 py-1 rounded text-sm">
                    Details
                  </button>
                </Link>
                <button className="bg-transparent border-2 border-[#222] text-white px-4 py-1 rounded text-sm flex items-center space-x-2 hover:bg-[#222] hover:text-white transition-all">
                <a href="https://github.com/MeghanaPidaparthi/KalaaBazaar" target="_blank">  <span>View on</span></a>
                  <img src={githubIcon} alt="GitHub Icon" className="w-4 h-4" />
                </button>
              </div>
            </li>
            <li className="text-center">
              <span className="block text-lg font-semibold">RightsRevive</span>
              <div className="mt-2 flex justify-center space-x-4">
              <Link to="/project-details/2">
                  <button className="bg-primaryPurple text-white px-4 py-1 rounded text-sm">
                    Details
                  </button>
                </Link>
                <button className="bg-transparent border-2 border-[#222] text-white px-4 py-1 rounded text-sm flex items-center space-x-2 hover:bg-[#222] hover:text-white transition-all">
                <a href="https://github.com/MeghanaPidaparthi/" target="_blank"> <span>View on</span> </a>
                  <img src={githubIcon} alt="GitHub Icon" className="w-4 h-4" />
                </button>
              </div>
            </li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="p-6 border border-border rounded-lg section-hover">
          <h2 className="text-lg font-semibold text-heading mb-4">Education</h2>
          <ul className="space-y-3">
            <li>
              <button className="bg-button text-white px-4 py-2 rounded w-full text-left flex items-center space-x-3">
                <img src={education} alt="graduation-cap" className="w-4 h-4" /> Malla Reddy University
              </button>
            </li>
            <li>
              <button className="bg-button text-white px-4 py-2 rounded w-full text-left flex items-center space-x-3">
                <img src={education} alt="graduation-cap" className="w-4 h-4" /> Bhavans Sri Aurobindo Jr. College
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="p-6 border border-border rounded-lg section-hover">
          <h2 className="text-lg font-semibold text-heading mb-4">Contact</h2>
          <p>Email: <a href="mailto:pidaparthimeghana@gmail.com" className="text-primaryPurple">pidaparthimeghana@gmail.com</a></p>
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Social Links:</h3>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/MeghanaPidaparthi" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white px-4 py-1 rounded text-sm">
                <img src={github} alt="GitHub Icon" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/meghana-pidaparthi/" target="_blank" rel="noopener noreferrer" className="bg-transparent text-white px-4 py-1 rounded text-sm">
                <img src={LinkedIn} alt="LinkedIn Icon" className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-4">
          <a 
  href="https://drive.google.com/uc?export=download&id=1gzZgilOHBUwbhSrYIWmlT4E3TAyBLHjF" 
  className="block text-primaryPurple mb-2" 
  download="Meghana's Resume"
>
Resume
</a>

            <a href="/get-in-touch" className="inline-flex items-center text-primaryPurple">Get in Touch<img src={Arrow} alt="Arrow" className="w-6 h-6 ml-0" /></a>
          </div>
        </div>

        {/* Accomplishments Section */}
        <div className="p-6 border border-border rounded-lg section-hover">
          <h2 className="text-lg font-semibold text-heading mb-4">Accomplishments</h2>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-primaryPurple">GREEN Olympiad for Youth:</span> Earned a merit certificate
            </li>
            <li>
              <span className="font-semibold text-primaryPurple">B2 Cambridge Empower:</span> Successfully completed a B2 Level English proficiency program focused on advanced communication and comprehension skills
            </li>
          </ul>
        </div>

        {/* Skills Section */}
        <div className="p-6 border border-border rounded-lg section-hover">
          <h2 className="text-lg font-semibold text-heading mb-4">Skills</h2>
          <ul className="space-y-4">
            <li>
              <strong>Web Dev:</strong>
              <div className="flex items-center space-x-3 mt-2">
                <img src={htmlIcon} alt="HTML" className="w-5 h-5" />
                <img src={cssIcon} alt="CSS" className="w-5 h-5" />
                <img src={jsIcon} alt="JavaScript" className="w-5 h-5" />
                <img src={reactIcon} alt="React JS" className="w-5 h-5" />
              </div>
            </li>
            <li>
              <strong>Programming:</strong>
              <div className="flex items-center space-x-3 mt-2">
              <img src={javaIcon} alt="Java" className="w-5 h-5 mt-2" />
              <img src={python} alt="Python" className="w-5 h-5 mt-2" />
              </div>
            </li>
            <li>
              <strong>Miscellaneous:</strong>
              <img src={github} alt="Github" className="w-5 h-5 mt-2" />
            </li>
            <li>
              <strong>UX Designing Tools:</strong>
              <img src={Figma} alt="Figma" className="w-5 h-5 mt-2" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React from "react";
import { SkillCard, ProjectCard } from "./components/Card"
import './App.css';
import dev from './assets/dev.png'
import {NavButton, ContactButton, PrimaryButton, SecondaryButton } from "./components/Button";
import { Skills, Projects } from "./components/Data";
import { SectionHead } from "./components/Header";
import { FaXTwitter,FaReddit, FaInstagram } from "react-icons/fa6";
import Footer from "./components/Footer";

function App() {


  return <>
    <div className="flex flex-row justify-between lg:grid grid-flow-col grid-cols-2 items-center">
      <h1 className="m-5 lg:m-10 text-xl lg:text-5xl text-green-600 ">
        SP
      </h1>
      <nav className="inline-flex gap-3 lg:gap-10 justify-end items-center lg:mx-20 text-sm lg:text-lg">
        <NavButton type="Projects" hyper="Projects"/>
        <NavButton type="Skills" hyper="Skill"/>
        <NavButton type="Contact" hyper="Contact"/>
        <a className="text-sm secondary-btn" href="https://drive.google.com/uc?export=download&id=1Paykz_lEBHGmBW1Dnab28W5wAFz9XEEf">Download CV</a>
      </nav>
    </div>

    <div className="flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-2  gap-10">
      <div className="h-100 flex flex-col justify-center">
        <h1 className="text-6xl m-3 text-center font-bold">Sanjay Patel</h1>
        <h3 className="italic m-2 text-center">Learner, ML developer, Tech Enthusiast, Full Stack Developer</h3>
        <p className="lg:text-lg text-center lg:px-30">
          Bridging algorithmic precision with cloud-native scalability. I build intelligent, secure web systems using Python, React, and AWS.
        </p>
        <div className="gap-5 inline-flex justify-center w-full my-4">
          <PrimaryButton type="View Projects" />
          <SecondaryButton />
        </div>
      </div>
      <div className="flex justify-center">
        <img src={dev} className="w-fit h-fit"/>
      </div>
    </div>

    {/* Skill */}
    <div className="py-10 " id="Skill">
      <SectionHead name="Skills"/>
      <div className="inline-flex gap-6 w-full flex-col items-center lg:justify-evenly  lg:flex-row">
        {Skills.map((skill) => (
          <SkillCard
            key={skill.id}
            category={skill.category}
            technology={skill.technologies}
            description={skill.description}
          />)
        )}
      </div>
    </div>

    {/* Project */}
    <div id="Projects">
      <SectionHead name="Projects"/>
      {Projects.map((Project)=>(
        <ProjectCard 
        key={Project.id}
        name={Project.name}
        stack={Project.stack}
        description={Project.description}/>
      ))}
    </div>


    {/* Contact */}
    <div className="py-10" id="Contact">
      <SectionHead name="Contact"/>
      <div className="flex flex-col items-center lg:flex-row lg:items-start w-full justify-center gap-10">
        <div className="flex flex-col items-start gap-4 px-3">
          <h4 className="text-2xl font-medium m-2">Socials</h4>
          <div className="flex flex-col gap-3" >
            <ContactButton via="Instagram">
            <FaInstagram />
          </ContactButton >
          <ContactButton via="X (Twitter)">
            <FaXTwitter />
          </ContactButton>
          <ContactButton via="Reddit">
            <FaReddit />
          </ContactButton>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h4 className="text-2xl m-2">Let's Connect!</h4>
          <form className="grid grid-flow-row grid-rows-1">
            <textarea className="form-area " placeholder="Enter your Message!"></textarea>
            <button className="primary-btn hover:bg-green-900 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>

    <Footer />
    



  </>
}

export default App;
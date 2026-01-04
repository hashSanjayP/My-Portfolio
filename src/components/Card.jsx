import './Card.css'
import cyber from '../assets/cyber.png'
import {PrimaryButton, SecondaryButton } from './Button'


function SkillBadge({type}){
    return <>
    <span className='skill-badge'>{type}</span>
    </>
}

function SkillCard({ category, technology, description }) {
    return <>
        <div className="skillcard">
            <h3 className="text-3xl py-3">{category}</h3>
            <p className='py-1'><span>Technologies: </span> {technology.map((tech,index) => (
                <SkillBadge key={index} type={tech}/>
            ))}</p>
            <p className='py-3 text-justify  leading-relaxed'>{description}</p>
        </div>
    </>
}


function ProjectCard({name,stack, description}){
    return <>
    <div className='project-card'>
        <div>
            <img src={cyber} alt='IMAGE' className='w-full h-50 mx-auto'/>
        </div>
        <div className='col-span-3 m-2'>
            <h3 className='text-2xl my-1'>{name}</h3>
            <h4 className='inline-flex'>Tech Stack</h4>
            {stack.map((tech)=>(
                <SkillBadge key={tech} type={tech}/>
            ))}
            <p className='my-1  leading-relaxed'>{description}</p>
            <PrimaryButton type="Watch Demo"/>
            <SecondaryButton />
        </div>
    </div>
    </>
}



export { SkillCard, ProjectCard };
import cyber from '../assets/cyber.png'
import ML from '../assets/ML.png'

const Skills = [
  {
    id: 1,
    category: "Languages",
    description:
      "Strong foundation in both compiled and interpreted languages, with experience in building efficient algorithms, data structures, and backend logic. Comfortable writing clean, maintainable, and performance-oriented code.",
    technologies: ["C++", "Python", "Java", "JavaScript"]
  },
  {
    id: 2,
    category: "Frontend",
    description:
      "Experienced in developing responsive and user-friendly interfaces using modern frontend frameworks. Focused on clean UI design, component-based architecture, and delivering smooth user experiences.",
    technologies: ["Tailwind CSS", "React", "HTML5", "JavaScript"]
  },
  {
    id: 3,
    category: "Backend & Tools",
    description:
      "Hands-on experience in building scalable backend services and integrating cloud-based tools. Familiar with version control, database management, and deploying secure, reliable applications.",
    technologies: ["Node.js", "AWS", "Git", "PostgreSQL"]
  }
];


const Projects=[
    {
        id:1,
        image:cyber,
        name:"CyberSecure Web APP",
        stack:["Python","React","APIs","Tensorflow"],
        description:"A comprehensive security platform that detects phishing and intrusion attempts using Machine Learning. \
        Built with React for a responsive UI and TensorFlow for real-time threat analysis.",
        link:"https://github.com/hashSanjayP/major_project_sans"
    },
    {
        id: 2,
        image:ML,
        name: "ML Model Classifiers & LLM Chat",
        stack: ["Python", "React", "NLP", "TensorFlow", "OpenAI API"],
        description: "A multi-modal AI dashboard that features a text spam detector, flower image classifier, and an interactive LLM chatbot. \
        Demonstrates the seamless integration of Natural Language Processing and Computer Vision models into a unified web interface.",
        link:"https://github.com/Sanjaygenius777/MachineLearningWebsite"
    }
]

export {Skills, Projects};
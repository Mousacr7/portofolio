import { motion } from "framer-motion";

const Project = () => {
    
    const projects = [
        {title:"🛒 Coffee E-Commerce Website" ,img:"/e-commere-shop" ,tech: ["HTML ","CSS ",'JavaScript '],discrption:"A responsive landing page for a fictional artisan coffee shop.This site highlights products, evokes the store's warm, cozy vibe, and encourages user interaction through a clean, engaging layout and modern UI.",liveDemo:'https://mousacr7.github.io/coffee-shop-ecommerce/',GitHub:'https://github.com/Mousacr7/coffee-shop-ecommerce'},
        {title:"☕Coffe Shop" ,img:"/coffe.jpeg" ,tech: ["HTML ","CSS ",'JavaScript '],discrption:'A responsive landing page for a fictional coffe shop.this site highlights products, store vibe, and encourages user interaction with clean visuals and layout',liveDemo:'https://mousacr7.github.io/coffee-restaurant/',GitHub:'https://github.com/Mousacr7/coffee-restaurant'},
        {title:"🌦️ Weather App" ,img:"/d-snow.jpeg",tech: ["HTML ","CSS ",'JavaScript ','API (OpenWeatherMap)'] ,discrption:'A responsive weather application that fetches real-time weaather data using the OpenWeatherMap API.user can search for any city and receive up-to-date weather condition',liveDemo:'https://mousacr7.github.io/weather-app/',GitHub:'https://github.com/Mousacr7/weather-app'},
        {title:"💱 Currency Converter" ,tech: ["HTML ","CSS ",'JavaScript ','API (Exchange Rate API ) '],img:"/currency.jpeg" ,discrption:'A simple and clean currency converter that uses a real-time exchange rate API.it allows users to conver between diffrent currencies instantly with accurate result',liveDemo:'https://mousacr7.github.io/currency-converter/',GitHub:'https://github.com/Mousacr7/currency-converter'},
        {title:"✅ Task Tracker" ,img:"/task.jpeg" ,tech: ["React ","CSS ",'JavaScript(JSX, Hooks) ',],discrption:'A dynamic task management app buil in React. it allows users to add, delete, and toggle reminders on tasks, demonstrating core React concepts and component-based architecture',liveDemo:'',GitHub:'https://github.com/Mousacr7/task-tracker'}
    ]
  return (
     <section className="projects-section" id="projects">
        <h1 className="projects-title">My projects</h1>
        <div className="projects">
        

        {projects.map((project,index) => (
            <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
   viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.3, delay: index * 0.2 }}
  >
            <div className='project-card'>
                <img src={project.img} alt={project.title}/>
                <div className='project'>
                <h2>{project.title}</h2>
                <p>{project.discrption}</p>
                <span>skill used</span>
                <ul>
                {project.tech.map((techItem,index)=> (
                    <li className='tech-skill'key={index}>{techItem}</li>
                ))}
                </ul>
                <div className='project-link'>
                    <a href={project.liveDemo} target='blank'><button>live Demo</button></a>
                    <a href={project.GitHub}target='blank'><button>GitHub</button></a>
                </div>
                </div>
            </div>
            </motion.div>
        ))}
      </div>
        </section>
  )
}

export default Project

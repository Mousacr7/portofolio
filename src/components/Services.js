import React from 'react';
import { FiCode, FiSmartphone, FiTool, FiDatabase } from 'react-icons/fi';
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {title:"Web Development",desc:" I build responsive and functional websites using HTML, CSS, JavaScript, React, and PHP.From landing pages to interactive applications.",icon:FiCode , iconClass:"icon code"},
    {title:"Mobile Assistance",desc:" I help people with mobile-related tasks like installing apps, setting up devices, and troubleshooting software issues.",icon:FiSmartphone , iconClass:"icon mobile"},
    {title:"Electronics Repair",desc:"   I fix PlayStation 2 (PS2) consoles, controllers, and other electronic devices — including soldering, part replacement, and diagnostics.",icon:FiTool , iconClass:"icon repair"},
    {title:"Backend & Databases",desc:"  I create simple backend systems using PHP and store data using MySQL, allowing websites and apps to have login systems and more.",icon:FiDatabase , iconClass:"icon database"}
  ]
  return (
    <section className="services section" id='services'>
      <div className="section-header">
        <h2 className="title">Services I Provide</h2>
        <p className="description">
          I offer a range of technical and creative services that help individuals and businesses
          solve problems, build projects, and grow their presence.
        </p>
      </div>
      <div className="cards">
      {services.map((services,index) => (
            <motion.div
        key={index}
        initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.3, delay: index * 0.2 }}

  >
           <div className="card">
             <services.icon className={services.iconClass} />
             <h3 className="card-title">{services.title}</h3>
              <p className="card-desc">
                {services.desc}
              </p>
           </div>
           </motion.div>
      ))}
      </div>
    
    </section>
  );
};

export default Services;

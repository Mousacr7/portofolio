// src/components/Footer.js
import React from "react";
import { FaHome, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Mousa. All rights reserved.</p>
      <div className="footer-links">
        <a href="#home"><FaHome /> Home</a>
        
        <a
          href="https://github.com/Mousacr7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
        <a href="mailto:mosamlam389@gmail.com"><FaEnvelope /> Email</a>
        <a
          href="https://sa.linkedin.com/in/musa-abubakar-735a43336"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;

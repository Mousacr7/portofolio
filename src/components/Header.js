import { useState } from "react";
import { FaHome, FaEnvelope, FaFolderOpen, FaUser } from "react-icons/fa";

const Header = () => {
  const items = [
    { name: "home",href: "#",logo: <FaHome /> },
    { name: "Services", href: "#services",logo: <FaUser /> },
    { name: "projects", href: "#projects",logo: <FaFolderOpen /> },
    { name: "contact",href:"mailto:mosamlam389@gmail.com", logo: <FaEnvelope /> }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMune = () => setIsMenuOpen(false)

  return (
    <header >
      <h1 className="logo" >Portfolio</h1>
      <div className="menu-bar" onClick={toggle}>&#9776;</div>
      <nav className={isMenuOpen ? "mobile-style" : ""}>
          {items.map((item, index) => (
            <li className="item" key={index}>
              <a className="link" href={item.href}onClick={closeMune}>
                {item.logo} {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </a>
            </li>
          ))}
      </nav>
    </header>
  );
};

export default Header;

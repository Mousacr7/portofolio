import {useState} from "react"

const Header = () => {
  const item =["home",'about','projects','contact']
  const [ismenuOpen, setIsMenuOpen] =useState(false)
  const toggle = () => {
    setIsMenuOpen(!ismenuOpen);
  }
  return (
    <header>
      <h1 className="logo">Protofolio</h1>
      <div className="menu-bar" onClick={toggle}>&#9776;</div>
      <nav className={ismenuOpen ? "mobile-style": ""}>
        {item.map((item,index )=> (
          <li className="item"key={index}><a className="link" href={item}>{item}</a></li>
        ))}
     <a href="#button"className="button"><button>Hire me</button></a>
     </nav>
    </header>
  )
}

export default Header

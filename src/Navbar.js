import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
       <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="projects">PROJECTS</a></li>
        <li><a href="about">ABOUT</a></li>
    </ul> 
    </div>
  );
}

export default Navbar;
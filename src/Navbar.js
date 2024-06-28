import "./Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
       <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">Projects</a></li>
        <li><a href="about.asp">About</a></li>
    </ul> 
    </div>
  );
}

export default Navbar;
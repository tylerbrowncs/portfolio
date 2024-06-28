import './Frontpage.css';
import portrait from '../assets/portrait.jpg';
import github from '../assets/github.png';

function Frontpage() {
    return (
        <div className="home">
            <img className="portrait" src={portrait} alt="Portrait of Tyler>"/>
            <span>
                <h1 className="nameHeader"> Tyler Brown</h1>
                <p className="description"> I'm Tyler Brown, a computer science graduate from Cardiff University. 
                    I specialize in Python and JavaScript (React.js), creating dynamic and 
                    responsive web applications, and chat bots. Explore my projects and see 
                    how my skills and experiences come to life.</p>
                <span>
                    <a claassName="socialButton" href="https://github.com/tylerbrowncs">
                        <img src={ github } />
                    </a>
                    <a claassName="socialButton" href="https://www.linkedin.com/in/tylerbrowncs/">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" />
                    </a>
                </span>
            </span>
            
            
        </div>
    );
}

export default Frontpage;
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav(){
    return (
        <nav className="navBar">
            <div className="aboutMe">
                <h1>Adhaar Jain</h1>
                <h6>Front-End Developer</h6>
            </div>
            <ul className="navUl">
                <Link to="/">
                    <li className="me">About Me</li>
                </Link>
                <Link to="/Projects">
                    <li>Projects</li>
                </Link>
                <Link to="/Skill">
                    <li>Skills</li>
                </Link>
                <Link to="/Contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
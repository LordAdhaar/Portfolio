import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav() {

    function underActive(e) {
        console.log(e);
        console.log(e.target);
        console.log(e.target.parentElement.parentElement);
        const listItems = document.querySelectorAll(".navUl li");

        for (let listItem of listItems) {
            console.log(listItem);
            if (listItem.classList.contains("underActive")) {
                listItem.classList.remove("underActive");
            }
        }

        e.target.classList.add("underActive");
    }

    return (
        <nav className="navBar">
            <div className="aboutMe">
                <h1>Adhaar Jain</h1>
                <h6>Smart Contract Developer<br />and Security Researcher</h6>
            </div>
            <ul className="navUl">
                <Link to="/">
                    <li className="me" onClick={underActive}>About Me</li>
                </Link>
                <Link to="/Projects">
                    <li className="pro" onClick={underActive}>Projects</li>
                </Link>
                <Link to="/Skill">
                    <li className="ski" onClick={underActive}>Skills</li>
                </Link>
                <Link to="/Contact">
                    <li className="con" onClick={underActive}>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}
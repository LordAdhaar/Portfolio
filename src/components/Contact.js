import {BsBoxArrowInUpRight,BsArrowUpRight} from  "react-icons/bs";
import {FiArrowUpRight} from "react-icons/fi"
import {AiFillGithub,AiOutlineTwitter,AiFillMail} from "react-icons/ai";
import {BsLinkedin} from "react-icons/bs";
import {IoMdMail} from "react-icons/io";

export default function Contact(){
    return(
        <ul className="contact listStyleType">
            <li style={{height:"100%"}}><a href="https://github.com/LordAdhaar" target="_blank"><AiFillGithub/>Github</a></li>
            <li style={{height:"5%"}}><a href="https://www.linkedin.com/in/adhaar-jain-6013121a5" target="_blank"><BsLinkedin/>LinkedIn</a></li>
            <li style={{height:"55%"}} ><a href="https://twitter.com/JainAdhaar" target="_blank"><AiOutlineTwitter/>Twitter</a></li>
            <li style={{height:"100%"}} ><a href="mailto: adhaar1@hotmail.com" target="_blank"><IoMdMail/>E-Mail</a></li>
        </ul>
    )
}
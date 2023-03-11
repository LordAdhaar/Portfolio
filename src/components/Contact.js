import {BsBoxArrowInUpRight,BsArrowUpRight} from  "react-icons/bs";
import {FiArrowUpRight} from "react-icons/fi"

export default function Contact(){
    return(
        <ul className="contact listStyleType">
            <li style={{height:"100%"}}><a href="https://github.com/LordAdhaar" target="_blank">Github<FiArrowUpRight/></a></li>
            <li style={{height:"5%"}}><a href="https://www.linkedin.com/in/adhaar-jain-6013121a5" target="_blank">LinkedIn<FiArrowUpRight/></a></li>
            <li style={{height:"55%"}} ><a href="https://twitter.com/JainAdhaar" target="_blank">Twitter<FiArrowUpRight/></a></li>
            <li style={{height:"100%"}} ><a href="mailto: adhaar1@hotmail.com" target="_blank">E-Mail<FiArrowUpRight/></a></li>
        </ul>
    )
}
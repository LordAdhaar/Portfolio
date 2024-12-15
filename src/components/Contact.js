import { BsBoxArrowInUpRight, BsArrowUpRight } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi"
import { AiFillGithub, AiOutlineTwitter, AiFillMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

export default function Contact() {
    return (
        <div className="contactBrah">

            <div className="contactDiv">
                <form className="contactForm" action="https://formspree.io/f/xbjnjedr" method="POST">
                    <input type="text" name="username" placeholder="NAME" autoComplete="off" required />
                    <input type="email" name="Email" placeholder="EMAIL" autoComplete="off" required />
                    <textarea name="message" cols="30" placeholder="MESSAGE" rows="1" autoComplete="off" required></textarea>
                    <input class="submit" type="submit" value="SEND" />
                </form>
            </div>

            <ul className="contact listStyleType">
                <li style={{ height: "100%" }}><a href="https://github.com/LordAdhaar" target="_blank"><AiFillGithub />Github</a></li>
                <li style={{ height: "5%" }}><a href="https://www.linkedin.com/in/adhaar-jain-6013121a5" target="_blank"><BsLinkedin />LinkedIn</a></li>
                <li style={{ height: "55%" }} ><a href="https://twitter.com/LordAdhaar" target="_blank"><AiOutlineTwitter />Twitter</a></li>
                <li style={{ height: "100%" }} ><a href="mailto: adhaar1@hotmail.com" target="_blank"><IoMdMail />E-Mail</a></li>
            </ul>



        </div>
    )
}
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav"
import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact"

export default function RouteSwitch(){

    const blob = document.querySelector("div.blob");

    document.body.onpointermove = event => {
        console.log(event);
        const {clientX, clientY} = event;
        
        blob.animate({
            left:`${clientX}px`,
            top:`${clientY}px`
        },{duration:1500,fill:"forwards"});
    }

    return(
        <HashRouter>
            <Nav />
            <div className="blob">sheesh</div>
            <div className="blur"></div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Skill" element={<Skill />} />
                <Route path="/Contact" element={<Contact/>}  />
            </Routes>
        </HashRouter>
    )
}
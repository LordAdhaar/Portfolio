import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav"
import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Blob from "./components/blob.js";

export default function RouteSwitch(){
    return(
        <HashRouter>
            <Nav/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Skill" element={<Skill />} />
                <Route path="/Contact" element={<Contact/>}  />
            </Routes>
        </HashRouter>
    )
}
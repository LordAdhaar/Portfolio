import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav"
import './App.css';
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact"

export default function RouteSwitch(){
    return(
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Projects" element={<Projects/>} />
                <Route path="/Skill" element={<Skill />} />
                <Route path="/Contact" element={<Contact/>}  />
            </Routes>
        </BrowserRouter>
    )
}
import {FiArrowUpRight} from "react-icons/fi";

export default function Projects(){

    function active(element){
        let toActivate = document.querySelector(`ul.${element}`);
        window.setTimeout(function(){
            toActivate.style.opacity = 1;
          },0);
        console.log(typeof toActivate);
    }

    function deActivate(element){
        let toDeActivate = document.querySelector(`ul.${element}`);
        toDeActivate.style.opacity = 0;
       
    }

    return(
        <ul className="projects">

            <li onMouseEnter={()=>{active("desc0")}} onMouseLeave={()=>{deActivate("desc0")}}>
                <a href="https://lordadhaar.github.io/shopping-cart/" target="_blank">E-commerce Website <FiArrowUpRight/></a> 
                <ul className="desc0">
                    <li>E-commerce website to buy anime merchandise</li>
                    <li>React + Firebase</li>
                </ul>
            </li>
            
            <li onMouseEnter={()=>{active("desc1")}} onMouseLeave={()=>{deActivate("desc1")}}>
                <a href="https://lordadhaar.github.io/To-Do-List" target="_blank" >To-Do-List <FiArrowUpRight/></a>
                <ul className="desc1">
                    <li>To-Do-List with CRUD functionality</li>
                    <li>JavaScript + Github + HTML + CSS</li>
                </ul>
            </li>
            
            <li onMouseOver={()=>{active("desc2")}}  onMouseLeave={()=>{deActivate("desc2")}}>
                <a href="https://lordadhaar.github.io/Resume-Creator/" target="_blank" >Resume Creator <FiArrowUpRight/></a>
                <ul className="desc2">
                    <li>React App to create Resume with Print functionality</li>
                    <li>React + HTML + CSS</li>
                </ul>
            
            </li>
            
            <li onMouseEnter={()=>{active("desc3")}}  onMouseLeave={()=>{deActivate("desc3")}}>
                <a href="https://lordadhaar.github.io/Weather-App/" target="_blank" >Weather App <FiArrowUpRight/></a>
                <ul className="desc3">
                    <li>Weather App made using OpenWeatherMap API </li>
                    <li>JavaScript + API + CSS</li>
                </ul>
            </li>
            
            <li onMouseEnter={()=>{active("desc4")}}  onMouseLeave={()=>{deActivate("desc4")}}>
                <a href="https://lordadhaar.github.io/Etch-A-Sketch/" target="_blank">Etch-A-Sketch <FiArrowUpRight/></a>
                <ul className="desc4">
                    <li>JavaScript Drawing Board</li>
                    <li>VanillaJs + HTML + CSS</li>
                </ul>
            </li>
        </ul>
    )
}
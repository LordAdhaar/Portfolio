export default function Projects(){

    function active(element){
        let toActivate = document.querySelector(`p.${element}`);
        window.setTimeout(function(){
            toActivate.style.opacity = 1;
          },0);
        console.log(typeof toActivate);
    }

    function deActivate(element){
        let toDeActivate = document.querySelector(`p.${element}`);
        toDeActivate.style.opacity = 0;
       
    }

    return(
        <ul className="projects">

            <li onMouseEnter={()=>{active("desc0")}} onMouseLeave={()=>{deActivate("desc0")}}>
                <a href="https://lordadhaar.github.io/shopping-cart/" target="_blank">E-commerce Website</a> 
                <p className="desc0">Web store to sell anime merchandise made using React and Firebase</p>
            </li>
            
            <li onMouseEnter={()=>{active("desc1")}} onMouseLeave={()=>{deActivate("desc1")}}>
                <a href="https://lordadhaar.github.io/To-Do-List" target="_blank" >To-Do-List</a>
                <p className="desc1">Used VanillaJs to create a To-Do-List implementing CRUD functionality</p>
            </li>
            
            <li onMouseOver={()=>{active("desc2")}}  onMouseLeave={()=>{deActivate("desc2")}}>
                <a href="https://lordadhaar.github.io/Resume-Creator/" target="_blank" >Resume Creator</a>
                <p className="desc2">React application which allows user to create and print their resume in 5 simple steps</p>
            
            </li>
            
            <li onMouseEnter={()=>{active("desc3")}}  onMouseLeave={()=>{deActivate("desc3")}}>
                <a href="https://lordadhaar.github.io/Weather-App/" target="_blank" >Weather App</a>
                <p className="desc3">Tells the weather in your city using simple API calls made using VanillaJs</p>
            </li>
            
            <li onMouseEnter={()=>{active("desc4")}}  onMouseLeave={()=>{deActivate("desc4")}}>
                <a href="https://lordadhaar.github.io/Etch-A-Sketch/" target="_blank">Etch-A-Sketch</a>
                <p className="desc4">Draw your reality, Shaka-Laka-Boom-Boom</p>
            </li>
        </ul>
    )
}
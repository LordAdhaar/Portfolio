export default function Skill(){
    return(
        <div className="daddy" style={{display:"flex", "margin-right":"25px", gap:"20px"}}>

        <ul className="skill">
            <li className="lang">
                Languages
                <ul className="lightFont listStyleType">
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Python</li>
                    <li>C++</li>
                </ul>
            </li>

            <li className="technical" >
                Technical
                <ul className="lightFont listStyleType">
                    <li>Data Structures & Algorithms</li>
                    <li>OOPs</li>
                    <li>Operating Systems</li>
                </ul>
            </li>
            
          
            
        </ul>
        
        <ul className="skill2">
        <li className="framework">
                Frameworks
                <ul className="lightFont listStyleType">
                    <li>React</li>
                    <li>Firebase</li>
                </ul>
            </li>
            <li className="tools">
                Tools
                <ul className="lightFont listStyleType">
                    <li>Github</li>
                    <li>Figma</li>
                    <li>Photoshop</li>
                </ul>
            </li>
            
        </ul>
    </div>
    )
}
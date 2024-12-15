export default function Skill() {
    return (
        <div className="daddy" style={{ display: "flex", "margin-right": "25px", gap: "20px" }}>

            <ul className="skill">
                <li className="lang">
                    Languages
                    <ul className="lightFont listStyleType">
                        <li>Solidity</li>
                        <li>Javascript</li>
                    </ul>
                </li>

                <li className="technical" >
                    Technical
                    <ul className="lightFont listStyleType">
                        <li>Data Structures & Algorithms</li>
                    </ul>
                </li>



            </ul>

            <ul className="skill2">
                <li className="framework">
                    Frameworks
                    <ul className="lightFont listStyleType">
                        <li>Foundry</li>
                        <li>React</li>
                    </ul>
                </li>
                <li className="tools">
                    Tools
                    <ul className="lightFont listStyleType">
                        <li>Github</li>
                        <li>Slither</li>
                    </ul>
                </li>

            </ul>
        </div>
    )
}
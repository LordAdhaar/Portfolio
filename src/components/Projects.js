import { FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
    function active(element) {
        let toActivate = document.querySelector(`ul.${element}`);
        window.setTimeout(function () {
            toActivate.style.opacity = 1;
        }, 0);
    }

    function deActivate(element) {
        let toDeActivate = document.querySelector(`ul.${element}`);
        toDeActivate.style.opacity = 0;
    }

    return (
        <ul className="projects">

            <li onMouseEnter={() => { active("desc0") }} onMouseLeave={() => { deActivate("desc0") }}>
                <a href="https://github.com/LordAdhaar/DeFi-Stablecoin" target="_blank">DeFi-Stablecoin <FiArrowUpRight /></a>
                <ul className="desc0">
                    <li>Decentralized stablecoin system with algorithmic minting and burning mechanisms</li>
                    <br />
                    <li>Tools: Solidity, OpenZeppelin, Chainlink Oracles, Foundry</li>
                </ul>
            </li>

            <li onMouseEnter={() => { active("desc1") }} onMouseLeave={() => { deActivate("desc1") }}>
                <a href="https://github.com/LordAdhaar/DST-RiseIn" target="_blank" >Ethereum Cloud Storage <FiArrowUpRight /></a>
                <ul className="desc1">
                    <li>Decentralized cloud storage service leveraging blockchain technology</li>
                    <br />
                    <li>Tools: HTML, CSS3, JavaScript, React, Solidity, IPFS, Pinata API</li>
                </ul>
            </li>

            <li onMouseEnter={() => { active("desc2") }} onMouseLeave={() => { deActivate("desc2") }}>
                <a href="https://github.com/LordAdhaar/PlutoDao" target="_blank" >PlutoDao <FiArrowUpRight /></a>
                <ul className="desc2">
                    <li>Decentralized governance platform enabling ERC20 token-based voting and proposal execution</li>
                    <br />
                    <li>Tools: Solidity, OpenZeppelin, Foundry</li>
                </ul>
            </li>

            <li onMouseEnter={() => { active("desc3") }} onMouseLeave={() => { deActivate("desc3") }}>
                <a href="https://github.com/LordAdhaar/Ethernaut-Solutions" target="_blank">Ethernaut Solutions <FiArrowUpRight /></a>
                <ul className="desc3">
                    <li>Completed Ethernaut CTF challenges to learn smart contract security</li>
                    <br />
                    <li>Tools: Solidity, Foundry, Ethers.js</li>
                </ul>
            </li>
        </ul>
    )
}

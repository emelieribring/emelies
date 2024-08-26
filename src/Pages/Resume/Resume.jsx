import React from 'react';
import './resume.css';
import Navbar from '../../Components/Navbar/Navbar';

export default function resume() {
  return (
    <div className='resume'>
        <Navbar/>
        <div className="resumeDiv">
            <div className="resumeBox">
                <div className='inner-content'>
                    <h1>About Me</h1>
                    <p>Swedish:</p>
                    <p>Emelie Ribring heter jag, är född 1998 i Stockholm och har växt upp ute på vackra Värmdö. 
                        Under mitt än sålänge 27 år långa liv har jag hunnit gå gymnasiet på Värmdö gymnasium 
                        där jag gick estetisk musik linje, varit en sväng till Asien, jobbat några år på Coop 
                        och även studerat till Blockchainutvecklare, webbutvecklare, Javascriptutvecklare på Medieinstitutet.</p>
                    <p>English:</p>
                    <p>My name is Emelie Ribring, born in 1998 in Stockholm, and I grew up on the beautiful island of Värmdö. 
                        During my 27 years of life so far, I've completed high school at Värmdö Gymnasium, where I studied 
                        the arts and music program, traveled to Asia, worked for a few years at Coop, 
                        and also studied to become a Blockchain Developer, Web Developer, and JavaScript Developer at Medieinstitutet.</p>
                </div>
            </div>
            <div className="resumeBox">
                <div className='inner-content'>
                    <h1>My experience</h1>
                    <p>Jag har erfarenhet inom: <br />
                    I have experience in: </p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Node JS</li>
                        <li>Solidity</li>
                        <br />
                        <li>Git/Github</li>
                        <li>Agile Methods</li>
                        <br />
                        <li>Web3</li>
                        <li>API Requests</li>
                        <li>TypeScript</li>
                        <li>Wordpress</li>
                        <br />
                        <li>Photoshop</li>
                        <li>Figma</li>
                        <li>Canva</li>
                    </ul>
                    <p>Swedish:</p>
                    <p>Jag har jobbat mycket inom front-end och ägnar gärna tid åt rolig och genomtänkt design. 
                        Inom backend har blockchainteknologin tagit mest plats men jag hittar hela tiden nya saker 
                        som intresserar mig och jag har nyligen satt mig in i apputveckling och programering i Flutter. 
                        Jag har även kikat lite på Phyton</p>
                    <p>English:</p>
                    <p>I have worked extensively in front-end and enjoy dedicating time to fun and well-thought-out design.
                        In the backend, blockchain technology has taken up most of my focus, but I constantly find new things 
                        that interest me. Recently, I have delved into app development and programming in Flutter. 
                        I've also started exploring Python a bit.</p>
                </div>
            </div>
            <div className="resumeBox">
                <div className='inner-content'>
                    <h1>My Education</h1>
                    <p>Swedish:</p>
                    <p><b>MEDIEINSTITUTET</b> <br />
                        Webbutvecklare (Webdeveloper) <br />
                        Javascriptutvecklare (Javascriptdeveloper) <br />
                        Blockchainutvecklare (Blockchaindeveloper) <br />
                        <br />
                        <b>NTI SKOLAN</b> <br />
                        Webbutveckling 1 (Webdevelpoment 1) <br />
                        Webbutveckling 2 (Webdevelpoment 2) <br />
                        Grafisk kommunikation 1 (Graphic Communication 1) <br />
                        <br />
                        <b>VÄRMDÖ GYMNASIUM</b> <br />
                        MUSIK <br />
                        </p>
                </div>
            </div>
        </div>

    </div>
  )
}

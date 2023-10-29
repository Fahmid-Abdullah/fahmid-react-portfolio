import React from "react";
import { ArrowDownCircle } from "react-bootstrap-icons";

export const About = () => {
    return (
        <div className="about" id="about">
            <div className="about-me-title">
            <h2>ABOUT</h2>
            </div>
            
            <div className="about-container">
            <div className="about-me-text">
                <h3><br/>Who Am I?<br/><br/></h3>
                <p className="about-paragraph">Welcome to my portfolio! I'm Fahmid Abdullah, a third year of Computer Science at Western University. I'm an aspiring software/web developer on a never-ending pursuit for knowledge. While my primary expertise lies in backend development, my journey has recently taken an exciting turn as I delve into the world of frontend development as well.</p>
                <p className="about-paragraph">My favorite pastime is one you've probably never heard of – programming! I've become genuinely captivated by front-end development, breathing life into back-end projects, with my eyes set on becoming a full-stack developer.</p>
                <p className="about-paragraph">When I'm not glued to my keyboard, I enjoy experimenting with new dishes, diving into books by Paulo Coelho, and gradually advancing in the games I'm crafting. Feel free to check them out on Itch.io. I'm relatively new to game development, so any feedback would be greatly appreciated.</p>
                <p className="about-paragraph">Finally, I'm currently engaged in large scale projects for both the <b>Western Cyber Society</b> and <b>Western Developer's Society</b>.</p>
            </div>

            <div className="academic-text">
            <h3><br/>Background<br/><br/></h3>
            <h4>Education</h4>
            <h6><br/><strong>Bachelor of Science,</strong> Western University, London, ON, 2021-Present</h6>
            <ul className="about-paragraph">
                    <li><small>Honors Specialization in Computer Science, Minor in Software Engineering</small></li>
                    <li><small>Western Scholarship of Distinction, Pathways to Education Scholarship</small></li>
                    <li><small>Software Engineering I, Software Project Management, Analysis for Algorithms, Organization of Programming Languages, Operating Systems, Computer Architecture</small></li>
            </ul>

            <h4><br/>Current Positions</h4>
            <ul className="about-paragraph">
                    <li><small>Software/AI Developer for Western Cyber Society (WCS)</small></li>
                    <li><small>Software Developer for Western Developer's Society (WDS)</small></li>
                    <li><small>Director of Internal Affairs (CSUS)</small></li>
                    <li><small>Western University Technological Review (WUTR)</small></li>
                    <li><small>Web Developer for Western IEEE</small></li>
            </ul>

            </div>

            <div className="about-me-contact">
                <h3><br/>Connect With Me<br/><br/></h3>
                <p className="about-paragraph">Do you have any thoughts on the portfolio? Any questions? Interested in seeing more? Just want to chat? Send me an email at <a className="link" href="mailto:fabdull9@uwo.ca" target="_blank">fabdull9@uwo.ca</a><br/><br/></p>
                <p className="about-paragraph"><b>You can also find me on the following platforms</b></p>
                <h7 className="about-paragraph">LinkedIn Profile: <a className="link" href="https://ca.linkedin.com/in/fahmid-abdullah" target="_blank">LinkedIn</a></h7>
                <h7 className="about-paragraph">Github Projects: <a className="link" href="https://github.com/Fahmid-Abdullah" target="_blank">GitHub</a></h7>
                <h7 className="about-paragraph">Itch.io Games: <a className="link" href="https://ainsire.itch.io" target="_blank">Itch.io</a></h7>
                <p><br/><br/><br/><b>Download my Resume</b></p>
                 <button onClick={() => window.open('https://drive.google.com/file/d/1Vj1CZJ6IHtmPR5giQ5o6s-NkK-Q4i3yC/view?usp=sharing')}>Download <ArrowDownCircle size={25}/></button>
            </div>

            </div>


        </div>
    )
}
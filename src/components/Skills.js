import React from 'react';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from "react-bootstrap";
import { BiBadgeCheck } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";

import htmlIcon from "../assets/img/htmlIcon.png";
import cssIcon from "../assets/img/cssIcon.png";
import jsIcon from "../assets/img/jsIcon.png";
import reactIcon from "../assets/img/reactIcon.png";
import gitIcon from "../assets/img/gitIcon.png";

import pythonIcon from "../assets/img/pythonIcon.png";
import javaIcon from "../assets/img/javaIcon.png";
import cIcon from "../assets/img/cIcon.png";
import cplusIcon from "../assets/img/cplusIcon.png";
import sqlIcon from "../assets/img/sqlIcon.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <section className="skill" id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>SKILLS</h2>
                            <h4><br/> In my programming journey, I've delved into various domains, constantly pursuing opportunities to enhance and refine my skills. The experience and knowledge I acquire at each step serve as a strong foundation, enabling me to step into future projects from a solid starting point.<br/><br/></h4>
                            <Carousel responsive={responsive} infinite={true} swipeable={false} draggable={false} ssr={true} autoPlay={true} autoPlaySpeed={2000} className="skill-slider">
                                <div className='item'>
                                    <img src={htmlIcon} title='HTML'/>
                                    <h4>HTML</h4>
                                    <h5><FaRegStar/><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={cssIcon} title='CSS'/>
                                    <h4>CSS</h4>
                                    <h5><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={jsIcon} title='JavaScript'/>
                                    <h4>JavaScript</h4>
                                    <h5><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={reactIcon} title='React'/>
                                    <h4>React</h4>
                                    <h5><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={gitIcon} title='Git'/>
                                    <h4>Git</h4>
                                    <h5><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={pythonIcon} title='Python'/>
                                    <h4>Python</h4>
                                    <h5><FaRegStar/><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={javaIcon} title='Java'/>
                                    <h4>Java</h4>
                                    <h5><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={cIcon} title='C'/>
                                    <h4>C</h4>
                                    <h5><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={cplusIcon} title='C++'/>
                                    <h4>C++</h4>
                                    <h5><FaRegStar/><FaRegStar/></h5>
                                </div>
                                <div className='item'>
                                    <img src={sqlIcon} title='SQL'/>
                                    <h4>SQL</h4>
                                    <h5><FaRegStar/></h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </section>

        

        
    )
}

export const Frontend = () => {
    return (
        <div className='skill-before-box'>
            <h3 className='skills_title'>Frontend Development</h3>
    <div className='skills_content'>
        

        <div className='skills_box'>
            <div className='skills_group'>
                <div className='skills_data'>
                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> HTML</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/><FaRegStar/> Intermediate</span>
                </div>
                </div>

                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> CSS</h3>
                    <span className='skills_level'><FaRegStar/> Basic</span>
                </div>
                </div>

                 <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> JavaScript</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/><FaRegStar/> Intermediate</span>
                </div>
                </div>

                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> React</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/> Advanced</span>
                </div>
                </div>


            <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> Git</h3>
                    <span className='skills_level'><FaRegStar/> Basic</span>
                </div>
                </div>
            </div>
        </div>
    </div> </div>)
}

export const Backend = () => {
    return (
        <div className='skill-before-box'>
            <h3 className='skills_title'>Backend Development</h3>
        <div className='skills_content'>
        
        <div className='skills_box'>
            <div className='skills_group'>
                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> Python</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/><FaRegStar/> Intermediate</span>
                </div>
                </div>

                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> Java</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/><FaRegStar/> Intermediate</span>
                </div>
                </div>

                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> C</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/> Advanced</span>
                </div>
                </div>

                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> C++</h3>
                    <span className='skills_level'><FaRegStar/><FaRegStar/> Advanced</span>
                </div>
                </div>

                <div className='skills_data'>

                <div>
                    <h3 className='skills_name'><BiBadgeCheck/> SQL</h3>
                    <span className='skills_level'><FaRegStar/> Basic</span>
                </div>
                </div>
            </div>

            
        </div>
    </div> 
    </div>
    )
}
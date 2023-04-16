import bootstrap from "../assets/img/logo-bootstrap.png";
import css3 from "../assets/img/logo-css3.png";
import expressjs from "../assets/img/logo-expressjs.png";
import git from "../assets/img/logo-git.png";
import gitlab from "../assets/img/logo-gitlab-ci-cd.png";
import html5 from "../assets/img/logo-html5.png";
import javascript from "../assets/img/logo-javascript.png";
import mongodb from "../assets/img/logo-mongodb.png";
import nodejs from "../assets/img/logo-nodejs.png";
import postman from "../assets/img/logo-postman.png";
import react from "../assets/img/logo-react.png";
import php from "../assets/img/logo-php.png";
import mysql from "../assets/img/logo-mysql.png";
import laravel from "../assets/img/logo-laravel.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Here's how I rate myself regarding my proficiency of the following:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>MERN Stack</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>PHP/MySQL/Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>HTML/CSS/Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tools</h2>
                        <p>Here's the list of tools, frameworks and languages I used with my projects.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>ReactJS</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={expressjs} alt="Image" />
                                <h5>ExpressJS</h5>
                            </div>
                            <div className="item">
                                <img src={mysql} alt="Image" />
                                <h5>MySQL</h5>
                            </div>
                            <div className="item">
                                <img src={nodejs} alt="Image" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                            <div className="item">
                                <img src={html5} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css3} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>GIT command</h5>
                            </div>
                            <div className="item">
                                <img src={gitlab} alt="Image" />
                                <h5>GITLab</h5>
                            </div>
                            <div className="item">
                                <img src={postman} alt="Image" />
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>PHP</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

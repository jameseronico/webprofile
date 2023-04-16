import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import certImg1 from "../assets/img/certificate-img1.png";
import certImg2 from "../assets/img/certificate-img2.png";
import certImg3 from "../assets/img/certificate-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "HTML/CSS/Bootstrap",
      description: "Static Web Design",
      imgUrl: projImg1,
      link: "https://jameseronico.github.io/webportfolio/",
    },
    {
      title: "Front-end design",
      description: "Developing a web from a Figma design",
      imgUrl: projImg2,
      link: "https://jameseronico.github.io/1stproject/#",
    },
    {
      title: "Game e-Commerce site",
      description: "A sample game website",
      imgUrl: projImg3,
      link: "https://e-commerce-mern-ebon.vercel.app/",
    },
  ];

  const certificates = [
    {
      title: "Frontend",
      description: "Certificate of Completion",
      imgUrl: certImg1,
      link: "https://share.zertify.zuitt.co/certificate/903ec411-eb8b-400d-90ed-0de538a594cb/",
    },
    {
      title: "Backend",
      description: "Certificate of Completion",
      imgUrl: certImg2,
      link: "https://share.zertify.zuitt.co/certificate/e1f4c9cf-b420-47c2-b839-adfab060552b/",
    },
    {
      title: "Fullstack",
      description: "Upcoming Certificate of Completion",
      imgUrl:  certImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Certificates</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
                          <ProjectCard key={index} {...project}>
                        <a href={project.link} target="_blank" style={{ display: "block" }}>
                          <img src={project.imgUrl} alt={project.title} />
                          <div style={{ textAlign: "center" }}>View More</div>
                        </a>
                      </ProjectCard>
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
  <Row>
    {certificates.map((certificate, indexs) => (
      <ProjectCard key={indexs} {...certificate}>
        <a href={certificate.link} target="_blank" style={{ display: "block" }}>
          <img src={certificate.imgUrl} alt={certificate.title} />
          <div style={{ textAlign: "center" }}>View More</div>
        </a>
      </ProjectCard>
    ))}
  </Row>
</Tab.Pane>



                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
       
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
      

      
    </section>
   
  )
}

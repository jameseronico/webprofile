
import 'react-multi-carousel/lib/styles.css';


import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const AboutMe = () => {
  

  return (
    <section className="aboutme text-center" id="aboutme">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="aboutme-bx">
                  
		        <img className="img-fluid" src="./assets/img/james.jpg" id="myImage" />
		          
                <p className="text-light">
                A little about me:
                </p>
                <p>Due to my interest in construction, I chose to major in civil engineering in college. After my unfulfilled interest in building infrastructure, I am now looking into web development.
                </p>
                <p>
                My adventure as a developer just got underway, and I'm currently enrolled in <span><a href="https://zuitt.co/" target="_blank">Zuitt's</a></span> web development bootcamp. I therefore have six years of prior work experience in the BPO industry. I've worked as a Dell technician, a marketing service advisor, a Shopify guru, and an email system's technical support.
                </p>
                <p>
                I've developed a passion for web development while studying this field, and I've come to appreciate the art of creating websites like those in this portfolio. I'm now seeking a developer position to finally kick-start my career and learn among professionals.
                </p> 
                <div className="social-icon py-3">
                <p>Connect with me on me social media channels:</p>
                  <a href="https://www.linkedin.com/in/james-marvin-eronico-1a93a5266/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
                  <a href="https://www.facebook.com/james.marvin.921230" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              </div>
          </div>
        </div>		
       </div>
       </div>
    </section>
  )
}

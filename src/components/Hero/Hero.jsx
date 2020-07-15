import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // <video loop muted autoPlay poster="img/videoframe.jpg" className="fullscreen-bg__video">
  // <source src="video/bg.mp4" type="video/mp4" />
  // <source src="https://assets.mixkit.co/videos/preview/mixkit-sun-rays-over-forest-treetops-515-large.mp4" type="video/mp4" />
  // hd https://lh3.googleusercontent.com/FjqufdNxsxsV_xUNmGabh_vsOx4r_VRfBU11lfs2IYLzfRMtR922eAHPn7ZaWzggbm8cxwMpp5cGJj6vG5YKYitSf2P3tjmCPp_DevbpoC0QCeDCb7xXdhhUY1rPEW8a_7X9LS9BTQI=m37
  return (
    <section id="hero" className="jumbotron">
      <div className="fullscreen-bg">
        <video loop muted autoPlay className="fullscreen-bg__video">
          <source src="https://drive.google.com/uc?export=download&id=1Yc8zVbt3pF8lr5AtKXIhlKtQdpnv8Vl-" type="video/mp4" />
        
        

        </video>
      </div>
      <div className="fullscreen-bg-logo">
        <div className="fullscreen-bg__logo" id="logo" />
      </div>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'Hi, my name is'}{' '}
            <span className="text-color-main">{name || 'Your Name'}</span>
            <br />
            {subtitle || "I'm the Unknown Developer."}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;

import React from 'react'
import "./footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <h2 style={{ textAlign: "center", color: "white" }}>Springboard Academy</h2>
                <div className="footerMenu">

                    <div className='fmenuFlex' style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
                        <span>Privacy Policy </span>
                        <span>Terms and Condition  </span>
                    </div>
                    <div className='fmenuFlex' style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
                        <span>Refund Policy </span>
                        <span>Contact Us </span>
                    </div>

                </div>
                <div className="footerIcon" style={{ width: "80vw", margin: "auto",marginBottom:"20px" }}>
                    <div className='icons' style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <span><InstagramIcon /></span>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <span><FacebookIcon /></span>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <span><TwitterIcon /></span>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <span><LinkedInIcon /></span>
                        </a>
                        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                            <span><YouTubeIcon /></span>
                        </a>
                    </div>


                </div>

                <div className="address">
                    <p>Trader Academy</p>
                    <p>Plot A-1 City Center</p>
                    <p>Near Kamal Bazar</p>
                    <p>Jaipur, Rajasthan-303014</p>
                </div>
                <div className="contacts">
                    <span>+91-989899898</span>
                    <span>+91-989899898</span>
                    <span>+91-989899898</span>
                    <span>+91-989899898</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
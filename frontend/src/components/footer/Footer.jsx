import React from 'react';
import "./footer.css";
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <Typography variant="h5">About Me</Typography>
                <Typography>
                    Hey, my name is Ali Hassan, I am a Full-Stack Developer.
                </Typography>
                <Link to="/contact" className="footerContactBtn">
                    <Typography>Contact Us</Typography>
                </Link>
            </div>
            <div>
                <Typography variant="h6">Social Media</Typography>
                <a href="https://github.com/alihassan-here/" target="black">
                    <BsGithub />
                </a>
                <a href="https://instagram.com/eliii_here/" target="black">
                    <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/in/ali-hassan-here/" target="black">
                    <BsLinkedin />
                </a>
                <a href="https://twitter.com/ALIHassanhere" target="black">
                    <BsTwitter />
                </a>
            </div>
        </div>
    )
}

export default Footer;
import React from 'react';
import Spline from '@splinetool/react-spline'; // Import Spline React component
import "../component/Service.css"; // Import custom CSS
import { FaReact, FaHtml5, FaCss3Alt, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGmail } from "react-icons/si";

export default function Service() {
  return (
    <div className="service-container">
      {/* Spline 3D Viewer using React-Spline component */}
      <div className="spline-viewer-container">
        <Spline scene="https://prod.spline.design/pa1nbn7QViOOf3ow/scene.splinecode" />
      </div>

      {/* Freelancer Service Card */}
      <div className="service-card">
        <h2>Monik Verma - Freelance Developer</h2>
        <p>I specialize in front-end development, 3D design, and creating interactive web experiences.</p>

        {/* Service List */}
        <ul>
          <li><FaReact className='i'/>React Developer</li>
          <li><IoLogoJavascript className='j'/>JavaScript</li>
          <li><FaHtml5 className='h'/>HTML</li>
          <li><FaCss3Alt className='c'/>CSS</li>
        </ul>

        {/* Contact Button */}
        <button className="contact-btn">Contact Me</button>
        <h4>or</h4>
        <br />

        {/* Social Media Links */}
        <ul>
          <li><a href="https://www.instagram.com/invites/contact/?igsh=fvs8y71owr9r&utm_content=he33fg9"><FaInstagram className='insta'/>Follow on Instagram</a></li>
          <li><FaFacebook className='face'/>Follow on Facebook</li>
          <li><SiGmail className='gmail'/>Send an Email</li>
        </ul>
      </div>
    </div>
  );
}

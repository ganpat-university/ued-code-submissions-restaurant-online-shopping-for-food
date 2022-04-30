import React from 'react';
import footerimg from '../assests/illman.png';
import './footer.css';

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="combine">
          <div className="container">
            <p className="title">Get In Touch</p>
            <p className="sub">Gandhinagar 382021 , Gujarat , India </p>
            <p className="disc">Phone : 1234567890  |  info@classicchao.com</p>
          </div>
        </div>

        <div className="container2">
          <p className="title2">Opening Hours</p>
          <p className="sub2">Monday - Saturday 11:00 AM - 11:00 PM</p>
          <p className="disc2">Sunday 10:00 AM - 12:00 PM</p>
        </div>

        <img src={footerimg} alt="" />
      
        <div className="footer2">
          <p className="footerr">© Copywrite 2022 , Classic Chao , Designed by Arjun Thakor</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
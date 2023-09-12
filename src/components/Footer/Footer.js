import Image from "next/image";
import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="brand">
          <div>
            <h2>
              Doctor<span className="text-customBlue">BD</span>
            </h2>
            <div>
              <BiSolidPhoneCall></BiSolidPhoneCall> <span>01910803372</span>
            </div>
            <div>
              <GrMail></GrMail> <span>hadirifat100@gmail.com</span>
            </div>
            <div>
              <IoLocationSharp></IoLocationSharp>{" "}
              <span>12-Mirpur, Dhaka-1216</span>
            </div>
          </div>
        </div>

        {/* breaker  */}
        <div>
          <li>About us</li>
          <li>How it works</li>
          <li>For Doctors</li>
          <li>Blog</li>
        </div>
        {/* // breaker  */}
        <div>
          <li>Contact ul</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
          <li>Data Research</li>
          <li>Help</li>
        </div>
        <div>
          <h3>Download our app</h3>
          <div>
            <Image src="/images/applestore.png" width={180} height={50} alt="download on Apple Store"></Image>
            <Image src="/images/playstore.png" width={180} height={50} alt="download on Play Store"></Image>
          </div>
        </div>
        <small>
          Copyright 2023 Doctor<span className="text-customBlue">BD</span>. All
          rights reserved
        </small>
      </div>
    </div>
  );
};

export default Footer;

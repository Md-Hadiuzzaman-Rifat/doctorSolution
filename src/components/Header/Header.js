import Image from "next/image";
import React from "react";
import BoxContainer from "../BoxContainer/BoxContainer";
import "./Header.css"
const Header = () => {
  return (
    <div className="background">
    <div className="container">
      <div className="content">
        {/* navigation start  */}
        <div className="w-full flex flex-row items-center justify-between">
          <div className="logo">
            <h2 className="text-customBlue">DoctorsBD</h2>
          </div>
          <div className="navigation">
            <nav>
              <h3>Navigation</h3>
            </nav>
          </div>
        </div>
        {/* navigation end  */}
        {/* content under navigation start  */}
        <div className="mt-16 flex flex-col items-center">
          <h1 className="mb-10">A Complete Healthy Lifestyle</h1>
          <big>
            <li>24/7 Live Chat With Doctor</li>
            <li>Report, Prescription over Phone</li>
            <li>Find Blood</li>
            <li>Buy Medicine </li>
          </big>
        </div>
        {/* content under navigation end  */}
        {/* services in box Container start */}
        <div className="ServiceBoxes my-16">
          <BoxContainer></BoxContainer>
        </div>
        {/* download App  */}
        <p>
          Download and register on our app for free and feel safe tor your
          family
        </p>
        <div className="downloadApp flex items-center">
          <Image
            className=" cursor-pointer w-[180px] h-fit"
            src="/images/applestore.png"
            width={200}
            height={100}
          ></Image>
          <Image
            src="/images/playstore.png"
            className="w-[180px] h-fit cursor-pointer"
            width={200}
            height={100}
          ></Image>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Header;

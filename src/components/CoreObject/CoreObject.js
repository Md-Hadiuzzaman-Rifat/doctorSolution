import Image from "next/image";
import React from "react";

const CoreObject = () => {
  return (
    <div className="container mt-16">
      <div className="content">
        <div className="flex flex-col md:flex-row-reverse">
          <div>
            <Image
              width={400}
              height={400}
              src="/gif/Online Doctor.gif"
              alt="solution"
            ></Image>
          </div>
          <div>
            <h2>
              When to use <span className="text-customBlue">DoctorBD</span>
            </h2>
            <div>
              <h3>Common health issue</h3>
              <p>
                Ask anything you would normally ask your FP. You can have an
                instant video with one of our FPs via a digital consultation
                from anywhere, at any time of day
              </p>
            </div>
            <div>
              <h3>Specialist advice</h3>
              <p>
                Sometimes its helpful to see a specialist when your want. For gynaecology, child, specialists, dermatology, cardiology, or other conditions, DocTime can help you to connect with the right specialist doctor and to stay healthy.
              </p>
            </div>
            <div>
              <h3>Mental health and wellbeing</h3>
              <p>
                In a fast placed would, it is important to monitor and protect your mental health whether your have symptoms at home or in your workplace of stress, smoking, anxiety, bereavement or depression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreObject;

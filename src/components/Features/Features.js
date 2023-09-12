import Image from "next/image";
import React from "react";

const feature = [
  {
    id: 1,
    img: "/features/doctor_847170.png",
    title: "Verified doctors",
    disc: "Every doctors on Doctors BD platform BMDC certified. We verify  relevant information before the doctor can consult any patient.",
  },
  {
    id: 2,
    img: "/features/video-call_5487946.png",
    title: "Instant video consultation",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information before the doctor can consult any patient.",
  },
  {
    id: 3,
    img: "/features/prescription_1152513.png",
    title: "Instant electronics prescription",
    disc: "As soon as the consultation is complete, doctor will provide the electronic prescription for the patient to download instantly or later.",
  },
  {
    id: 4,
    img: "/features/credit-card_1989125.png",
    title: "Easy payment options",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information befroe the doctor can consult any patient.",
  },
  {
    id: 5,
    img: "/features/coaching_10479974.png",
    title: "Better consultation quality",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information befroe the doctor can consult any patient.",
  },
  {
    id: 6,
    img: "/features/coaching_10479974.png",
    title: "Health history",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information befroe the doctor can consult any patient.",
  },
  {
    id: 7,
    img: "/features/call-center-service_3734873.png",
    title: "Super fast support",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information befroe the doctor can consult any patient.",
  },
  {
    id: 8,
    img: "/features/man_10428594.png",
    title: "Medicine delivered to your doorstep",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information befroe the doctor can consult any patient.",
  },
  {
    id: 9,
    img: "/features/alarm_6753208.png",
    title: "Medicine reminder",
    disc: "Verified doctors on Doctors BD platform BMDC certified. We verify  relevant information befroe the doctor can consult any patient.",
  },
];

const Features = () => {
  return (
    <div className="container">
      <div className="content">
        {feature.map((item) => (
          <div>
            <Image src={item.img} width={70} height={70} alt={item.title}></Image>
            <div>
              <h3>{item.title}</h3>
              <p>{item.disc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

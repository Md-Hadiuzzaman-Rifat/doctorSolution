import React from "react";
import problems from "./problems";
import Image from "next/image";

const page = () => {
  return (
    <div className="container">
      <div className="content">
        <h2>Active doctor list</h2>
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3">
          {problems.map((disease) => (
            <div className="flex flex-col md:flex-row items-center">
                <Image src={disease.image} width={100} height={100}></Image>
              <div>
              <h3 className="text-customBlue">{disease.name}</h3>
              <p>{disease.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

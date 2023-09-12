import ActionBtn from "@/components/ActionBtn/ActionBtn";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="content">
          <div className="flex">
            {/* left side  */}
            <div className="hidden md:flex">
              <Image
                src="/images/hadi.png"
                width={400}
                height={600}
                className="ml-[-20%] h-full w-[600px]" alt="registration form"
              ></Image>
            </div>
            {/* right side start  */}
            <div className="my-12">
              <h2 className="text-customPink mb-12">Doctors Registration </h2>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  name="title"
                  className="inputProp w-full"
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="name"
                  className="inputProp"
                  placeholder="Full Name"
                />
                <input
                  type="email"
                  name="email"
                  className="inputProp"
                  placeholder="Enter Email"
                />
                <input
                  type="text"
                  name="phone"
                  className="inputProp"
                  placeholder="Contact Number"
                />
                <input
                  type="Password"
                  name="password"
                  className="inputProp"
                  placeholder="Enter Password"
                />
                <input
                  type="text"
                  name="nid"
                  className="inputProp"
                  placeholder="Nid Number"
                />
                <input
                  type="text"
                  name="bdmc"
                  className="inputProp"
                  placeholder="Registration Number (BDMC)"
                />
                <div>
                  <input
                    type="checkbox"
                    name="I accept and angree Terms conditions and Privacy Policy"
                  />{" "}
                  <span>
                    I accepted all{" "}
                    <span className="text-customPink">Terms conditions</span>{" "}
                    and <span className="text-customPink">Privacy Policy</span>
                  </span>
                </div>
                <ActionBtn clr="customPink">Register</ActionBtn>
              </form>
            </div>
            {/* right side end   */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

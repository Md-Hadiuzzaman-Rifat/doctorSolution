import React from "react";

const Subscription = () => {
  const subscription = [
    {
      title: "Persnal Care",
      price: 180,
      for: "For 1 adult",
      desc: ["Single Consultancy", "24 hour service"],
    },
    {
      title: "Family Care",
      price: 315,
      for: "For 4 family members",
      desc: ["Unlimited Video Call", "24 hour services"],
    },
    {
      title: "Family Care Premium",
      price: 415,
      for: "For 4 family members",
      desc: ["Unlimited Video Call", "24 hour services"],
    },
  ];

  return (
    <div className="container">
      <div className="content">
        <div className="mt-16">
          <h1>Doctors BD Family and Saving plan</h1>
          <div>
            {subscription.map((item) => (
              <div>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
                <span> /month</span>
                {item.desc.map((item) => (
                  <div>
                    <span className="text-customBlue font-bold">=&gt; </span>{" "}
                    <span className="font-bold">{item}</span>
                  </div>
                ))}
                <button className="blueButton">subscribe now</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;



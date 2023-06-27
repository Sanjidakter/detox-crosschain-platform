import React from "react";
import s1 from "../../../assets/s1.png";
import s2 from "../../../assets/s2.png";

const Transaction = () => {
  return (
    <div className="mt-24 mb-5">
      <div className="flex flex-col lg:flex-row justify-center gap-12">
        <div
          className="card w-96 bg-base-100 shadow-xl"
          style={{
            bordeRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.20)",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <figure>
            <img className="p-3" src={s2} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Transactions per second</h2>
            <p>
              “10-20% of global infrastructure will run on blockchain based
              systems by 2030”
            </p>
          </div>
        </div>
        <div
          className="card w-96  shadow-xl"
          style={{
            bordeRadius: "20px",
            border: "1px solid rgba(255, 255, 255, 0.20)",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <div className="card-body">
            <p>
              “90% of current enterprise blockchain platform implementations
              will require replacement by 2021.”
            </p>
            <h2 className="card-title">Energy Consumption</h2>
          </div>
          <figure>
            <img className="p-3" src={s1} alt="Shoes" />
          </figure>
        </div>
      </div>
      <div className="numbers  flex flex-col mt-8 gap-4 lg:flex-row lg:gap-12 lg:p-24">
        <p className="text-center p-3"
          style={{
            width: "300px",
            height: "80px",
            flexShrink: 0,
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <span className="text-orange-500 font-bold text-3xl">4.6+</span> Blockchain
        </p>
        <p className="text-center p-3"
          style={{
            width: "300px",
            height: "80px",
            flexShrink: 0,
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <span className="text-orange-500 font-bold text-3xl">1700+</span> Visa
        </p>
        <p className="text-center p-3"
          style={{
            width: "300px",
            height: "80px",
            flexShrink: 0,
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.10)",
          }}
        >
          <span className="text-orange-500 font-bold text-3xl">07+</span> Gigawatts
        </p>
        
      </div>
    </div>
  );
};

export default Transaction;

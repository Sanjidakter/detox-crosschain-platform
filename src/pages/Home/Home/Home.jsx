import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home ">
      <div className="text-center text-white">
        <label
          style={{
            display: "inline-flex",
            padding: "10px 20px",
            alignItems: "flex-start",
            gap: "10px",
            borderRadius: "100px",
            background: " rgba(255, 255, 255, 0.10)",
          }}
          className="mt-6 mb-6 border-orange-500"
        >
          🔥 Powered by Graphchain tech
        </label>
        <div
          style={{
           
          }}
        >
           <h2 className="landing-title ">
          Lybell GC is fast,
          <br /> scalable, robust, green and <br /> cross-chain
        </h2>
        <p className=" mt-6">
          By allowing a DAG of data instead of a rigid Blockchain we include all
          users in every <br /> transaction..? something about whatactually
          happens here
        </p>
        </div>
       
        <button
          className="p-3 mt-5"
          style={{
            borderRadius: "10px",
            background: "var(--primery-color, #F95B27)",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;

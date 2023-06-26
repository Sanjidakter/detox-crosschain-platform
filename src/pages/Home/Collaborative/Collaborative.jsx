import React from "react";
import t1 from "../../../assets/t1.png";
import "./Collaborative.css";
import bg from "../../../assets/bg.svg";
import fast from "../../../assets/fast.svg";
import scalable from "../../../assets/scalable.svg";
import robust from "../../../assets/scalable.svg";
import green from "../../../assets/green.svg";
import cross from "../../../assets/cross.svg";
import acess from "../../../assets/acess.svg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faLeaf);

const Collaborative = () => {
  const bgstyle = {
    backgroundImage: `url(${bg})`,
    width: "151.376px",
    height: "151.386px",
  };
  return (
    <div className="p-16 text-center text-white">
      <h2 className="third-title">
        Lybell is collaborative, decentralized <br /> & efficient
      </h2>
      <p>Lybell provides decentralized cross-chain collaborative consensus</p>
      <div className="flex flex-col lg:flex-row gap-16 mt-8">
        <div className="text-start ">
          <div className="text-box">
            <h2 className="text-2xl font-bold">Graphchain</h2>
            <p className="mt-3">
              Partial ordering Real-time updates No need for mining pools Scales
              with demand
              <br />
              <br />
              By allowing a DAG of data instead of a rigid Blockchain we include
              all users in every transaction..? something about what actually
              happens here
            </p>
          </div>
          <div className="text-box">
            <h2 className="text-2xl font-bold">Blockchain</h2>
            <p className="mt-4">
              Linear ordering Periodic updates Mining pools Scales via forks and
              updates <br />
              <br />
              By allowing a DAG of data instead of a rigid Blockchain we include
              all users in every transaction..? something about whatactually
              happens here
            </p>
          </div>
        </div>

        <div
          style={{
            borderRadius: "30px",
            background: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <img className="p-5" src={t1} alt="" />
        </div>
      </div>
      {/* icons */}
      <div class="mt-20 flex flex-wrap justify-center gap-[50px]">
  <div class="flex flex-col items-center mb-10">
    <img class="border p-8 rounded-full h-[100px] w-[100px] object-cover" src={fast} alt="" />
    <h2 class="text-[32px] font-semibold mt-6 flex justify-center">
      Fast
    </h2>
  </div>
  <div class="flex flex-col items-center mb-10">
    <img class="border p-8 rounded-full h-[100px] w-[100px] object-cover" src={scalable} alt="" />
    <h2 class="text-[32px] font-semibold mt-6 flex justify-center">
      Scalable
    </h2>
  </div>
  <div class="flex flex-col items-center mb-10">
    <img class="border p-8 rounded-full h-[100px] w-[100px] object-cover" src={robust} alt="" />
    <h2 class="text-[32px] font-semibold mt-6 flex justify-center">
      Robust
    </h2>
  </div>
  <div class="flex flex-col items-center mb-10">
    <img class="border p-8 rounded-full h-[100px] w-[100px] object-cover" src={green} alt="" />
    <h2 class="text-[32px] font-semibold mt-6 flex justify-center">
      Green
    </h2>
  </div>
  <div class="flex flex-col items-center mb-10">
    <img class="border p-8 rounded-full h-[100px] w-[100px] object-cover" src={cross} alt="" />
    <h2 class="text-[32px] font-semibold mt-6 flex justify-center">
      Cross Chain
    </h2>
  </div>
  <div class="flex flex-col items-center mb-10">
    <img class="border p-8 rounded-full h-[100px] w-[100px] object-cover" src={acess} alt="" />
    <h2 class="text-[32px] font-semibold mt-6 flex justify-center">
      Accessible
    </h2>
  </div>
</div>


    </div>
  );
};

export default Collaborative;

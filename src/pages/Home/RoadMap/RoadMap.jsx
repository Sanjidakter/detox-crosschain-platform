import React from "react";
import map from "../../../assets/roadmap.png";
import union from "../../../assets/Union.png";
import stick from "../../../assets/stick.png";
import stick2 from "../../../assets/stick2.png";

const RoadMap = () => {
  return (
    <div className=" p-8 lg:p-16 text-white text-center mt-12">
      <h2 className="text-3xl font-bold">
        Lybell <br />
        Launch Roadmap
      </h2>
      <p
        style={{
          background:
            "background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);",
        }}
        className="mt- 6 lg:ml-32 lg:mr-32"
      >
        Maecenas condimentum bibendum efficitur. Phasellus leo orci, tincidunt
        at egestas ut, ultricies sit amet libero. Suspendisse vel auctor quam,
        accumsan feugiat arcu. In a justo magna.
      </p>
      {/* <img className="mt-12 ml-32" src={map} alt="" /> */}

      {/* map */}
      <div className="hidden lg:flex lg:p-12">
        <div className="w-1/2 mt-24 text-right">
          <h2 className="text-2xl mb-2 font-bold">Phase 01</h2>
          <p>
            Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla.
            Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened
            malesuada.
          </p>
          <div className="relative">
            <img className="ml-64 mt-28" src={union} alt="" />
            <p
              style={{ left: "66%" }}
              className="absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
            >
              JUNE <br />
              2023
            </p>
          </div>
          <h2 className="text-2xl mb-2 font-bold mt-16">Phase 03</h2>
          <p>
            Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla.
            Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened
            malesuada.
          </p>
          <div className="relative">
            <img className="ml-64 mt-32" src={union} alt="" />
            <p
              style={{ left: "66%" }}
              className="absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
            >
              JUNE <br />
              2023
            </p>
          </div>
          <h2 className="text-2xl mb-2 font-bold mt-20">Phase 05</h2>
          <p>
            Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla.
            Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened
            malesuada.
          </p>
          <div className="relative">
            <img className="ml-64 mt-32" src={union} alt="" />
            <p
              style={{ left: "66%" }}
              className="absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
            >
              JUNE <br />
              2023
            </p>
          </div>
        </div>
        <div>
          <img src={stick} alt="" />
        </div>
        <div className="w-1/2 mt-20 text-left">
          <div className="relative">
            <img className=" transform rotate-180" src={union} alt="" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="text-white text-2xl font-bold mr-60">
                JAN <br />
                2023
              </span>
            </div>
          </div>

          <h2 className="text-2xl mb-2 font-bold mt-20">Phase 02</h2>
          <p>
            Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla.
            Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened
            malesuada.
          </p>
          <div className="relative mt-24">
            <img className=" transform rotate-180" src={union} alt="" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="text-white text-2xl font-bold mr-60">
                JAN <br />
                2023
              </span>
            </div>
          </div>
          <h2 className="text-2xl mb-2 font-bold mt-16">Phase 04</h2>
          <p>
            Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla.
            Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened
            malesuada.
          </p>
          <div className="relative mt-36">
            <img className=" transform rotate-180" src={union} alt="" />
            <div className="absolute inset-0 flex items-center justify-center ">
              <span className="text-white text-2xl font-bold mr-60">
                JAN <br />
                2023
              </span>
            </div>
          </div>
          <h2 className="text-2xl mb-2 font-bold mt-28">Phase 06</h2>
          <p>
            Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla.
            Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened
            malesuada.
          </p>
        </div>
      </div>
      {/* for m-s screen */}
      <div className="flex mt-12 lg:hidden">
  <div className="w-1/2 text-right">
    <div className="relative">
      <img className="ml-32 mt-24 lg:ml-0" src={union} alt="" />
      <p
        style={{ left: "56%" }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
      >
        JUNE <br />
        2023
      </p>
    </div>
    <div className="relative mt-4">
      <img className="ml-32 lg:ml-0" src={union} alt="" />
      <p
        style={{ left: "56%" }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
      >
        JUNE <br />
        2023
      </p>
    </div>
    <div className="relative mt-4">
      <img className="ml-32 lg:ml-0" src={union} alt="" />
      <p
        style={{ left: "56%" }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
      >
        JUNE <br />
        2023
      </p>
    </div>
    <div className="relative mt-6">
      <img className="ml-32 lg:ml-0" src={union} alt="" />
      <p
        style={{ left: "56%" }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
      >
        JUNE <br />
        2023
      </p>
    </div>
    <div className="relative mb-24 mt-6">
      <img className="ml-32 lg:ml-0" src={union} alt="" />
      <p
        style={{ left: "56%" }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
      >
        JUNE <br />
        2023
      </p>
    </div>
    <div className="relative">
      <img className="ml-32 lg:ml-0" src={union} alt="" />
      <p
        style={{ left: "56%" }}
        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold text-center"
      >
        JUNE <br />
        2023
      </p>
    </div>
  </div>
  <div>
    <img className="mr-6 mt-8" src={stick2} alt="" />
  </div>
  <div className="w-1/2 mt-8 text-left mr-12">
    <h2 className="text-2xl mb-2 font-bold">Phase 01</h2>
    <p>
      Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.
    </p>
    <h2 className="text-2xl mb-2 font-bold mt-20">Phase 02</h2>
    <p>
      Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.
    </p>
    <h2 className="text-2xl mb-2 font-bold mt-16">Phase 03</h2>
    <p>
      Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.
    </p>
    <h2 className="text-2xl mb-2 font-bold mt-16">Phase 04</h2>
    <p>
      Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.
    </p>
    <h2 className="text-2xl mb-2 font-bold mt-20">Phase 05</h2>
    <p>
      Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.
    </p>
    <h2 className="text-2xl mb-2 font-bold mt-16">Phase 06</h2>
    <p>
      Vivamus risus tortor, pharetra at mollis in, lacinia quis nulla. Donec diam tellus, porta vel arcu ac, condimentum finibus sapiened malesuada.
    </p>
  </div>
</div>


    </div>
  );
};

export default RoadMap;

import React from "react";
import map from "../../../assets/roadmap.png"

const RoadMap = () => {
  return (
    <div className="p-16 text-white text-center mt-12">
      <h2 className="text-3xl font-bold">
        Lybell <br />
        Launch Roadmap
      </h2>
      <p className="ml-32 mr-32">
        Maecenas condimentum bibendum efficitur. Phasellus leo orci, tincidunt
        at egestas ut, ultricies sit amet libero. Suspendisse vel auctor quam,
        accumsan feugiat arcu. In a justo magna.
      </p>
      <img className="mt-12 ml-32" src={map} alt="" />
    </div>
  );
};

export default RoadMap;

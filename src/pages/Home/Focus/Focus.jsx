import React, { useRef, useState } from "react";
import a1 from "../../../assets/a1.png"
import a2 from "../../../assets/a2.png"
import a3 from "../../../assets/a3.png"
import "./Focus"

// slider
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import required modules
import { EffectCube, Pagination } from "swiper";


const Focus = () => {
  const cardContainerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const scrollLeft = () => {
    if (currentSlide > 0) {
      cardContainerRef.current.scrollBy({
        left: -300, // Adjust the scroll value as needed
        behavior: 'smooth',
      });
      setCurrentSlide(currentSlide - 1);
    }
  };

  const scrollRight = () => {
    if (currentSlide < 2) {
      cardContainerRef.current.scrollBy({
        left: 300, // Adjust the scroll value as needed
        behavior: 'smooth',
      });
      setCurrentSlide(currentSlide + 1);
    }
  };
  return (
    <>
    <h2 className="text-4xl text-white ml-20 font-bold">Application Focus</h2>
    <div className=" arrow-buttons absolute right-80 mt-2 mr-16 mb-3">
        <button className=" arrow-button left-button text-6xl" onClick={scrollLeft}>
          &#8249;
        </button>
        <button className="arrow-button right-button text-6xl " onClick={scrollRight}>
          &#8250;
        </button>
      </div>
   
    <div className="hidden md:flex p-12 gap-6 mt-6">
      
      <div className="card w-96 shadow-xl">
        <figure>
          <img
          className="p-4"
            src={a1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          B2B, B2C, C2C, P2P
            
          </h2>
          <p>The platform is designed to allow users to transact between phone and email systems. Using legacy</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
      <div className="card w-96 shadow-xl">
        <figure>
          <img
          className="p-4"
            src={a2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Digital first focus
            
          </h2>
          <p>The platform is designed to allow users to transact between phone and email systems. Using legacy</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
      <div className="card w-96 shadow-xl">
        <figure>
          <img
          className="p-4"
            src={a3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Ease of use
           
          </h2>
          <p>The platform is designed to allow users to transact between phone and email systems. Using legacy</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
    </div>
    <div  className="lg:hidden ml-10">
    <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card w-96 shadow-xl">
        <figure>
          <img
          className="p-4"
            src={a1}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          B2B, B2C, C2C, P2P
            
          </h2>
          <p>The platform is designed to allow users to transact between phone and email systems. Using legacy</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-96 shadow-xl">
        <figure>
          <img
          className="p-4"
            src={a2}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Digital first focus
            
          </h2>
          <p>The platform is designed to allow users to transact between phone and email systems. Using legacy</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card w-96 shadow-xl">
        <figure>
          <img
          className="p-4"
            src={a3}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          Ease of use
            
          </h2>
          <p>The platform is designed to allow users to transact between phone and email systems. Using legacy</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
   
    </>
  );
};

export default Focus;

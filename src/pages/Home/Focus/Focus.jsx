import React from "react";
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
  return (
    <>
    <div className="hidden md:flex p-12 gap-6">
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
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions ">
            <div className="badge badge-outline">Read More</div>
            
          </div>
        </div>
      </div>
    </div>
    <div  className="lg:hidden ml-36">
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
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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
            Shoes!
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
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

import React from "react";

export function Portfolio() {
  return (
    <>
      <div className=" Portfolio container mx-auto text-center text-[#2c3e50]">
       <div className="title mt-4">
       <h1 className="text-center">PORTFOLIO COMPONENT</h1>
        <div className="lines flex justify-center items-center my-3 ">
          <div className="portfolio-line"></div>
          <i className="fa-solid fa-star px-3"></i>
          <div className=" portfolio-line"></div>
        </div>
       </div>
        <div className="row flex flex-wrap g-5 my-14">
          <div className="col-md-4 m-5">
            <div className="item w-[400px] h-[288px]">
              <img className="w-full" src="/src/assets/imgs/poert1.png" alt="logo.png" />
              <div className="layer flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-5">
            <div className="item w-[400px] h-[288px]">
              <img className="w-full" src="/src/assets/imgs/port2.png" alt="logo.png" />
              <div className="layer flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-5">
            <div className="item w-[400px] h-[288px]">
              <img className="w-full" src="/src/assets/imgs/port3.png" alt="logo.png" />
              <div className="layer flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-5">
            <div className="item w-[400px] h-[288px]">
              <img className="w-full" src="/src/assets/imgs/poert1.png" alt="logo.png" />
              <div className="layer flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-5">
            <div className="item w-[400px] h-[288px]">
              <img className="w-full" src="/src/assets/imgs/port2.png" alt="logo.png" />
              <div className="layer flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4 m-5">
            <div className="item w-[400px] h-[288px]">
              <img className="w-full" src="/src/assets/imgs/port3.png" alt="logo.png" />
              <div className="layer flex justify-center items-center">
                <i className="fa-solid fa-plus fa-6x text-white"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

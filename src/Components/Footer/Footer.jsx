import React from "react";

export function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container mx-auto">
          <div className="row flex justify-between items-center">
            <div className="col-md-4 w-[33.33%] text-center">
              <div className="content">
                <h2>LOCATION</h2>
                <p className="mt-1 mb-3 fw-normal">2215 John Daniel Drive</p>
                <p className="fw-normal">Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4 w-[33.33%] text-center">
              <div className="content">
                <h2>AROUND THE WEB</h2>
                <ul className="flex justify-center items-center m-0 mt-3 links">
                  <li>
                    <i className="fa-brands fa-facebook"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-twitter"></i>
                  </li>
                  <li>
                    <i className="fa-brands fa-linkedin-in"></i>
                  </li>
                  <li>
                    <i className="fa-solid fa-globe"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 w-[33.33%] text-center">
              <div className="content">
                <h2>ABOUT FREELANCER</h2>
                <p>
                  Freelance is a free to use, licensed Bootstrap theme created
                  by Route
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-caption bg-[#1a252f] pt-4 pb-6 ">
          <div className="container mx-auto w-[90%] text-center flex justify-center flex-col items-center">
            <p className="text-center">Copyright © Your Website 2021</p>
          </div>
        </div>
    </>
  );
}

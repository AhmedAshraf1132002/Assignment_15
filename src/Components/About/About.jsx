import React from "react";

export function About() {
  return (
    <>
      <div className="about text-white bg-[#1abc9c] flex  justify-center items-center">
        <div className="container mx-auto   my-auto">
          <h1 className="text-center">ABOUT COMPONENT</h1>
          <div className="lines flex justify-center items-center my-3">
            <div className="line"></div>
            <i className="fa-solid fa-star px-3"></i>
            <div className="line"></div>
          </div>
          <div className="row flex justify-center align-items-center ">
            <div className="col-md-6">
              <p className="mx-3">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-md-6">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

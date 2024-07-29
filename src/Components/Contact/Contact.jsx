import React from 'react'

export function Contact() {
  return (
    <>
     <div className=" Contact container  mx-auto text-center">
     <div className="title mt-4">
       <h1 className="text-center text-[#2c3e50]">CONTACT COMPONENT</h1>
        <div className="lines flex justify-center items-center my-3 ">
          <div className="Contact-line"></div>
          <i className="fa-solid fa-star px-3 text-[#2c3e50]"></i>
          <div className="Contact-line"></div>
        </div>
       </div>
       <div className="form my-10 w-50 p-3 mx-auto flex justify-center items-center">
        <form> 
          <label htmlFor="userName" className='text-[#1abc9ce6] mx-4'>userName</label>
          <input type="text" placeholder='userName'id='userName' required/>

          <label htmlFor="userAge" className='text-[#1abc9ce6] mx-4'>userAge</label>
          <input type="number" placeholder='userAge'id='userAge' required/>

          <label htmlFor="userEmail" className='text-[#1abc9ce6] mx-4'>userEmail</label>
          <input type="email" placeholder='userEmail'id='userEmail' required/>

          <label htmlFor="userPassword" className='text-[#1abc9ce6] mx-4'>userPassword</label>
          <input type="password" placeholder='userPassword'id='userPassword' required/>

           <button>sendmessage</button>
        </form>
       </div>
     </div>
    </>
  )
}

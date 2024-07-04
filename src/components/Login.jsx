import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

  const [isSignUp, setSignUp]= useState(false)

  const handleSignUp = ()=>{
    setSignUp(!isSignUp)
  }

  return (
    <div className=" h-screen relative bg-[#0000007d]">
      <div className="">
        <Header />
      </div>
      <img
        alt="background-img"
        aria-hidden="true"
        data-uia="nmhp-card-hero+background+image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        srcset="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
        class="default-ltr-cache-1jxs5rh e13sg9vu0"
        className="absolute z-[-2]"
      ></img>

      <div className="pt-32 w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border border-black bg-[#00000081] p-10 gap-6 text-white w-96 rounded-md">
          <h1 className="text-2xl font-bold">
            {" "}
            {isSignUp ? "Sign Up" : "Sign In"}
          </h1>

          <form action="submit" className="flex flex-col gap-6">
            {isSignUp ? (
              <input
                required
                type="text"
                placeholder="Name"
                className="p-4 rounded-md outline-none text-white  bg-[#28282B]"
              />
            ) : (
              ""
            )}
            <input
              required
              type="email"
              placeholder="Email"
              className="p-4 rounded-md outline-none text-white  bg-[#28282B]"
            />
            <input
              required
              type="password"
              placeholder="Password"
              className="p-4 rounded-md outline-none text-white bg-[#28282B]"
            />
            <button className="bg-[#E50914] p-4 ">
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
            <p>
              {isSignUp ? "Already have account?" : "New to Netflix?"}
              <span
                className="text-[#E50914] cursor-pointer pl-2"
                onClick={handleSignUp}
              >
                {isSignUp ? "Log in" : "Sign Up Now"}
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

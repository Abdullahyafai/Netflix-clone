import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Header from "./Header";
import tv from "../Images/tv.png";
import tvvid from "../Images/video-tv-0819.mp4";

const Home = () => {
  return (
    <>
      <section className="bg-image">
        <div className="bg">
          <Header />
          <div className="heading d-flex justify-content-center align-items-center h-89vh flex-column">
            {/* <h4 className="text-white">Welcome Back !</h4> */}
            <h1 className="text-white fw-bolder text-center heading">
              Unlimited movies, TV <br />
              shows, and more.
            </h1>
            <h4 className="text-white mb-3">Watch anywhere. Cancel anytime.</h4>
            {/* <br/> */}
            <h5 className="text-white mt-3">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h5>
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control rounded-0"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput ">Email address</label>
              <button className="btn-red get_start ">
                Get Started
                <span>
                  <IoIosArrowForward className="mb-1" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr className="seprate" />
      <section className="bg-black h-50">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="w-42%">
              <h1 className="text-white">Enjoy on your TV.</h1>
              <h4 className="text-white">
                Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                Blu-ray players, and more.
              </h4>
            </div>
            <div className="">
              <img src={tv} alt=""  width="90%" />
              <video loop autoPlay muted controls className="vid">
                <source src={tvvid} />
              </video>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

import React from "react";

const Banner = () => {
  return (
    <div
      className="hero mt-14 min-h-screen overflow-clip rounded-3xl"
      style={{
        backgroundImage: "url(/images/cooking.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="w-full lg:w-4/5">
          <h1 className="lexend mb-6 text-2xl md:text-3xl leading-9 md:leading-12 font-bold text-[#fff] lg:text-5xl lg:leading-20">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="lexend leading-normal lg:leading-8 mb-6 text-lg text-[#fff]">
            Step into the world of cooking where every ingredient tells a story.
            From simple weeknight meals to flavorful feasts, ignite your passion
            for food and make every dish unforgettable.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-5 ">
            <button className="btn btn-primary text-[#150b3b] lexend font-semibold text-xl bg-[#0be58a] py-5 px-8">Explore Now</button>
            <button className="btn btn-primary py-5 px-8 lexend font-semibold text-xl text-[#fff] bg-transparent">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

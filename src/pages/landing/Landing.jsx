import React from "react";
import { Button, Footer, Navbar } from "../../components";
import LandingImage from "../../assests/landing-image.png";
import { buttonTypes } from "../../utils";
import { ChevronRightIcon } from "../../components";

const Landing = () => {
  return (
    <div className="relative">
      <Navbar />

      <div className="w-full flex flex-col items-center pb-14">
        <div className="w-2/3 flex flex-col gap-20 ">
          <div className="w-full mt-28 flex items-center flex-col font-primary text-mint gap-5">
            <div>
              <h2 className="font-bold text-7xl pb-4 text-center">
                Build your digital identity
              </h2>
              <p className="text-2xl flex flex-col items-center text-centerr">
                <span className="opacity-70">
                  Make a statement with your captivating{" "}
                </span>
                <span className="text-mintExtreme opacity-100">
                  online presence.
                </span>
              </p>
            </div>
            <Button
              className="flex items-center gap-1 justify-between"
              type={buttonTypes.SPECIAL}
            >
              Start Building <ChevronRightIcon />
            </Button>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden p-3 bg-mintExtreme bg-opacity-30 shadow-primary select-none w-[85%] m-auto">
            <div className="absolute top-0 left-0 w-full h-full bg-mintExtreme z-10 mix-blend-multiply"></div>
            <img
              className="relative rounded-[1.5rem]"
              src={LandingImage}
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Landing;

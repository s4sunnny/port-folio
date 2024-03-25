import CountUp from "react-countup";
import Experience from "../Utils/Experience";

// import React from "react";
export function Home() {
  return (
    <>
      <div className="px-56 py-10">
        <div className="grid border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3 bg-white dark:bg-gray-800">
          <figure className="flex flex-col items-center justify-center p-5 text-center bg-white border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mid-content">
              <CountUp start={0} end={Number(Experience())} duration={5} />+
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <span className="text-black font-extrabold">
                Year's of experience as a Software developer
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-5 text-center bg-white border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mid-content">
              <CountUp start={0} end={6} duration={5} />+
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <span className="text-black font-extrabold">
                Personal projects I've developed so far and still more to be
                developed.
              </span>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center p-5 text-center bg-white border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
            <blockquote className="mid-content">
              <CountUp start={0} end={11} duration={5} />+
            </blockquote>
            <figcaption className="flex items-center justify-center ">
              <span className="text-black font-extrabold">Base skill I've</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
}

/* <div className="h-full mx-auto mb-20">
      <div className="flex mx-auto justify-between w-5/6 ">
        <div className="">
          <div className="w-full my-8 items-center">
            <p className="text-3xl text-white px-20 py-20">
              Yay! you found my profile 😉...
            </p>
            <IntroText />
          </div>
          <div className="items-center my-8">
            <img
              src={"src/assets/images/sticker.png"}
              className="ml-20 max-w-lg rounded-lg profileImg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div> */

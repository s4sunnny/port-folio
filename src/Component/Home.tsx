// import React from "react";
import { IntroText } from "./IntroText";
export function Home() {
  return (
    <>
      <div className="max-w-8xl mx-auto mb-20">
        <div className="flex mx-auto justify-between w-5/6 ">
          <div className="columns-2">
            <div className="w-full my-8 items-center">
              <p className="text-3xl px-20 py-20">
                Yay! you found my profile 😉...
              </p>
              <IntroText />
            </div>
            <div className="items-center my-8">
              <img
                src="src\assets\sticker.png"
                className="ml-20 h-42 max-w-lg transition-all duration-300 rounded-lg filter grayscale hover:grayscale-0"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

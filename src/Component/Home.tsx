// import React from "react";
import { IntroText } from "./IntroText";
export function Home() {
  return (
    <div className="h-full mx-auto mb-20">
      <div className="flex mx-auto justify-between w-5/6 ">
        <div className="columns-2">
          <div className="w-full my-8 items-center">
            <p className="text-3xl text-white px-20 py-20">
              Yay! you found my profile 😉...
            </p>
            <IntroText />
          </div>
          <div className="items-center my-8">
            <img
              src="src\assets\sticker.png"
              className="ml-20 h-41 max-w-lg rounded-lg profileImg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

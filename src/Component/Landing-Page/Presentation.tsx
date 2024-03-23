// import React from "react";

import { Experiences } from "../Pages/Experiences";
import { Home } from "../Pages/Home";

function Presentation() {
  return (
    <div
      className="block bg-gradient-to-r from-indigo-100 via-grey-100 to-black border rounded-lg shadow"
      style={{ width: "96%" }}
    >
      <Home />
      <Experiences />
    </div>
  );
}

export default Presentation;

import { useState } from "react";
import { MoonIcon, SunIcon, Bars3Icon } from "@heroicons/react/24/outline";

export function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app">
      <nav>
        <div className="max-w-8xl mx-auto">
          <div className="flex mx-auto justify-between w-5/6 ">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-7">
              {/* logo */}
              <div>
                <a
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <span className="text-3xl text-white">
                    Sunny Pandey- Full stack developer
                  </span>
                </a>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-8 ">
                <a href="#" className="text-xl text-white">
                  Home
                </a>
                <a href="#" className="text-xl text-white">
                  About
                </a>
                <a href="#" className="text-xl text-white">
                  Experience
                </a>
                <a href="#" className="text-xl text-white">
                  Skills
                </a>
                <a href="#" className="text-xl text-white">
                  Projects
                </a>
                <a href="#" className="text-xl text-white">
                  Social links
                </a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div>
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <Bars3Icon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="border-l-4 border-gray-600">
                Home
              </a>
              <a href="#">About</a>
              <a href="#">Experience</a>
              <a href="#">Skills</a>
              <a href="#">Projects</a>
              <a href="#">Social links</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

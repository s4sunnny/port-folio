import { useState } from "react";
import { Routes } from "../../Routes";
// import { Bars3Icon } from "@heroicons/react/24/outline";

export function Nav() {
  // const [toggleMenu, setToggleMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="mt-3 w-11/12">
      <nav className="bg-gray-200 drop-shadow-2xl h-14 rounded-3xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-15 px-4">
          <div className="flex-shrink-0 font-bold tracking-wider">
            Sunny Pandey - Full stack developer
          </div>
          <div className="hidden md:block">
            <Routes />
          </div>
          <button
            type="button"
            className="md:hidden bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div className="md:hidden">{showMobileMenu && <Routes />}</div>
      </nav>
    </div>
  );
}

/* <nav>
        <div className="flex mx-auto justify-between w-5/6 ">
          <div className="flex items-center gap-16 my-7">
            <div>
              <a
                href="/"
                className="no-underline	flex gap-1 font-bold text-gray-700 items-center "
              >
                <span className="text-3xl text-white">
                  Sunny Pandey- Full stack developer
                </span>
              </a>
            </div>
            <div className="hidden lg:flex gap-8 ">
              <a href="#" className="no-underline	text-xl text-white">
                Home
              </a>
              <a href="#" className="no-underline	text-xl text-white">
                About
              </a>
              <a href="#" className="no-underline	text-xl text-white">
                Experience
              </a>
              <a href="#" className="no-underline	text-xl text-white">
                Skills
              </a>
              <a href="#" className="no-underline	text-xl text-white">
                Projects
              </a>
              <a href="#" className="no-underline	text-xl text-white">
                Social links
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="lg:hidden flex items-center">
              <button onClick={() => setToggleMenu(!toggleMenu)}>
                <Bars3Icon className="h-6" />
              </button>
            </div>
          </div>
        </div>
        <div
          className={`fixed z-40 w-full overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#" className="drop-shadow-2xl border-gray-600">
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
      </nav> */

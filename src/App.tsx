import { Nav } from "./Component/Navbar-Page/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { IntroText } from "./Component/Utils/IntroText";
// import { Experiences } from "./Component/Pages/Experiences";
import Skills from "./Component/Pages/Skills";
import { Home } from "./Component/Pages/Home";
function App() {
  // const homeRef = useRef(null);
  // const experienceRef = useRef(null);
  return (
    <>
      <div
        style={{ top: "0", zIndex: "10" }}
        className="sticky opacity-90 flex items-center justify-center"
      >
        <Nav />
      </div>
      <figure style={{ marginTop: "-75px" }}>
        <img src={"/images/homeImage.jpeg"} alt="image description" />
        <figcaption
          style={{ top: "25%", marginLeft: "7%", fontWeight: "bolder" }}
          className="absolute text-3xl text-white"
        >
          <a
            className="hidden md:block no-underline text-white"
            target="_blank"
            href="https://instagram.com/s4sunny___"
          >
            <button className="border h-max w-max flex gap-2 justify-center items-center rounded-md outline-0 disabled:pointer-events-none disbaled:cursor-not-allowed font-semibold text-xs py-2 px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="hidden md:block">Follow me on Instagram</span>
            </button>
          </a>
        </figcaption>
        <figcaption
          style={{
            top: "20%",
            right: "10%",
            fontWeight: "bolder",
            maxWidth: "30%",
          }}
          className="absolute text-3xl text-white"
        >
          <IntroText />
        </figcaption>
      </figure>
      <div className="presentation">
        <Home />
        {/* <Experiences /> */}
        <Skills />
      </div>
    </>
  );
}

export default App;

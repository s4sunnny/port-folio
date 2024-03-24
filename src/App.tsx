import { Fragment } from "react";
import { Nav } from "./Component/Navbar-Page/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Presentation from "./Component/Landing-Page/Presentation";
import { IntroText } from "./Component/Utils/IntroText";
import { Experiences } from "./Component/Pages/Experiences";
function App() {
  // const homeRef = useRef(null);
  // const experienceRef = useRef(null);
  return (
    <>
      <Fragment>
        <div
          style={{ top: "0", zIndex: "10" }}
          className="sticky opacity-90 flex items-center justify-center"
        >
          <Nav />
        </div>
        <figure style={{ marginTop: "-75px" }}>
          <img src={"/images/homeImage.jpeg"} alt="image description" />
          <figcaption
            style={{ top: "15%", marginLeft: "4%", fontWeight: "bolder" }}
            className="absolute text-3xl text-white"
          >
            <p>Yay! you found my profile 😉...</p>
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
          <Presentation />
          <Experiences />
        </div>
      </Fragment>
    </>
  );
}

export default App;

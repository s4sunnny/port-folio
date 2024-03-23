import { Fragment } from "react";
import { Nav } from "./Component/Navbar-Page/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Presentation from "./Component/Landing-Page/Presentation";
function App() {
  // const homeRef = useRef(null);
  // const experienceRef = useRef(null);
  return (
    <>
      <Fragment>
        <div className="sticky top-0 z-50 opacity-90 flex items-center justify-center">
          <Nav />
        </div>
        <div className="flex items-center justify-center">
          <Presentation />
        </div>
      </Fragment>
    </>
  );
}

export default App;

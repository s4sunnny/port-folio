import { Fragment } from "react";
import { Experiences } from "./Component/Experiences";
import { Home } from "./Component/Home";
import { Nav } from "./Component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  // const homeRef = useRef(null);
  // const experienceRef = useRef(null);
  return (
    <>
      <Fragment>
        <Nav />
        <Home />
        <Experiences />
      </Fragment>
    </>
  );
}

export default App;

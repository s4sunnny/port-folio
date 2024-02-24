import { Experiences } from "./Component/Experiences";
import { Home } from "./Component/Home";
import { Nav } from "./Component/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <div className="app">
        <Nav />
        <Home />
        <Experiences />
      </div>
    </>
  );
}

export default App;

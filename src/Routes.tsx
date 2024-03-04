// import Icon from "@mui/material/Icon";
import { About } from "./Component/About";
import { Experiences } from "./Component/Experiences";
import { Home } from "./Component/Home";

const routes = [
  {
    name: "Home",
    route: "/Component/Home",
    component: <Home />,
  },
  {
    name: "About",
    route: "/Component/About",
    component: <About />,
  },
  {
    name: "Experience",
    route: "/Component/Experiences",
    component: <Experiences />,
  },
  {
    name: "Skills",
    route: "/Component/Home",
    component: <Home />,
  },
  {
    name: "Projects",
    route: "/Component/Home",
    component: <Home />,
  },
  {
    name: "Social Links",
    route: "/Component/Home",
    component: <Home />,
  },
];

export default routes;

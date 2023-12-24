import App from "../App";
import ConcurrentComponent from "../pages/concurrentMode";
import ImgResponsive from "../pages/imgResponsive";

export const routes = [
  {
    path: "/",
    element: <App />,
    id: "home",
  },
  {
    path: "/concurrent",
    element: <ConcurrentComponent />,
    id: "concurrent-mode",
  },
  {
    path: "/srcset",
    element: <ImgResponsive />,
    id: "img-responsive",
  },
];

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomepageMain from "../pages/homepage/HomepageMain";
import About from "../pages/about/About";
import Contact from "../components/Contact";
import Project from "../pages/projects/Project";
import Credentials from "../pages/credentials/Credentials";
import MyServices from "../pages/MyServices";
import ProjectDetail from "../pages/projects/ProjectDetail";
import BlogLayout from "../pages/blog/BlogLayout";
import BlogIndex from "../pages/blog/BlogIndex";
import BlogPost from "../pages/blog/BlogPost";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomepageMain />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/projects/:title",
        element: <ProjectDetail />,
      },
      {
        path: "/credentials",
        element: <Credentials />,
      },
      {
        path: "/services",
        element: <MyServices />,
      },
      {
        path: "/blog",
        element: <BlogLayout />,
        children: [
          { index: true, element: <BlogIndex /> },
          { path: ":id", element: <BlogPost /> },
        ],
      },
    ],
  },
]);

export default AppRouter;

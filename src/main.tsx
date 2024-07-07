import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CaseStudyPage from "./pages/projects/CaseStudyPage.tsx";
import { ReactLenis } from "@studio-freight/react-lenis";
import Cursor from "./components/customCursor/Cursor.tsx";
import Preloader from "./components/Preloader.tsx";
// import { caseStudy } from "./constants/data.ts";

// const pathname = caseStudy.map((cased) => cased.name);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/case-study/:caseStudyId",
    element: <CaseStudyPage />,
  },
  {
    path: "/preloader",
    element: <Preloader />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactLenis root>
      <Cursor />
      <RouterProvider router={router} />
    </ReactLenis>
  </React.StrictMode>
);

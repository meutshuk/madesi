import { useEffect } from "react";
import Footer from "./Footer";
import Home from "./Home";
import Mission from "./Mission";
import Nav from "./Nav";
import Objectives from "./Objectives";

function App() {
  useEffect(() => {
    const faviconEl = document.getElementById("favicon");

    const setFaviconForTheme = () => {
      const darkScheme = window.matchMedia("(prefers-color-scheme: dark)");

      if (darkScheme.matches) {
        faviconEl.href = "/mnf-website-favicon-color.png";
      } else {
        faviconEl.href = "/mnf-website-favicon-white.png";
      }
    };

    // Set the favicon based on the current theme
    setFaviconForTheme();

    // Event listener to update the favicon if user changes system theme
    const darkSchemeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    darkSchemeQuery.addEventListener("change", setFaviconForTheme);

    // Cleanup listener on component unmount
    return () => {
      darkSchemeQuery.removeEventListener("change", setFaviconForTheme);
    };
  }, []); // Empty dependency array to ensure this effect runs once after initial render

  return (
    <>
      <Nav />
      <div className="snap-y snap-proximity">
        <Home />
        <Mission />
        <Objectives />
      </div>
      <Footer />
    </>
  );
}

export default App;

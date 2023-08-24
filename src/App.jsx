import Footer from "./Footer";
import Home from "./Home";
import Mission from "./Mission";
import Nav from "./Nav";
import Objectives from "./Objectives";

function App() {
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

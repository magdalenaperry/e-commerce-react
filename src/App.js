// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <>
          {/* <StoreProvider> */}
          <NavBar />
          <Routes>
            {/* create new route here and add element to render */}
            {/* <Route path="/" element={<NavBar />} /> */}
          </Routes>
          {/* add footer below routes */}
          <Footer />
          {/* </StoreProvider> */}
        </>
      </Router>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Footer from "./Components/Footer/Footer";
import NavbarContainer from "./Components/Navbar/NavbarContainer";

function App() {
  return (
    <Router>
      <NavbarContainer />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;

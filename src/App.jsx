import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
    <Footer />
  );
}

export default App;

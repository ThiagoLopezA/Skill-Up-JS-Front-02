import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <AppRoutes />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;

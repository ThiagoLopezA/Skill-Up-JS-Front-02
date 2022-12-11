import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Footer from "./Components/Footer/Footer";
import ClientLayout from "./Components/Navbar/ClientLayout";

function App() {
  return (
    <Router>
      <ClientLayout>
        <AppRoutes />
      </ClientLayout>
      <Footer />
    </Router>
  );
}

export default App;

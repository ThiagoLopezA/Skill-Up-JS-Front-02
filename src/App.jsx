import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Transactions from "./Components/Transactions/Transactions";
import "./App.css"
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;

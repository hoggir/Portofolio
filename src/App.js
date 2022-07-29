import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Homev2 from "./pages/v2/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/v2" element={<Homev2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

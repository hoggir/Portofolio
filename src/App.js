import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeCoba from "./pages/HomeCoba";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/coba" element={<HomeCoba />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

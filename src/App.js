import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from "./pages/Home/Pokemon";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

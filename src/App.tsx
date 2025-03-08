import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/index";
import AboutPage from "./pages/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:id" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

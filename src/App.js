import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import JobDetailsPage from "./components/JobDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:company" element={<JobDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

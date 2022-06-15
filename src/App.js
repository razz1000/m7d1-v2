import "./App.css";
import MainPage from "./components/MainPage";
import { Container, Row, Col } from "react-bootstrap";

import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import JobDetailsPage from "./components/JobDetailsPage";
import Favorites from "./components/Favorites";
import FavoriteIndicator from "./components/FavoriteIndicator";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col sm={12}>
            <Link to="/">
              <h1>JobGoogle - Find your dream job</h1>
            </Link>
          </Col>
          <FavoriteIndicator />
        </Row>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:company" element={<JobDetailsPage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

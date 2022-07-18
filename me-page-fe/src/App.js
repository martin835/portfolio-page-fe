import { Col, Container, Nav, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { RiExternalLinkLine } from "react-icons/ri";
import MyNavbar from "./components/MyNavbar";
import Home from "./views/Home";
import MyFooter from "./components/Footer";
import MyBio from "./views/MyBio";

function App() {
  return (
    <>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="bio" element={<MyBio />} />
      </Routes>
      <MyFooter />
    </>
  );
}

export default App;

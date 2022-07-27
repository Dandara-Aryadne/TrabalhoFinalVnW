import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./Style/LinkStyle";
import Element from "./img/element.png";
import Wallpaper from "./img/wall.png";

//import {BrowserRouter as Router, Routes, Route, Link} from "react-dom-router"
import Onu from "./Components/Onu";
import Home from "./Components/Home";
import Work from "./Components/Work";

export default function App() {
  return (
    <Router>
      <S.GlobalStyle />
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Link href="/">
              <S.Li>Home</S.Li>
            </S.Link>
            <S.Link href="/Work">
              <S.Li>Work</S.Li>
            </S.Link>
            <S.Link href="/Onu">
              <S.Li>Onu</S.Li>
            </S.Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/Onu" element={<Onu />} />
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />]
      </Routes>
    </Router>
  );
}

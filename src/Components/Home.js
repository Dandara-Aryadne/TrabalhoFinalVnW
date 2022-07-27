import React from "react";
import * as S from "../Style/HomeStyle";
import Costume from "../img/Costume.png";
import instagram from "../img/instagram.png";
import medium from "../img/medium.png";
import github from "../img/github.png";
import Element from "../img/element.png";
import Wallpaper from "../img/wall.png";

export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Div>
        <S.H1>Dandara Aryadne</S.H1>
        <S.H2>de Jesus Ferreira</S.H2>
      </S.Div>
      <main>
        <S.Img src={Element} alt="element" />
        <S.Imagi src={Wallpaper} alt="wall" />
      </main>
      <S.Box>
        <a href="https://github.com/Dandara-Aryadne">
          <S.Image src={github} />
        </a>
        <a href="https://www.instagram.com/cinemaatm/">
          <S.Image src={instagram} />
        </a>
        <a href="https://medium.com/@dandaraaryadne">
          <S.Image src={medium} />
        </a>
      </S.Box>
      <S.Divi>
        <S.Profile src={Costume} alt="Dandara Aryadne" />
      </S.Divi>
    </S.Container>
  );
}

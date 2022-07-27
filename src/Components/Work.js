import React from "react";
import * as S from "../Style/WorkStyle";
import Icon from "../img/icon.png";
import Wall2 from "../img/wall2.png";
import Token from "../img/token.png";
import GitOne from "../img/GitOne.png";

export default function Work() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Div>
        <h1>Principais Trabalhos</h1>
      </S.Div>
      <S.Main>
        <S.Imag src={Wall2} alt="element" />
        <S.Imge src={Icon} alt="wall" />
        <S.Imgem src={Token} alt="wall" />
      </S.Main>
      <S.BoxOne>
        <S.Img scr={GitOne} alt="auto" />
        <S.Img scr={GitOne} alt="auto" />
        <S.Img scr={GitOne} alt="auto" />
        <S.Img scr={GitOne} alt="auto" />
        <S.Img scr={GitOne} alt="auto" />
      </S.BoxOne>
    </S.Container>
  );
}

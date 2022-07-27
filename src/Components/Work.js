import React from "react";
import * as S from "../Style/WorkStyle";
import Icon from "../img/icon.png";
import Wall2 from "../img/wall2.png";
import Token from "../img/token.png";
import Github from "../img/github.png";
import Netlify from "../img/netlify.png";

export default function Work() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Div>
        <S.H1>Principais Trabalhos</S.H1>
        <S.P>GitHub & Netlify</S.P>
      </S.Div>
      <S.Main>
        <S.Imag src={Wall2} alt="element" />
        <S.Imge src={Icon} alt="wall" />
        <S.Imgem src={Token} alt="wall" />
      </S.Main>
      <S.BoxOne>
        <S.Img src={Github} alt="" />
        <S.Img src={Github} alt="" />
        <S.Img src={Github} alt="" />
        <S.Img src={Github} alt="" />
      </S.BoxOne>
      <S.Section>
        <S.A href="https://github.com/Dandara-Aryadne/Timer_Alice_In_Wonderland">
          <S.H2>Alice in Wonderland Timer</S.H2>
        </S.A>
        <S.A href="https://github.com/Dandara-Aryadne/ApiDogResponsive">
          <S.H2>Dog API</S.H2>
        </S.A>
        <S.A href="https://github.com/Dandara-Aryadne/CalculatorStyled">
          <S.H2>Naruto Calculator</S.H2>
        </S.A>
        <S.A href="https://github.com/Dandara-Aryadne/ToDoFinally">
          <S.H2>ToDo List</S.H2>
        </S.A>
      </S.Section>
      <S.BoxTwo>
        <S.Imgi src={Netlify} alt="" />
        <S.Imgi src={Netlify} alt="" />
        <S.Imgi src={Netlify} alt="" />
        <S.Imgi src={Netlify} alt="" />
      </S.BoxTwo>
      <S.SectionOne>
        <S.Ai href="https://alice-wonderland-timer.netlify.app">
          <S.H3>Link de acesso</S.H3>
        </S.Ai>
        <S.Ai href="https://api-dog-responsive.netlify.app">
          <S.H3>Link de acesso</S.H3>
        </S.Ai>
        <S.Ai href="https://naruto-calculator.netlify.app">
          <S.H3>Link de acesso</S.H3>
        </S.Ai>
        <S.Ai href="https://to-do-vnw.netlify.app">
          <S.H3>Link de acesso</S.H3>
        </S.Ai>
      </S.SectionOne>
    </S.Container>
  );
}

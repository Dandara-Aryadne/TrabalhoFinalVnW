import styled, { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
 
}
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;

export const Div = styled.div`
  position: absolute;
`;

export const Main = styled.main`
  display: flex;
  align-items: center;
  position: relative;
  border: solid;
  width: 100%;
  height: 100vh;
`;

export const Imag = styled.img`
  position: absolute;
  width: 20%;
  left: 80%;
  top: 64vh;
`;

export const Imge = styled.img`
  position: absolute;
  width: 20%;
  z-index: 5;
  right: 70%;
`;

export const Imgem = styled.img`
  position: absolute;
  width: 30%;
  right: 70%;
  height: 99vh;
  bottom: 0vh;
`;

export const BoxOne = styled.section`
  border: solid;
  flex-flow: column nowrap;
  width: 10%;
  height: 40vh;
  display: flex;
  align-items: space-evenly;
  justify-content: center;
  position: absolute;
`;

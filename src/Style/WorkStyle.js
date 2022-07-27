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
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    height: 40vh;
    width: 60%;
    left: 40%;
    top: 59.5vh;
  }
`;

export const Imge = styled.img`
  position: absolute;
  width: 20%;
  z-index: 5;
  right: 70%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    width: 45%;
    z-index: -20;
    right: 55%;
    bottom: 60vh;
  }
`;

export const Imgem = styled.img`
  position: absolute;
  width: 30%;
  right: 70%;
  height: 99vh;
  bottom: 0vh;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
  }
`;

export const BoxOne = styled.section`
  position: relative;
  flex-flow: column nowrap;
  width: 20%;
  height: 48vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  top: 39vh;
  right: 47.5%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 10%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
  }
`;

export const Div = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: column;
  width: 30%;
  height: 20vh;
  top: 20vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: column;
    width: 80%;
    height: 20vh;
    top: 20vh;
  }
`;

export const H1 = styled.h1`
  position: absolute;
  display: flex;
  justify-content: center;
  font-family: "Staatliches", cursive;
  letter-spacing: 0.2vw;
  width: 70%;
  left: 16%;
  bottom: 10vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    justify-content: center;
    font-family: "Staatliches", cursive;
    letter-spacing: 0.2vw;
    width: 100%;
    left: 15%;
    bottom: 12vh;
  }
`;

export const P = styled.p`
  position: absolute;
  display: flex;
  font-family: "Staatliches", cursive;
  bottom: 5vh;
  right: 45%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    font-family: "Staatliches", cursive;
    bottom: 8vh;
    right: 20%;
  }
`;

export const Section = styled.div`
  position: relative;
  flex-flow: column nowrap;
  width: 30%;
  height: 49vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  top: 36.5vh;
  right: 35%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
  }
`;

export const H2 = styled.h2`
  position: absolute;
  display: flex;
  font-family: "Staatliches", cursive;
  font-size: 20px;
`;

export const A = styled.a`
  color: #3b3535;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const Ai = styled.a`
  color: #3b3535;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
export const BoxTwo = styled.div`
  position: relative;

  flex-flow: column nowrap;
  width: 20%;
  height: 48vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  top: 39vh;
  left: 55%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: relative;
    flex-flow: column nowrap;

    width: 30%;
    height: 30vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 41vh;
    left: 56%;
  }
`;
export const Imgi = styled.img`
  width: 10%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 30%;
  }
`;
export const SectionOne = styled.section`
  position: relative;
  flex-flow: column nowrap;
  width: 30%;
  height: 49vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  top: 36.5vh;
  left: 58%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: relative;
    flex-flow: column nowrap;
    width: 60%;
    height: 25vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 41.9vh;
    left: 23%;
  }
`;
export const H3 = styled.h3`
  position: absolute;
  display: flex;
  font-family: "Staatliches", cursive;
  font-size: 20px;
`;

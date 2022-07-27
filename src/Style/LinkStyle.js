import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
 
}
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 98%;
  height: 0vh;
  margin-left: 2vw;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 98%;
  }
`;
export const Nav = styled.nav`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 50%;
  height: 10vh;
  margin-top: 28vh;
  margin-right: 10vw;
  z-index: 3;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;

    width: 80%;
    align-items: center;
    justify-content: center;
    margin-left: 8vw;
    position: absolute;
  }
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: black;
  list-style: none;
  height: 8vh;
  width: 58%;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    width: 100%;

    justify-content: space-around;
  }
`;

export const Li = styled.li`
  font-family: "Edu VIC WA NT Beginner", cursive;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8vw;
  &:hover {
    cursor: pointer;
  }
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 40px;
    width: 110%;
  }
`;

export const Link = styled.a`
  color: #3b3535;
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-size: 50px;
  }
`;

// export const Img = styled.img`
//   position: absolute;
//   width: 21%;
//   right: 20vw;
//   height: 32.5vh;
//   z-index: 3;
//   top: 10vh;
//   right: 13vw;
//   @media only screen and (min-width: 360px) and (max-width: 800px) {
//     display: none;
//   }
// `;

// export const Image = styled.img`
//   position: absolute;
//   width: 42%;
//   right: 0.1vw;
//   height: 70vh;
//   @media only screen and (min-width: 360px) and (max-width: 800px) {
//     position: absolute;
//     width: 42%;
//     right: 0.1vw;
//     height: 40vh;
//   }
// `;

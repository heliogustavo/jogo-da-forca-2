import React from "react";
import styled from "styled-components";
import Jogo from "./Jogo";
import Palavras from "./Palavras"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import Letras from "./Letras";



export default function App() {

  const imgForcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



  return (
    <Container>

      <Jogo />
      <Letras alfabeto={alfabeto} />

    </Container>
  )
}
const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: white;
`



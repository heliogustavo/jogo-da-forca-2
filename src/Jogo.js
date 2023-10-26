import styled from "styled-components";
import forca0 from "./assets/forca0.png" 

export default function Jogo(props) {
    return (
        <Container>
            <Forca data-test="game-image" src={forca0} alt="imagem" />
            <Escolher data-test="choose-word">
                Escolher Palavra
            </Escolher>
            <Palavra data-test="word">

            </Palavra>
        </Container>
    )
}
const Container = styled.div`
display: flex;
align-items: flex-end;
width: 700px;
margin-bottom: 50px;
position: relative;
justify-content: space-between;
`
const Forca = styled.img`
    width: 400px;
`
const Escolher = styled.button`
    background-color: #27ae60;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    padding: 15px 20px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 30px;
    min-width: 150px;
`
const Palavra = styled.h1`
    font-size: 40px;
    margin-right: 5px;
    font-family: "Segoe UI";
    color: ${(props) => props.color};
`
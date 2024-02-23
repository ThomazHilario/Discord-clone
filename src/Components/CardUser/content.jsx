import styled from "styled-components";

export const ContentCard = styled.div`
    position: fixed;
    top: 87.2vh;
    width: 16.5vw;

    height: 6vh;
    border: 0;

    background-color: rgb(31, 32, 36);

    @media (max-height:800px){
        height:6.5vh;
        top:85.7vh;
    }
`
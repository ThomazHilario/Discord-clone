import styled from "styled-components";

// Container
export const Container = styled.main`
    height:100vh;
    display:flex;
`

// Header
export const Header = styled.header`
    width:9vh;
    height:100%;
    Background-color:#202225;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:8px;

    img{
        border-radius:50%;
        height:50px;
        width:50px;
        object-fit:cover;
        cursor:pointer;
        transition:0.7s;

        &:hover{
            border-radius:10px;
        }
    }
    
`

export const DiscordComponent = styled.div`
    display:flex;
    flex-direction:column;
    gap:8px;
    margin-top:5px;

    img{
        border-radius:50%;
        height:50px;
        width:50px;
        object-fit:cover;
        cursor:pointer;
        transition:0.7s;

        &:hover{
            border-radius:10px;
        }
    }

    hr{
        border-color:black;
        margin:auto;
        width:30px;
    }
`


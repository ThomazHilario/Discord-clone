import styled from "styled-components"

export const Chat = styled.div`
    height:100%;
    width:100%;
    font-family:arial;

    .chat{
        display:none;
    }
    
    .activeChat{
        margin-top:10px;
        padding:15px;
        display:block;
        color:red;
    }
    
`

export const ChatIntroduction = styled.div`

    display:flex;
    flex-direction:column;
    gap:10px;
    margin-top:30px;
    margin-left:15px;
    font-family:arial;

    .hashtagcontainer{
        border-radius:50%;
        background-color:rgba(66,69,73,0.900);
        width:70px;
        height:70px;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    h1{
        color:white;
        font-size:1.9rem;
    }

    p{
        color:gray;
    }

`
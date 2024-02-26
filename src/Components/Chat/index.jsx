import styled from "styled-components"

export const ContainerChat = styled.div`
    width:100%;
    height:calc(100% - 50px);
    display:flex;   
`

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
        display:flex;
        color:red;
        flex-direction:column;
        gap:20px;
    }

    .overflowChat{
        overflow:scroll;
        height:91%;

        &::-webkit-scrollbar{
            display:none;
        }
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

export const InputBoxText = styled.input.attrs({placeholder:'você não tem permissão para enviar mensagens neste canal'})`

    display:block;
    width:95%;
    padding-left:20px;
    margin:auto;
    border:0;
    border-radius:5px;
    outline:0;
    cursor:not-allowed;

    background-color:rgba(66,69,73,0.200);
    position:relative;
    height:40px;

    font-size:16px;
    font-weight:100;
`
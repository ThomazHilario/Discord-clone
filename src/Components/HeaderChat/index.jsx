import styled from "styled-components";

export const HeaderChat = styled.div`
    color:white;
    border-bottom:1px solid #1e2124;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media (max-width:550px){
        height:49.8px;
    }

    h1{
        font-family:arial;
        font-size:15px;
        font-weight:300;
        margin-left:20px;
        display:flex;
        aling-items:center;
        gap:8px;

        .backIcon{
            display:none;

            @media (max-width:550px){
                display:block;
            }
        }

    }

    nav{
        display:flex;
        justify-content:center;
        gap:20px;
        margin-right:20px;
        align-items:center;

        .notification{
            transform:rotateY(180deg);
        }

        .contatos{
            transform:rotateY(180deg);
        }

        input{
            width:130px;
            padding-left:10px;
            border-radius:3px;
            height:20px;
            border: 0px;
            color:gray;
            background-color:#1e2124;
            font-weight:bold;
        }

        svg{
            height:49px;
            width:25px;
            cursor:pointer;
        }

        @media (max-width:550px){
            display:none;
        }
    }

`
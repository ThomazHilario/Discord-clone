import styled from "styled-components";

export const BrowserChat = styled.div`
    height:100vh;
    width:270px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:#292b2f;
    &::-webkit-scrollbar{
        display:none;
    }

    .containerChannelList{
        height:88.5vh;
        overflow:scroll;

        &::-webkit-scrollbar{
            display:none;
        }
    }
`

export const ChannelList = styled.ul`
    list-style:none;
    margin-top:10px;
    padding-left:10px;
    color:gray;
    font-family:arial;
    font-size:14px;
    li{
        padding-left:5px;
        margin:4px 0px;

        button{
            display:flex;
            align-items:center;
            gap:7px;
            text-align:start;
            background-color:transparent;
            width:90%;
            border:0px;
            border-radius:5px;
            color:gray;
            padding:5px 10px 5px 7px;
            font-size:15px;
            transition:0.7s;
            cursor:pointer;


            &:hover{
                background-color:rgba(66,69,73,0.800);
            }

        }
    }
`

export const Title = styled.h1`
    color:white;
    font-family:arial;
    font-size:15px;
    font-weight:300;
    padding:15px;
    border-bottom:1px solid #1e2124;
    background-color:#292b2f;
    width:15.8vw;
`
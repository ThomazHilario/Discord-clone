import styled from "styled-components";

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
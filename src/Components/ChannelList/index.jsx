import styled from "styled-components";

export const ChannelList = styled.ul`
    list-style:none;
    margin-top:10px;
    padding-left:10px;
    color:gray;
    font-family:arial;
    li{
        padding-left:8px;
        margin:4px 0px;

        button{
            background-color:transparent;
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
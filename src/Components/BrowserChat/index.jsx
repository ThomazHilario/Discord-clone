import styled from "styled-components";

export const BrowserChat = styled.div`
    height:100%;
    width:20vw;
    background-color:#292b2f;
    overflow:scroll;

    &::-webkit-scrollbar{
        display:none;
    }

    div{
        margin-top:60px;
    }
`
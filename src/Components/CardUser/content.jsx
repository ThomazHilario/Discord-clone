import styled from "styled-components";

export const ContentCard = styled.div`
    height:5.5vh;
    background-color: rgb(31, 32, 36);
    display:flex;
    align-items:center;
    gap:10px;
    @media (max-width:922px){
        display:none;
    }

    .interativeIcons{
        padding:0.5px;
        cursor:pointer;
        border-radius:5px;
        &:hover{
            background-color:rgba(255, 255, 255, 0.080);
        }
    }

    button{
        margin-left:8px;
        padding:1px 5px;
        background-color:transparent;
        border:0;

        display:flex;
        align-items:center;
        overflow:hidden;
        transition:0.7s;
        cursor:pointer;
        border-radius:5px;

        &:hover{
            background-color:rgba(255, 255, 255, 0.080);
        }


        .contentCardInfo{
            img{
                height:3.6vh;
                object-fit: cover;
                border-radius:50%;
            }
    
            svg{
                position:relative;
                background-color:rgb(36, 36, 36);
                border-radius:50%;
                top:0rem;
                left:-0.8rem;
                transform:rotateY(180deg);
                padding:1.5px;
            }

        }

        .contentCardUser{
            p{
                text-align:start;
                color:white;
            }
        }
    }

`
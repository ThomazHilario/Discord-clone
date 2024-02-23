import styled from "styled-components";

export const ContentCard = styled.div`
    height:50px;
    background-color: rgb(31, 32, 36);
    display:flex;
    align-items:center;
    gap:12px;

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
                height:32px;
                object-fit: cover;
                border-radius:50%;
            }
    
            svg{
                position:absolute;
                background-color:rgb(36, 36, 36);
                border-radius:50%;
                bottom:0.5rem;
                left:6.3rem;
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
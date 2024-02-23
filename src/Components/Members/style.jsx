import styled from "styled-components";

// Style div members
export const MembersDicord = styled.div`
    width:270px;
    background-color:#292b2f;
    display:flex;
    flex-direction:column;
    aling-items:center;
    gap:10px;
    grid-area:members;

    h1{
        color:#9E9E9E;
        font-size:15px;
        font-family:arial;
        font-weight:200;
        margin-top:20px;
        margin-left:15px
    }
`

// styled user
export const UserDicord = styled.div`
    display:flex;
    width:90%;
    padding:5px 10px;
    border-radius:7px;
    margin-left:12px;
    align-items:center;
    gap:10px;
    transition:0.7s;
    cursor:pointer;


    img{
        height:35px;
        width:35px;
        object-fit:cover;
        border-radius:50%;
    }

    h3{
        color:rgba(123, 53, 222, 0.7);
        font-family:arial;
        font-size:15px;
        font-weight:200;
    }

    &:hover{
        background-color:rgba(128, 128, 128, 0.200);
    }
`

export const Status = styled.div`
    background-color:rgb(42, 42, 42);
    border-radius:50%;
    height:16px;
    width:16px;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    left:-130px;
    top:10px;

    svg{
        transform:rotateY(180deg)
    }
`
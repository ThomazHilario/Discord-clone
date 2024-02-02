import styled from "styled-components";
import { IoMoon } from "react-icons/io5";
// Foto de perfil
import FotoPerfil from '../../assets/imagens/FotoPerfil.png'

export default function Members(){

    // Style div members
    const Members = styled.div`
        height:100%;
        width:20vw;
        background-color:#292b2f;
        display:flex;
        flex-direction:column;
        aling-items:center;
        gap:10px;

        h1{
            color:#9E9E9E;
            font-size:15px;
            font-family:arial;
            font-weight:200;
            margin-top:20px;
            margin-left:15px
        }
    `

    return(
        <Members>
            <h1>Developer - 1</h1>

            <User/>
        </Members>
    )
}

function User(){

    // styled user
    const User = styled.div`
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

    const Status = styled.div`
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

    return(
        <User>
            {/* imagem do dev */}
            <img src={FotoPerfil} alt="imagem do dev"/>

            {/* Nome do dev */}
            <h3>Thomaz Alves</h3>

            {/* Status */}
            <Status>
                <IoMoon color="orange" size={12}/>
            </Status>
        </User>
    )
}
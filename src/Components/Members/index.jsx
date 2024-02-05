// Styled Components
import { UserDicord, MembersDicord, Status } from "./style";


import { IoMoon } from "react-icons/io5";
// Foto de perfil
import FotoPerfil from '../../assets/imagens/FotoPerfil.png'

export default function Members(){

    return(
        <MembersDicord>
            <h1>Developer - 1</h1>

            <User/>
        </MembersDicord>
    )
}

function User(){

    return(
        <UserDicord>
            {/* imagem do dev */}
            <img src={FotoPerfil} alt="imagem do dev"/>

            {/* Nome do dev */}
            <h3>Thomaz Alves</h3>

            {/* Status */}
            <Status>
                <IoMoon color="orange" size={12}/>
            </Status>
        </UserDicord>
    )
}
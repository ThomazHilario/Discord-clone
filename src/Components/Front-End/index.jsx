import { Post } from "../Post"

import Fotoprofile from '../../assets/imagens/FotoPerfil.png'

export default function Front_End(){
    return(
        <div className="chat activeChat" data-attribute="Front-End">
            <Post>
                <div className="profile">
                    <img src={Fotoprofile} alt="imagem da foto de perfiil" />
                </div>

                <div className="mensageUser">
                    <h4>Thomaz Alves </h4>
                    <p>Esse chat é destinado para as pessoas com interesse em desenvolvimento front-end</p>
                    <a href="https://www.youtube.com/watch?v=oPOKpSFqy-I" target="blank">https://www.youtube.com/watch?v=oPOKpSFqy-I</a>

                    <div className="contentLink">
                        <p className="titlePlatform">youtube</p>
                        <p className="creatorContent">rocketseat</p>
                        <a className="titleContent" href="https://www.youtube.com/watch?v=oPOKpSFqy-I" target="blank">Crie componentes DESSA FORMA no React (Pattern de composição)</a>

                        <img src="https://i.ytimg.com/vi/oPOKpSFqy-I/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC6RNsCV0puLkEGBvm8cHyMSQ32Vg" alt="" />
                    </div>

                </div>
            </Post>

            
        </div>
    )
}
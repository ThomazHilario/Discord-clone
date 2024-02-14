// Imports styled component post
import { Post } from "../Post"

// Foto do profile
import Fotoprofile from '../../assets/imagens/FotoPerfil.png'

// Cursos
export default function Cursos(){
    return(
        <div className="chat" data-attribute="Cursos">
            <Post>
                <div className="profile">
                    <img src={Fotoprofile} alt="imagem do usuario" />
                </div>

                <div className="mensageUser">
                    <h4>Thomaz Alves</h4>
                    <p>Bem vindo ao chat de cursos. Aqui compartilharei cursos.</p>
                    <p>Curso de html e css - curso em video</p>
                    <a href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="blank">https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n</a>


                    <div className="contentLink">
                        <p className="titlePlatform">youtube</p>
                        <p className="creatorContent">Curso em video</p>
                        <a className="titleContent" href="https://www.youtube.com/watch?v=oPOKpSFqy-I" target="blank">Curso completo e atual de HTML5 e CSS3 - Módulo 1</a>

                        <img src="https://i.ytimg.com/vi/Ejkb_YpuHWs/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA6236wbnIBXu9BMu7prRmlxLFsYw" alt="imagem do curso" />
                    </div>


                    <a href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n" target="blank">https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n</a>


                    <div className="contentLink">
                        <p className="titlePlatform">youtube</p>
                        <p className="creatorContent">Curso em video</p>
                        <a className="titleContent" href="https://www.youtube.com/watch?v=vPNIAJ9B4hg&list=PLHz_AreHm4dlUpEXkY1AyVLQGcpSgVF8s" target="blank">Curso completo e atual de HTML5 e CSS3 - Módulo 2</a>

                        <img src="https://i.ytimg.com/vi/vPNIAJ9B4hg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCmi7dKZhPURmqHr5galdXJqF_p6g" alt="imagem do curso" />
                    </div>


                    <a href="https://www.youtube.com/watch?v=ofFgnDtn_1c&list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ" target="blank">https://www.youtube.com/watch?v=ofFgnDtn_1c&list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ</a>


                    <div className="contentLink">
                        <p className="titlePlatform">youtube</p>
                        <p className="creatorContent">Curso em video</p>
                        <a className="titleContent" href="https://www.youtube.com/watch?v=ofFgnDtn_1c&list=PLHz_AreHm4dmcAviDwiGgHbeEJToxbOpZ" target="blank">Curso completo e atual de HTML5 e CSS3 - Módulo 3</a>

                        <img src="https://i.ytimg.com/vi/ofFgnDtn_1c/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAe9U9Up9YfTtrbjBqe46rCtWZIFQ" alt="imagem do curso" />
                    </div>


                    <a href="https://www.youtube.com/watch?v=zHKHMmEG9vE&list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT" target="blank">https://www.youtube.com/watch?v=zHKHMmEG9vE&list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT</a>


                    <div className="contentLink">
                        <p className="titlePlatform">youtube</p>
                        <p className="creatorContent">Curso em video</p>
                        <a className="titleContent" href="https://www.youtube.com/watch?v=zHKHMmEG9vE&list=PLHz_AreHm4dkcVCk2Bn_fdVQ81Fkrh6WT" target="blank">Curso completo e atual de HTML5 e CSS3 - Módulo 4</a>

                        <img src="https://i.ytimg.com/vi/zHKHMmEG9vE/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDjG09V9QgJgete4Qc88BjHWN4B4A" alt="imagem do curso" />
                    </div>
                </div>
            </Post>
        </div>
    )
}
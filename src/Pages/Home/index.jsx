// import styled Components
import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat, ChannelList, Title } from "../../Components/BrowserChat"
import { ContainerBody} from "../../Components/ContainerBody"
import { ContainerChat ,Chat, ChatIntroduction } from "../../Components/Chat"
import { HeaderChat } from '../../Components/HeaderChat'
import { Post } from "../../Components/Post"

import Front_End from "../../Components/Front-End"

// react icons - icons
import { BiSolidInbox } from "react-icons/bi";
import { IoIosHelpCircleOutline, IoIosNotificationsOff  } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbPinnedOff } from "react-icons/tb";
import { FiHash } from "react-icons/fi";

// imports React
import {Context} from '../../Context/'
import { useContext, useState } from 'react'

// import component members
import Members from "../../Components/Members"

// import foto
import Fotoprofile from '../../assets/imagens/FotoPerfil.png'

export default function Home(){

    // Context channelName
    const { channelName } = useContext(Context)

    // Context chatName
    const [chatName, setChatName] = useState('Front-End')

    function channelChatChange(text){
        // Alterando o valor da state chatName
        setChatName(text)

        // Percorrendo chats 
        document.querySelectorAll('.chat').forEach(chat => {

            // Logica para exibir o chat 
            if(chat.dataset.attribute === text){
                chat.classList.add('activeChat')
            } else{
                chat.classList.remove('activeChat')
            }
        })
    }

    return(
        <ContainerDiscord>
            {/* Navegacao de chat */}
            <BrowserChat>
                <Title>{channelName}</Title>

                <div>
                    <ChannelList>
                        Conteudos por area
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                Front-End
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                Back-End
                            </button>
                        </li>

                    </ChannelList>

                    <ChannelList>
                        Materiais
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                Livros
                            </button>
                        </li>
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                Cursos
                            </button>
                        </li>

                    </ChannelList>
                </div>                
            </BrowserChat>

            {/* Container Chat */}
            <ContainerBody>    

                {/* HeaderChat */}
                <HeaderChat>
                    {/* nome do chat */}
                    <h1>{<FiHash size={20}/>} {chatName}</h1>

                    {/* nav do discord chat */}
                    <nav>
                        <IoIosNotificationsOff className="notification"/>
                        <TbPinnedOff/>
                        <BsFillPeopleFill className="contatos"/>
                        <input type="text" placeholder="Buscar"/>
                        <BiSolidInbox size={14}/>
                        <IoIosHelpCircleOutline size={14}/>
                    </nav>
                </HeaderChat>

                <ContainerChat>
                    {/* Chat */}
                    <Chat>
                        {/* Introducao do chat */}
                        <ChatIntroduction>
                            <div className="hashtagcontainer">
                                <FiHash size={50} color="white"/>
                            </div>

                            {/* Title */}
                            <h1>Bem-vindo(a) a {<FiHash size={25}/>} {chatName}</h1>

                            <p>Este e o comeco do canal # {chatName}</p>
                        </ChatIntroduction>

                        <div className="overflowChat">
                            <Front_End/>

                            <div className="chat" data-attribute="Back-End">
                                    back-end
                            </div>

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
                        </div>
                    </Chat>
    
                    {/* Component Members*/}
                    <Members/>
                </ContainerChat>

            </ContainerBody>
        </ContainerDiscord>
    )
}
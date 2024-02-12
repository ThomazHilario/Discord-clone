// import styled Components
import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat } from "../../Components/BrowserChat"
import { ChannelList } from "../../Components/ChannelList"
import { Title } from "../../Components/Title"
import { ContainerBody} from "../../Components/ContainerBody"
import { Chat, ChatIntroduction } from "../../Components/Chat"
import { ContainerChat } from "../../Components/ContainerChat"
import { HeaderChat } from '../../Components/HeaderChat'
import { Post } from "../../Components/Post"

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
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}Front-End</button>
                        </li>
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}Back-End</button>
                        </li>

                    </ChannelList>

                    <ChannelList>
                        Materiais
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}Livros</button>
                        </li>
                        <li>
                            <button onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}Cursos</button>
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
                            <div className="chat activeChat" data-attribute="Front-End">
                                <Post>
                                    <div className="profile"><img src={Fotoprofile} alt="imagem da foto de perfiil" /></div>

                                    <div className="mensageUser">
                                        <h4>Thomaz Alves </h4>
                                        <p>Esse chat é destinado para as pessoas com interesse em desenvolvimento front-end</p>
                                        <a href="https://www.youtube.com/watch?v=oPOKpSFqy-I">https://www.youtube.com/watch?v=oPOKpSFqy-I</a>

                                        <div className="contentLink">
                                            <p className="titlePlatform">youtube</p>
                                            <p className="creatorContent">rocketseat</p>
                                            <p className="titleContent">Crie componentes DESSA FORMA no React (Pattern de composição)</p>

                                            <img src="https://i.ytimg.com/vi/oPOKpSFqy-I/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC6RNsCV0puLkEGBvm8cHyMSQ32Vg" alt="" />
                                        </div>

                                    </div>
                                </Post>

                                
                            </div>

                            <div className="chat" data-attribute="Back-End">
                                    back-end
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
import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat } from "../../Components/BrowserChat"
import { ChannelList } from "../../Components/ChannelList"
import { Title } from "../../Components/Title"
import { ContainerBody} from "../../Components/ContainerBody"
import { Chat, ChatIntroduction } from "../../Components/Chat"
import { ContainerChat } from "../../Components/ContainerChat"
import { HeaderChat } from '../../Components/HeaderChat'

// react icons - icons
import { BiSolidInbox } from "react-icons/bi";
import { IoIosHelpCircleOutline, IoIosNotificationsOff  } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbPinnedOff } from "react-icons/tb";
import { FiHash } from "react-icons/fi";

import {Context} from '../../Context/'
import { useContext, useState } from 'react'

import Members from "../../Components/Members"

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

                        <div className="chat activeChat" data-attribute="Front-End">
                                front-end
                        </div>

                        <div className="chat" data-attribute="Back-End">
                                back-end
                        </div>
                    </Chat>
    
                    {/* Component Members*/}
                    <Members/>
                </ContainerChat>

            </ContainerBody>
        </ContainerDiscord>
    )
}
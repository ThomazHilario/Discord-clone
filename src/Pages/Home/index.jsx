// import styled Components
import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat, ChannelList, Title } from "../../Components/BrowserChat"
import { ContainerBody} from "../../Components/ContainerBody"
import { ContainerChat ,Chat, ChatIntroduction } from "../../Components/Chat"
import { HeaderChat } from '../../Components/HeaderChat'

import CardBoard from "../../Components/CardUser"

import Front_End from "../../Components/Tabs-home"
import Cursos from "../../Components/Tabs-home/cursos"

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


export default function Home(){

    // Context channelName
    const { channelName } = useContext(Context)

    // Context chatName
    const [chatName, setChatName] = useState('Front-End')

    // state - onMembers
    const [onMembers,setOnMembers] = useState(true)

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
                <div id="containerInfo">
                    <Title>{channelName}</Title>    

                    <div id="containerRoll">
                        <div className="containerChannelList">
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
                        
                    </div>
                </div>

                <CardBoard/>
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
                        <BsFillPeopleFill className="contatos" onClick={() => setOnMembers(onMembers === true ? false : true)}/>
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

                            <Cursos/>
                        </div>
                    </Chat>
    
                    {/* Component Members*/}
                    {onMembers && <Members/>}
                </ContainerChat>

            </ContainerBody>
        </ContainerDiscord>
    )
}
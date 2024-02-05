import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat } from "../../Components/BrowserChat"
import { ChannelList } from "../../Components/ChannelList"
import { Title } from "../../Components/Title"
import { ContainerBody} from "../../Components/ContainerBody"
import { Chat } from "../../Components/Chat"
import { ContainerChat } from "../../Components/ContainerChat"
import { HeaderChat } from '../../Components/HeaderChat'

// react icons - icons
import { BiSolidInbox } from "react-icons/bi";
import { IoIosHelpCircleOutline, IoIosNotificationsOff  } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbPinnedOff } from "react-icons/tb";

import {Context} from '../../Context/'
import { useContext, useState } from 'react'

import Members from "../../Components/Members"

export default function Home(){

    const { channelName } = useContext(Context)

    const [chatName, setChatName] = useState('Repositorios Front-End')

    return(
        <ContainerDiscord>
            {/* Navegacao de chat */}
            <BrowserChat>
                <Title>{channelName}</Title>

                <div>
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList>  
                    <ChannelList>
                        Repositorios
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Front-End</button></li>
                        <li><button onClick={(e) => setChatName(e.target.textContent)}>Back-End</button></li>
                    </ChannelList> 
                </div>                
            </BrowserChat>

            {/* Container Chat */}
            <ContainerBody>    

                {/* HeaderChat */}
                <HeaderChat>
                    {/* nome do chat */}
                    <h1>{chatName}</h1>

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
                    
                    </Chat>
    
                    {/* Component Members*/}
                    <Members/>
                </ContainerChat>

            </ContainerBody>
        </ContainerDiscord>
    )
}
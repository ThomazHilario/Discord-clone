import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat } from "../../Components/BrowserChat"
import { ChannelList } from "../../Components/ChannelList"
import { Title } from "../../Components/Title"
import { ContainerBody} from "../../Components/ContainerBody"
import { Chat } from "../../Components/Chat"
import { ContainerChat } from "../../Components/ContainerChat"
import { HeaderChat } from '../../Components/HeaderChat'

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

                <ChannelList>
                    Repositorios
                    <li><button onClick={(e) => setChatName(e.target.textContent)}>Repositorios Front-End</button></li>
                    <li><button onClick={(e) => setChatName(e.target.textContent)}>Repositorios Back-End</button></li>
                </ChannelList>               
            </BrowserChat>

            {/* Container Chat */}
            <ContainerBody>    

                {/* HeaderChat */}
                <HeaderChat>
                    <h1>{chatName}</h1>
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
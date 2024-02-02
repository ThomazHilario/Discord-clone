import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { BrowserChat } from "../../Components/BrowserChat"
import { Title } from "../../Components/Title"
import { ContainerBody} from "../../Components/ContainerBody"
import { Chat } from "../../Components/Chat"
import { ContainerChat } from "../../Components/ContainerChat"
import { HeaderChat } from '../../Components/HeaderChat'

import Members from "../../Components/Members"

export default function Home(){
    return(
        <ContainerDiscord>
            {/* Navegacao de chat */}
            <BrowserChat>
                <Title>Repo Dev</Title>
            </BrowserChat>

            {/* Container Chat */}
            <ContainerBody>    

                {/* HeaderChat */}
                <HeaderChat>
                    <h1>Repo Dev</h1>
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
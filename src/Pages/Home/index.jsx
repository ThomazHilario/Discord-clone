import { ContainerDiscord } from "../../Components/ContainerDiscord"
import { ContainerChat } from "../../Components/ContainerChat"
import { Chat } from "../../Components/Chat"
import { BrowserChat } from "../../Components/BrowserChat"
import { Title } from "../../Components/Title"


import Members from "../../Components/Members"

export default function Home(){
    return(
        <ContainerDiscord>
            {/* Navegacao de chat */}
            <BrowserChat>
                <Title>Repo Dev</Title>
            </BrowserChat>

            {/* Container Chat */}
            <ContainerChat>

                {/* Chat */}
                <Chat>

                </Chat>

                {/* Component Members*/}
                <Members/>

            </ContainerChat>
        </ContainerDiscord>
    )
}
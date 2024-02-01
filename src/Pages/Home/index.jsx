import { ContainerDiscord, ContainerChat, Chat} from "./style"
import { BrowserChat } from "../../Components/BrowserChat"
import Members from "../../Components/Members"
export default function Home(){
    return(
        <ContainerDiscord>
            {/* Navegacao de containers */}
            <BrowserChat>
                
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
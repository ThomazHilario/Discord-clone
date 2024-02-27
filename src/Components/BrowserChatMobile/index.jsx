// imports Radix
import * as Dialog from '@radix-ui/react-dialog'

// import styled-components
import { BrowserChat, Title, ChannelList } from '../BrowserChat';

import { LuArrowLeft } from "react-icons/lu";
import { FiHash } from 'react-icons/fi';

// import style.css
import './style.css'

export default function BrowserChatMobile({channelChatChange,channelName}){
    return(
        <Dialog.Root >
            <Dialog.Trigger>
                <LuArrowLeft className="backIcon" color="white" size={20}/>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Content  className='containerHeaderMobile'>
                    <div className="headerChatMobile">
                        <ChannelList>
                            Conteudos por area
                            <li>
                                <Dialog.Close onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                    Front-End
                                </Dialog.Close>
                            </li>
                            
                            <li>
                                <Dialog.Close onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                    Back-End
                                </Dialog.Close>
                            </li>

                        </ChannelList>

                        <ChannelList>
                            Conteudos por area
                            <li>
                                <Dialog.Close onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                    Livros
                                </Dialog.Close>
                            </li>
                            
                            <li>
                                <Dialog.Close onClick={(e) => channelChatChange(e.target.textContent)}>{<FiHash size={20}/>}
                                    Cursos
                                </Dialog.Close>
                            </li>

                        </ChannelList>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}
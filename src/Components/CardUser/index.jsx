// import radix - dialog
import * as Dialog from '@radix-ui/react-dialog'

// styled component
import { ContentCard } from './content'

// hooks react
import { useEffect } from 'react'

// import img
import iconDiscord from '../../assets/icons/discordIcon.jpg'

// react-icons
import { IoMoon } from "react-icons/io5";
import { RiCodeView } from "react-icons/ri";
import { AiOutlineAudioMuted } from "react-icons/ai";
import { TbHeadphonesFilled } from "react-icons/tb";
import { RiSettings5Fill } from "react-icons/ri";

export default function CardBoard(){
    useEffect(() => {
        console.log(window.innerHeight)
    },[])
    return(
        <ContentCard>
            <Dialog.Root>
                <Dialog.Trigger>
                    <div className='contentCardInfo'>
                        <img src={iconDiscord} alt="imagem discord" />
                        <IoMoon color='orange'/>
                    </div>

                    <div className='contentCardUser'>
                        <p>Convidado</p>
                        <p><RiCodeView/></p>
                    </div>
                </Dialog.Trigger>

                <AiOutlineAudioMuted className='interativeIcons' color='#EA424E' size={23}/>

                <TbHeadphonesFilled className='interativeIcons' color='gray' size={23}/>

                <RiSettings5Fill className='interativeIcons' color='gray' size={23} />
            </Dialog.Root>
        </ContentCard>
    )
}
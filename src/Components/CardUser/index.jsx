// import radix - dialog
import * as Dialog from '@radix-ui/react-dialog'

import { ContentCard } from './content'
import { useEffect } from 'react'

export default function CardBoard(){
    useEffect(() => {
        console.log(window.innerHeight)
    },[])
    return(
        <ContentCard>
            dsds
        </ContentCard>
    )
}
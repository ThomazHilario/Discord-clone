import { useState, createContext } from 'react'

// meu Contexto
export const Context = createContext(null)

// Provider
export default function ContextChannel({children}){
    // state channelName
    const [channelName, setChannelName ] = useState('Repo Dev')

    return(
        <Context.Provider value={{channelName, setChannelName}}>
            {children}
        </Context.Provider>
    )
}
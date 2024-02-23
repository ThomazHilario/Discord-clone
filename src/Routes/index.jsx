import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../Context'

// Imagens 
import DiscordImg from '../assets/icons/discordIcon.jpg'
import DevImg from '../assets/icons/devIcon.png'

// Styled Components
import { Container, Header, DiscordComponent } from './style'

// Pages Components
import Home from '../Pages/Home'

export default function RoutePage(){

    // channel Name
    const {setChannelName} = useContext(Context)

    // Click interativo do discord
    function handleFocus(value){

        document.querySelectorAll('.icon').forEach(img => {

            // Verificando se o value src da imagem e igual a umas das imagens
            if(value.src === img.src){
                value.style.borderRadius = '10px'
                setChannelName(value.nextElementSibling.textContent)
            } else{
                img.style.borderRadius = '50%'
            }
        })
    }

    // Aparecendo nuvem ao lado do channel
    function spanblock(e){

        // Alterando o display do span para block
        e.target.nextElementSibling.style.display = 'block'

    }
    // Sumindo nuvem ao lado do channel
    function spanNone(e){

        // Alterando o display do span para none
        e.target.nextElementSibling.style.display = 'none'

    }

    return(
        <BrowserRouter>

            {/* Container */}
            <Container>

                {/* Header */}
                <Header>
                    
                    <DiscordComponent>
                        <img src={DiscordImg} alt='imagem icon discord' className='icon' onClick={(e) => handleFocus(e.target)}/>

                        <hr />
                    </DiscordComponent>

                    <Link to='/'>
                        <img src={DevImg} alt='icon dev' className='icon' onClick={(e) => handleFocus(e.target)} onMouseOver={spanblock} onMouseOut={spanNone}/>

                        {/* Name channel */}
                        <span>Repo Dev</span>
                    </Link>

                </Header>
    
                {/* Onde as rotas serao renderizadas */}
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>

            </Container>
        </BrowserRouter>
    )
}
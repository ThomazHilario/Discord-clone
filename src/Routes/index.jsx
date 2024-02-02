import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// Imagens 
import DiscordImg from '../assets/icons/discordIcon.png'
import DevImg from '../assets/icons/devIcon.png'

// Styled Components
import { Container, Header, DiscordComponent } from './style'

// Pages Components
import Home from '../Pages/Home'

export default function RoutePage(){

    // Click interativo do discord
    function handleFocus(value){

        document.querySelectorAll('.icon').forEach(img => {

            // Verificando se o value src da imagem e igual a umas das imagens
            if(value.src === img.src){
                value.style.borderRadius = '10px'
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
                        <span>RepoDev</span>
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
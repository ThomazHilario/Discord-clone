import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styled Components
import { Container, Header } from './style'

// Pages Components
import Home from '../Pages/Home'

export default function RoutePage(){
    return(
        <BrowserRouter>

            {/* Container */}
            <Container>
                
                {/* Header */}
                <Header>
                
                </Header>
    
                {/* Onde as rotas serao renderizadas */}
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>

            </Container>
        </BrowserRouter>
    )
}
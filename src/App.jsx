import React from 'react'

import './App.css'
// import ComParametro from './components/basicos/ComParametro'

// import Primeiro from "./components/basicos/Primeiro"

// import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'

// import Repeticao from './components/basicos/Repeticao'
// import Condicional from './components/basicos/Condicional'
// import CondicionalComIf from './components/basicos/CondicionalComIf'
// import Pai from './components/comunicacao/direta/pai'
// import Super from './components/comunicacao/indireta/Super'
// import Input from './components/form/input'
// import Contador from './components/contador/contador'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
export default props =>

    <div className="App">
                    

        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="Repeticao" color="#011f4b">
                <TabelaProdutos />
            </Card>
            {/* <Card titulo="#01 - Primeiro Component" color="#011f4b">
                <Primeiro />
            </Card>
            <Card titulo="#02 - Segundo Component" color="#7bc043">
                <ComParametro titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />
            </Card>
            <Card titulo="#03 - Terceiro Component" color="#851e3e">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card titulo="#04 - Repetição" color="#f6cd61">
                <Repeticao />
            </Card>
            <Card titulo="#05 - Condicional v1" color="#4a4e4d">
                <Condicional numero={3} />
            </Card>
            <Card titulo="#06 - Condicional v2" color="#FA6900">
                <CondicionalComIf numero={10} />
            </Card>
            <Card titulo="#07 - Comunicação Direta" color="#ff6f69">
                <Pai sobrenome="Freitas" />
            </Card>
            <Card titulo="#08 - Comunicação Indireta" color="#000">
                <Super />
            </Card>
            <Card titulo="#09 - Input" color="purple">
                <Input> </Input>
            </Card>
            <Card titulo="#10 - Contador" color="yellow">
                <Contador passo={10} valor={100}> </Contador>
            </Card> */}
        </div>
    </div>
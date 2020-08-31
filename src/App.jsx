import React from 'react'

import './App.css'
import ComParametro from './components/basicos/ComParametro'

import Primeiro from "./components/basicos/Primeiro"

import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'

import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

export default props =>
    <div className="App">
        <Card titulo="#01 - Primeiro Component">
            <Primeiro />
        </Card>
        <Card titulo="#02 - Segundo Component">
            <ComParametro titulo="Esse é o titulo" subtitulo="esse é o subtitulo"/>
        </Card>
        <Card titulo="#03 - Terceiro Component">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#05 - Condicional v1">
            <Condicional numero={3} />
        </Card>
        <Card titulo="#06 - Condicional v2">
            <CondicionalComIf numero={10} />
        </Card>
        
    </div>
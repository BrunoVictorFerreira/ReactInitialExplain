import React, {useState} from 'react'
import Sub from './Sub'

export default (props) => {

    const [texto, setTexto] = useState('');
    const [num, setNum] = useState(0);

    function quandoClicar(valorGerado, tex){
        setNum(valorGerado)
        setTexto(tex)
    }
    return (
        <div>
            <h4>{texto} {num}</h4>
            <Sub onClicar={quandoClicar}></Sub>
        </div>
    )
}
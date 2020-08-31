import React from 'react'
import Produto from './../Data/produto'


function getProdutosListItem(){
    return Produto.map(p => {
        return <li key={p.id}>
            {p.id} - {p.nome} -- R$ {p.preco}
        </li>
    })
}


export default props => {
    return (
        <div>
            <h2>Repetição</h2>
            <ul>
                {getProdutosListItem()}
            </ul>
        </div>
    )
} 

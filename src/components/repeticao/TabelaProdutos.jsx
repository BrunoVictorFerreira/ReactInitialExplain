import React from 'react'
import Produtos from '../Data/produto'

export default (props) => {

    function createDataTable() {
        return Produtos.map(p => {
            return (
                <tr>
                    <td>{p.id}</td>
                    <td>{p.nome}</td>
                    <td>{p.preco}</td>
                </tr>
            )
        })
    }

    return (

        <table>
            <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
            {createDataTable()}

        </table>

    )

}
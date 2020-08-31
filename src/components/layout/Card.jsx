import React from 'react'
import './Card.css'
export default props => 
    <div className="Card" style={{borderColor : props.border || "3px solid black"}}>
        <div className="Content">
            {props.children}
        </div>
        <div className="Footer" style={{backgroundColor : props.color || "#000"}}>
            {props.titulo}
        </div>
    </div>
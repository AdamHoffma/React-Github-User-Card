import React from "react"
import Card from "./Card.js"

const CardList = props => {
    return (
        <div>
            {props.data.map(user => (
               <Card key={user.id} data={user}/>
            ))}
        </div>
    )
}

export default CardList
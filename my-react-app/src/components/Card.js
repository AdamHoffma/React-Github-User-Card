import React from "react"

const Card = props => {
    console.log("props", props)
    return (
        <div>
            <p>{props.data.name}</p>
        </div>
    )
}

export default Card
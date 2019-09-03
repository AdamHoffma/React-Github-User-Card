import React from "react"

const Card = props => {
    console.log("props", props)
    return (
        <div className="card">
            <div className="container">
                <h3>{props.data.login}</h3>
                <p>Followers: {props.data.followers}</p>
                <p>Following: {props.data.following}</p>
                <a href={props.data.html_url}>Git Handle</a>
            </div>
            <img src={props.data.avatar_url}></img>
        </div>
    )
}

export default Card
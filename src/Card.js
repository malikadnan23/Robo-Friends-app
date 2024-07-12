import React from "react";


const Card = (props) => {
    return ( 
        <>
        <div className="text bg-light-yellow grow tc dib br3 pa1 ma3 bw2 shadow-5">
        <img src={`https://robohash.org/${props.id}`} alt="robots"></img>
        <div>
        <h2>
            {props.name}
        </h2>
        <p>
        {props.email}
        </p>
        </div>
        </div>
        </>
     );
}
 
export default Card;
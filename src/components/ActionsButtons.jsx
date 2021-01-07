import React from "react";

const ActionsButtons = (props) => {
    return (
        <div style={{margin: "40px auto", textAlign: "center"}}>
            <button onClick={() => props.reset(props.deckArray)}>Reset</button>
            <button onClick={() => props.dealNCard(5)}>Deal Five card</button>
        </div>
    );
};


export default ActionsButtons;

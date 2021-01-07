import React from "react";

import heart from "../style/images/heart.png";
import diamond from "../style/images/diamond.png";
import club from "../style/images/club.png";
import spade from "../style/images/spade.png";

import "../style/components/card.scss";

const Card = (props) => {

    const {suits, card, color} = props;

    const getCardSymbol = (suits) => {
        let symbol;
        switch (suits) {
            case "Diamond":
                return symbol = diamond;
            case "Heart":
                return symbol = heart;
            case "Club":
                return symbol = club;
            case "Spade":
                return symbol = spade;
            default:
                return symbol;
        }

    };

    const cardSymbol = getCardSymbol(suits);
    return (
        <div className="card-container" style={{color: `${color}`}}>
            <div style={{position: "absolute", top: 5, left: 5}}>
                <div style={{maxWidth: 20}}>{card}</div>
                <img src={cardSymbol} style={{maxWidth: 20}}/>
            </div>
            <div>
                <img src={cardSymbol} style={{
                    height: 40,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)"
                }}/>
            </div>
            <div style={{position: "absolute", bottom: 5, right: 5, transform: "rotate(-180deg)"}}>
                <div style={{maxWidth: 20}}>{card}</div>
                <img src={cardSymbol} style={{maxWidth: 20}}/>
            </div>
        </div>
    );

};


export default Card;

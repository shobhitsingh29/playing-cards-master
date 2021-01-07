import React, {useState} from "react";

import Card from "./components/Card" ;
import ActionsButtons from "./components/ActionsButtons" ;
import {deckArray} from "./utils/DeckArray";

const App = () => {

    const [cardsArray, setCardsArray] = useState(deckArray);
    const [cardPickedArr, setCardPickedArr] = useState([]);

    const reset = (array) => {
        setCardsArray(deckArray);
        setCardPickedArr([]);
        return array;
    };

    const dealNCard = (N) => {
        const randomItemArr = [];
        for (let i = 0; i < N; i++) {

            const randomItem = cardsArray[i];
            if (randomItem !== undefined) {

                randomItemArr.push(randomItem);
            }
        }

        const newCardsArray = cardsArray.filter(element => {

            const includes = randomItemArr.some(({index}) => index === element.index);

            if (!includes) {
                return true;
            }
        });

        setCardsArray(newCardsArray);
        debugger;

        if (cardPickedArr.length < 52) {

            const cardsPickedArray = [...cardPickedArr].concat(randomItemArr);
            debugger;
            setCardPickedArr(cardsPickedArray);
        }

    };

    return (
        <div style={{width: "100%"}}>
            <div style={{display: "flex", justifyContent: "center", margin: "40px auto 0px 180px", height: 282}}>
                {cardsArray && cardsArray.map((card, index) => {
                    return (
                        <div key={index}>
                            <Card suits={card.suits} card={card.card} color={card.color}/>
                        </div>
                    );
                })}
            </div>
            <ActionsButtons reset={reset} dealNCard={dealNCard} deckArray={deckArray}/>
            <div style={{display: "flex", justifyContent: "center", margin: "40px auto 0px 180px"}}>
                {cardPickedArr && cardPickedArr.map((card, index) => {
                    return (
                        <div key={index}>
                            <Card suits={card.suits} card={card.card} color={card.color}/>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};


export default App;

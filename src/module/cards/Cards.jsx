import React, {useEffect, useState} from "react";
import {CircularProgress, Button} from "@material-ui/core";
import s from "./cards.module.css";
import CardsItem from "./CardItem";
import ImageCard from "./ImageCard";

const Cards = () => {

    const [error, setError] = useState(undefined);
    const [isLoaded, setIsLoaded] = useState(false);
    const [valueCards, setValueCards] = useState([]);
    const [quantityCards, setQuantityCards] = useState(16);
    const [visible, setVisible] = useState(false);
    const [statusBtn, setStatusBtn] = useState(true)

    useEffect(()=>{
        fetch('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
            .then(res => res.json())
            .then(
                (res) =>{
                    if(error) setError(undefined)
                    setIsLoaded(true)
                    setValueCards(res)
                },
                (errors) => {
                    setIsLoaded(true)
                    setError(errors)
                }
            )
    }, [])
    const handleQuantityCards = () => setQuantityCards(valueCards.length)

    const handleSeen = id => setValueCards(valueCards.map(el => {
        if(el.id === id){
            el.seen = true
        }
        return el
    }))

    return(
        <section className={s.section}>
            <div className={s.container}>
                <h1 className={s.title}>Похожие объявления</h1>
                <div className={s.cards}>
                    { isLoaded ? valueCards.map((item, index) => {
                        if(index < quantityCards) return <CardsItem key={item.id} props={item} handleSeen={handleSeen}/>
                    }) : <CircularProgress/>}
                </div>
                <div className={s.btn}>
                    <Button
                        className={s.btn__item}
                        style={statusBtn ? {display: 'flex' } : {display : 'none'}}
                        onClick={() => {
                            handleQuantityCards()
                            setVisible(!visible)
                            setStatusBtn(!statusBtn)
                        }}
                    >
                        Показать еще
                        <svg
                            width="17"
                            height="10"
                            viewBox="0 0 17 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={visible ? {transform: 'rotate(0deg)'} : {transform: 'rotate(180deg)'}}
                        >
                            <path
                                d="M15.2288 8.18809L8.27475 0.999954L1.32075 8.18809"
                                stroke="#00A0AB"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Cards;
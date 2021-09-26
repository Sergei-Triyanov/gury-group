import React from "react";
import s from "./cardsItem.module.css";
import ImageSlider from "./ImageSlider";
import PriceCard from "./PriceCard";
import DateFormatCard from "./DateFormatCard";
import NameProduct from "./NameProduct";
import LocalInfoCard from "./LocalInfoCard";

const CardsItem = ({props, handleSeen}) => {

    const {id, title, oldPrice, price, seen, date, locality} = props;

    return(
        <div
            className={s.cards__item}
            style={seen ? {backgroundColor : '#FFF6A5'} : {backgroundColor : '#FFF'}}
            onClick={() => handleSeen(id)}
        >
            <div onClick={e => e.stopPropagation()}>
                <ImageSlider title={title} id={id} seen={seen}/>
            </div>
            <div className={s.seen} style={seen ? {display : 'flex'} : {display : 'none'}}>
                <p className={s.seen__text}>просмотренно</p>
            </div>
            <div className={s.info}>
                <PriceCard price={price} oldPrice={oldPrice} seen={seen}/>
                <NameProduct title={title}/>
                <div className={s.date}>
                    <LocalInfoCard locality={locality}/>
                    <DateFormatCard date={date}/>
                </div>
            </div>
        </div>
    )
}

export default CardsItem;
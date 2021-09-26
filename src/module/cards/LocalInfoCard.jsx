import React from "react";
import PropTypes from "prop-types";
import s from "./localInfo.module.css";

const LocalInfoCard = ({locality}) =>{
    console.log(locality.length)
    return <div className={s.local}>{locality}</div>
}

LocalInfoCard.prototype ={
    locality: PropTypes.string,
}

export default LocalInfoCard;
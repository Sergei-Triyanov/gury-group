import React from "react";
import PropTypes from "prop-types";
import s from "./nameroduct.module.css";

const NameProduct = ({title}) => {
    return <div className={s.name}>{title}</div>
}

NameProduct.prototype ={
    title : PropTypes.string,
}

export default NameProduct;


import React from "react";
import PropTypes from "prop-types";
import s from "./dateFormatCardd.module.css";

const DateFormatCard = ({date}) =>{

    const dateTime = d => {
        const date = new Date(d)

        return `${date.getUTCMonth() + 1}.${date.getUTCDate()}.${date.getUTCFullYear().toString().split('').slice(2,4).join('')}, ${date.getUTCHours()}.${date.getUTCMinutes()}`
    }

    return <div className={s.date}>{dateTime(date)}</div>
}

DateFormatCard.prototype = {
    date: PropTypes.number.isRequired,
}

export default DateFormatCard
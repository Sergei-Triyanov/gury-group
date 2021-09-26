import React, {useCallback, useEffect, useState} from "react";
import {CircularProgress} from "@material-ui/core";
import s from "./imaheCard.module.css";

const ImageCard = () =>{
    const [src, setSrc] = useState(undefined);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        fetch('https://source.unsplash.com/random')
            .then(res => {
                setLoaded(true)
                setSrc(res.url)
            })
    }, [])
    return loaded
        ? <img className={s.img__item} src={src} alt="photo cards"/>
        : <div className={s.loaded}><CircularProgress className={s.curcle}/></div>
}

export default ImageCard;
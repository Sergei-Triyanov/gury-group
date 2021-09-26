import s from "./imageSlider.module.css";
import ImageCard from "./ImageCard";
import React, {useState} from "react";
import IconBarCard from "./IconBarCard";

const ImageSlider = ({title, id, seen}) =>{

    const [position, setPosition] = useState('0px')

    return(
        <div className={s.slider}>
            <div className={s.slider__item} style={{ transform : `translateX(${position})`}}>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
                <ImageCard/>
            </div>
            <div>
                <form className={s.nav} action='#'>
                    <div className={s.item}>
                        <input
                            className={s.input}
                            type="radio"
                            name={title}
                            id={id + 1} value='1'
                            defaultChecked
                            onChange={()=>{
                            setPosition('0px')
                            }}
                        />
                        <label className={s.label} htmlFor={id + 1}/>
                    </div>
                    <div className={s.item}>
                        <input
                            className={s.input}
                            type="radio"
                            name={title}
                            id={id + 2}
                            value='2'
                            onChange={()=>{
                                   setPosition('-224px')
                            }}
                        />
                        <label className={s.label} htmlFor={id + 2}/>
                    </div>
                    <div className={s.item}>
                        <input
                            className={s.input}
                            type="radio"
                            name={title}
                            id={id + 3}
                            value='3'
                            onChange={()=>{
                                setPosition('-448px')
                            }}
                        />
                        <label className={s.label} htmlFor={id + 3}/>
                    </div>
                    <div className={s.item}>
                        <input
                            className={s.input}
                            type="radio"
                            name={title}
                            id={id + 4}
                            value='4'
                            onChange={()=>{
                                setPosition('-672px')
                            }}
                        />
                        <label className={s.label} htmlFor={id + 4}/>
                    </div>
                </form>
                <IconBarCard seen={seen}/>
            </div>
        </div>
    )
}

export default ImageSlider;
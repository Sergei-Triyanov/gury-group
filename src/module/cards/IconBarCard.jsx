import React from "react";
import s from "./iconBarCars.module.css";

const IconBarCard = ({seen}) =>{
    return(
        <div className={s.bar}>
            <svg className={ seen ? s.svg__see : s.svg} width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.4321 12.2122C20.5975 14.5152 14.8243 19.697 12.0421 22C9.60767 19.8889 4.42577 15.206 3.17377 13.3636C1.60876 11.0606 1.60874 7.60649 3.17375 5.3033C4.30214 3.64268 6.3037 3.00028 7.86878 3C9.64009 2.99968 12.0421 5.30302 12.0421 5.30302C12.0421 5.30302 15.6938 1.84866 19.3455 4.15179C22.2456 5.98093 22.4755 9.3334 21.4321 12.2122Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
            <svg className={ seen ? s.svg__see : s.svg} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 21.2632V2.73684C10 2.15789 10.3 1 11.5 1C12.7 1 13 2.15789 13 2.73684V21.2632C13 21.4561 13 23 11.5 23C10 23 10 21.4561 10 21.2632Z" stroke="white" strokeWidth="2"/>
                <path d="M17 21.6579V7.34211C17 6.89474 17.3 6 18.5 6C19.7 6 20 6.89474 20 7.34211V21.6579C20 21.807 20 23 18.5 23C17 23 17 21.807 17 21.6579Z" stroke="white" strokeWidth="2"/>
                <path d="M3 21.8947V10.1053C3 9.73684 3.3 9 4.5 9C5.7 9 6 9.73684 6 10.1053V21.8947C6 22.0175 6 23 4.5 23C3 23 3 22.0175 3 21.8947Z" stroke="white" strokeWidth="2"/>
            </svg>

        </div>
    )
}

export default IconBarCard;
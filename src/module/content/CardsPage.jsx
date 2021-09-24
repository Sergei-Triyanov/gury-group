import React, {useEffect, useState} from 'react';
import {Button} from "@material-ui/core";

const CardsPage = ({cards}) => {
    const [cardItems, setCardItems] = useState([])

    useEffect(()=> setCardItems(cards.slice(0, 16)),[cards])

    return <div>

        <Button>Показать еще
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.11707 1.954L8.07108 9.14214L15.0251 1.954"
                      stroke="#00A0AB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                />
            </svg>
        </Button>
    </div>
}

export default CardsPage;
import React from 'react'
import UrOrder from './UrOrder'
import Receiving from '../Receiving/Receiving'
import Pay from '../Pay/Pay'
import Recipient from '../Recipient/Recipient'

import "./card.css"

// const next = [
//     { id: 1 },
//     { id: 2 },
//     { id: 3 },
//     { id: 4 },
// ]


const items = [
    {
        id: 1,
        title: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        count: 1,
        price: 4990
    },
    {
        id: 2,
        title: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        count: 1,
        price: 17590,
    },
    {
        id: 1,
        title: "Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)",
        count: 1,
        price: 4990
    },
    {
        id: 2,
        title: "Гироскутер Smart Balance Premium 10.5 Зелёный граффити",
        count: 1,
        price: 17590,
    }
]



const card = () => {
    return (
        <div className='card'>
            <UrOrder items={items} />
            <Receiving />
            <Pay />
            <Recipient />
        </div>
    )
}

export default card
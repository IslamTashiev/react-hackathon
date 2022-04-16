import React, { useState } from 'react'
import Item from './Item'
import Nextbtn from './Next-btn'

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
    }
]

// const [showOrder, setShowOrder] = useState(false)

const UrOrder = () => {
    return (
        <div>
            <div className='order'>
                <h2>Ваш заказ</h2>
                <div  className='ur-order'>
                    <div className='ur-content'>
                        <Item items={items} />
                    </div>
                </div>
            </div>
            <Nextbtn />
        </div>
    )
}

export default UrOrder
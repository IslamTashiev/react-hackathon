import React, { useState } from 'react'
import EditBtn from './EditBtn'
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


const UrOrder = () => {
    const [showOrder, setShowOrder] = React.useState(false)

    const closeBlock = () => {
        setShowOrder(!showOrder)
    }

    return (
        <form>
            <div className='order'>
                <h2>Ваш заказ</h2>
                {showOrder ? (
                    <div className='ur-order'>
                        <div className='ur-content'>
                            <Item items={items} />
                            <Nextbtn />
                        </div>
                    </div>
                ) : (
                    <div onClick={closeBlock}>
                        <EditBtn />
                    </div>
                )}
            </div>
        </form>
    )
}

export default UrOrder
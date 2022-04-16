import React from 'react'
import UrOrder from './UrOrder'

import "./card.css"

const card = () => {
    return (
        <div className='card'>
            <div className="container">
                <h1>Оформление заказа</h1>
                <UrOrder />
            </div>
        </div>
    )
}

export default card
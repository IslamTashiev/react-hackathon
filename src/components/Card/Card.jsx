import React from 'react'
import UrOrder from './UrOrder'
import Receiving from '../Receiving/Receiving'
import Pay from '../Pay/Pay'
import Recipient from '../Recipient/Recipient'

import "./card.css"

const card = () => {
    return (
        <div className='card'>
            <UrOrder />
            <Receiving />
            <Pay />
            <Recipient />
        </div>
    )
}

export default card
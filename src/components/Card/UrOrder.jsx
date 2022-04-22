import React, { useState } from 'react'
import EditBtn from './EditBtn'
import Item from './Item'
import Nextbtn from './Next-btn'



const UrOrder = ({ items }) => {
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
                        <div>
                            
                        </div>
                        <EditBtn />
                    </div>
                )}
            </div>
        </form>
    )
}

export default UrOrder
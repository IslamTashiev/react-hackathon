import React, { useContext, useEffect, useState } from 'react'
import EditBtn from './EditBtn'
import Item from './Item'
import Nextbtn from './Next-btn'

// import { appContext } from "../../context/appContext";


const UrOrder = ({ items }) => {
    const [showOrder, setShowOrder] = React.useState(true)
    // const { сartItem, fetchCardItems } = useContext(appContext)

    const closeBlock = () => {
        setShowOrder(!showOrder)
    }

    // useEffect(() => {
    //     fetchCardItems()
    //     console.log(сartItem);
    // }, []
    // )

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
import React from 'react'
import Card from '../components/Card'
import data from '../assets/Data.js'
import './Product.css'
function Product() {
    console.log(data)
    return (
        <div className='product-container'>
            <h1 className='heading'>Leather Accessories</h1>
            <div className="time-container">
                <div className="time-sub-container">
                <div className="time" id='a'>
                    <h1 >00</h1>
                    <p>Days</p>
                </div>

                <div className="time" id='a'>
                    <h1>00</h1>
                    <p>Hours</p>
                </div>

                <div className="time" id='a'>
                    <h1 id='b1'>00</h1>
                    <p>Minutes</p>
                </div>

                <div className="time">
                    <h1>00</h1>
                    <p>Seconds</p>
                </div>
                </div>
                
            </div>
            <div className="product-card-cotainer">
                {
                    data.map((item, index) => {
                        return (
                            <Card image={item.image} title={item.title} rating={item.rating} discount={item.discount} prevPrice={item.prevPrice} newPrice={item.newPrice} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product
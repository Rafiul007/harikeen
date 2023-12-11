import React from 'react'
import './Card.css'
import img1 from '../assets/1.jpg'
function Card(props) {
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.image} alt="img" />
                <div className="image-icon">
                    <p>New</p>
                </div>
                <div className="image-icon">
                    <i class="fa-solid fa-heart"></i>
                </div>
                <div className="popup-icon-container">
                    <div className="pop-icon">
                        <i class="fa-solid fa-play"></i>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <p>({props.rating})</p>
                </div>
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="price">
                    <p className="prev-price">৳{props.prevPrice}</p>
                    <p className="curr-price">৳{props.newPrice}</p>
                </div>
                <div className="discount">
                    <p>Discount :</p>
                    <p className='discount-parcent'>{props.discount}%</p>
                </div >
                <div className="btn">
                <button><i class="fa-solid fa-basket-shopping"></i>Add</button>
                </div>

            </div>

        </div>
    )
}

export default Card
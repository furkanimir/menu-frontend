import React from 'react'

function ItemList({ index, item }) {
    return (
        <li class="kahvalti-item" key={index}>
            <div class="item-image">
                <img src={item.img} alt="Product Image" />
            </div>
            <div class="item-details">
                <div class="item-header">{item.header}</div>
                <div class="item-description">
                    {item.description.length > 55 ? (
                        <span>{item.description.slice(0, 51)}...</span>
                    ) : (
                        <span>{item.description}</span>
                    )}
                </div>
            </div>
            <div class="item-price">
                {item.price}₺
            </div>
        </li>
    )
}

export default ItemList
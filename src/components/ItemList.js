import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import ItemModal from './ItemModal';

function ItemList({ index, item, hex, gradient }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const handleShow = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };
    const handleClose = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    return (
        <div>
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
                <div>
                    <p style={{color:hex, background:gradient }}>deneme</p>
                </div>

            </li>
            <Button className='mb-3' variant="outline-primary" onClick={() => handleShow(item)}>
                Düzenle
            </Button>
            {selectedItem && (
                <ItemModal
                    item={selectedItem}
                    show={showModal}
                    handleClose={handleClose}
                />
            )}
        </div>

    )
}

export default ItemList
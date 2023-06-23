import React, {useContext, useEffect, useState} from 'react';
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import DataContext from "../Context/data";


const CartPage = () => {

    const {
        cartItems,
        quantity,
        handleRemoveFromCart,
        estimatedTotal,
        handleTotalPayment,
        handleQtyChange
    } = useContext(DataContext);

    const [estimatedTax, setEstimatedTax] = useState('');
    const [totalCartPrice, setTotalCartPrice] = useState('');


    const qty = [1, 2, 3, 4, 5, 6];

    const qtyMenu = qty.map((elem) => {
        return (
            <MenuItem key={elem} value={elem}>{elem}</MenuItem>
        )
    });

    // calculating product cost if more than one
    const totalPrice = (unitPrice, qty) => {
        return Number(unitPrice) * Number(qty)
    };

    const handleEstimatedTax = () => {
        let tax = (estimatedTotal * 0.16).toFixed(2);
        setEstimatedTax(tax)
    };


    useEffect(() => {
        handleTotalPayment();
        handleEstimatedTax();
        let total = (Number(estimatedTotal) + Number(estimatedTax)).toFixed(2)
        setTotalCartPrice(total)
    });


    const cartDetails = cartItems.map((elem) => {
        return (
            <>
                <div key={elem.id} className="row mt-3">
                    <div className="col-6 text-center">
                        <img className={'w-50'} src={elem.image} alt={elem.image}/>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-between mt-5">
                        <div className="row">
                            <div className="col-12">
                                <p className={'product-category-text'}>{elem.category}</p>
                                <p className={'cart-product-title'}>{elem.title}</p>
                                <p className={'cart-product-desc'}>{elem.description}</p>
                                <p className={'cart-product-price mt-3'}>${elem.price}</p>
                                <div>
                                    <Box sx={{maxWidth: 110}}>
                                        <FormControl fullWidth>
                                            <InputLabel id={elem.id}>Qty</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id={elem.id}
                                                value={quantity[elem.id] || 1}
                                                label="Age"
                                                onChange={(event) => handleQtyChange(event, elem.id)}
                                            >
                                                {qtyMenu}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 d-flex justify-content-between align-items-start">
                                <div>
                                    <FavoriteBorderRoundedIcon color={'warning'}/><span className={'mx-2'}>Add to Favorites</span>
                                </div>
                                <Button onClick={() => handleRemoveFromCart(elem.id)} size="small" color={'error'}
                                        variant={'contained'}>Remove</Button>
                            </div>
                            <div className="col-6 text-end">
                                <span>Total: </span>
                                <span
                                    className={'cart-total-item-price'}>${totalPrice(elem.price, quantity[elem.id] ? quantity[elem.id] : 1)}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Divider className={'mt-4'} color={'black'}/>
            </>
        )
    });


    return (
        <div className={'cart-main container-fluid '}>
            <div className="row">
                <div className="col-7">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-between">
                            <h3 className={'payment-summary-title'}>Shopping Bag</h3>
                            <div className={'cart-item-count'}>{cartItems.length} Items</div>
                        </div>
                    </div>
                    <Divider color={'black'}/>
                    {cartDetails}
                </div>
                <div className="col-4 payment-summary-layout d-flex flex-column gap-5">
                    <div className='row'>
                        <div className="col-12">
                            <h3 className={'payment-summary-title'}>Payment Summary</h3>
                            <Divider color={'black'}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className={'d-flex justify-content-between'}>
                                <p className={'payment-summary-labels'}>Items</p>
                                <p className={'payment-summary-value'}>$ {estimatedTotal}</p>
                            </div>
                            <div className={'d-flex justify-content-between'}>
                                <p className={'payment-summary-labels'}>Shipping Cost</p>
                                <p className={'payment-summary-value'}>Free</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className={'d-flex justify-content-between'}>
                                <p className={'payment-summary-labels'}>Estimated Tax</p>
                                <p className={'payment-summary-value'}>$ {estimatedTax}</p>
                            </div>
                            <Divider color={'black'}/>
                            <div className={'d-flex justify-content-between'}>
                                <p className={'payment-summary-total mt-4'}>Total Cost</p>
                                <p className={'payment-summary-value mt-4'}>$ {totalCartPrice}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6">
                                    <button className={'payment-button-google'}></button>
                                </div>
                                <div className="col-6">
                                    <button className={'payment-button-paypal'}></button>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <button className={'check-out-btn mt-2'}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};


export default CartPage


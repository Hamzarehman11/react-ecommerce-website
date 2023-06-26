import React, {useEffect, useState} from 'react';


import {Rating} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ProductCard from "./ProductCard";

import axios from "axios";
import {useContext} from "react";
import DataContext from "../Context/data";


const ProductItem = () => {

    const {product} = useContext(DataContext);
    const [likeable, setLikeable] = useState([]);


    const showData = () => {
        axios.get('https://fakestoreapi.com/products?limit=6').then(({data}) => {
            setLikeable(data)
        })

    }


    const likeableProducts = likeable.map((elem) => {
        return (

            <ProductCard elemId={elem.id} title={elem.title} price={elem.price} image={elem.image}
                         minWidth={245} maxWidth={245}
                         maxHeight={380} minHeight={380} mediaHeight={220} />
        )
    });


    useEffect(() => {
        showData();
    }, [])

    return (
        <div className={'container-fluid mt-5'}>
            <div className="row">
                <div className="col-6 text-center">
                    <img className={'w-50'} src={product.image} alt={product.title} />
                </div>
                <div className="col-6 mt-5 d-flex flex-column justify-content-between">
                    <div className="row">
                        <div className="col-12">
                            <h4>{product.title}</h4>
                            <Rating name="read-only" value={product.rating?.rate} readOnly/>
                            <h5>Price: ${product.price}</h5>
                            <p className={"mt-5"}>{product.description}</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9">
                            <button className={'add-to-cart-btn'}>Add to Cart</button>
                        </div>
                        <div className="col-3 add-more-sec d-flex justify-content-start align-items-center gap-3">
                            <RemoveIcon fontSize={'small'} className={'qty-btn'}/>
                            <p className={'selected-qty m-0'}>1</p>
                            <AddIcon fontSize={'small'} className={'qty-btn'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="you-may-like-sec">
                <div className="row">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <div>
                            <h3>You May Also Like</h3>
                        </div>
                        <div className={'d-flex'}>
                            {likeableProducts}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};


export default ProductItem;
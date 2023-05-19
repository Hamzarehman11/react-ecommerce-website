import React, {useEffect, useState} from 'react'
import axios from "axios";
import ProductCard from "./ProductCard";


const ProductsList = ({productList, handleAddToCart}) => {


    const productCard = productList.map((elem) => {

        return (

            <ProductCard elemId={elem.id}  title={elem.title} price={elem.price} image={elem.image} minWidth={345} maxWidth={345}
                         maxHeight={500} minHeight={500} mediaHeight={340} handleAddToCart={handleAddToCart} />
        )
    });


    return (
        <>
            <div className="container-fluid product-list">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
                        {productCard}
                    </div>
                </div>
            </div>
        </>

    )
};


export default ProductsList;
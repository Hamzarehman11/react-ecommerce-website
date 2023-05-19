import React from "react";
import {useState} from "react";


import BannerCarousel from "./BannerCarousel";
import ProductsList from "./ProductsList";



const HomePage = ({productList, handleAddToCart}) => {



    return (
        <>
            <BannerCarousel/>
            <ProductsList productList={productList} handleAddToCart={handleAddToCart}  />
        </>
    )
}


export default HomePage;
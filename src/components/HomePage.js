import React, {useContext, useEffect} from "react";
import {useState} from "react";


import BannerCarousel from "./BannerCarousel";
import ProductsList from "./ProductsList";
import dataContext from "../Context/data";



const HomePage = () => {

    const {fetchProducts} = useContext(dataContext)

    useEffect(()=>{
        fetchProducts();
    },[])

    return (
        <>
            <BannerCarousel/>
            <ProductsList  />
        </>
    )
}


export default HomePage;
import React from "react";


import Header from "./Header";
import Footer from "./Footer";
import BannerCarousel from "./BannerCarousel";
import ProductsList from "./ProductsList";
import ProductItem from "./ProductItem";
import CartPage from "./CartPage";


const HomePage = () => {


    return (
        <>
            <Header />
            <BannerCarousel />
            <ProductsList />
            {/*<ProductItem />*/}
            {/*<CartPage />*/}
            <Footer />
        </>
    )
}


export default HomePage;
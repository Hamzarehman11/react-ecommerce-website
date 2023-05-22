import React, {createContext} from 'react';
import {useEffect, useState} from "react";
import axios from "axios";




const DataContext = createContext({})

const Provider = ({ children }) =>{

    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (id) => {
        let cartProd = productList.filter((elem)=> elem.id === id);
        const singleObject = Object.assign({}, ...cartProd);
        setCartItems(prevState => [...prevState, singleObject])
    };

    const handleRemoveFromCart = (id) => {
        let cartProd = cartItems.findIndex((elem)=> elem.id === id);
        let deletedItem = cartItems.splice(cartProd,1);
        let updatedArr = cartItems.filter((elem)=> elem.id !== deletedItem.map((elem)=>elem.id));
        setCartItems(updatedArr);
    };




    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(({data}) => {
            setProductList(data)
        })

    };


    const value = {
        productList,
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        fetchProducts
    }



    return (

        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )

}

export { Provider };
export default DataContext;
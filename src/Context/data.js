import React, {createContext, useState} from 'react';
import axios from "axios";


const DataContext = createContext({})

const Provider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [isFavourite, setIsFavourite] = useState([]);
    const [estimatedTotal, setEstimatedTotal] = useState(0);

    const handleAddToCart = (id) => {
        let cartProd = productList.filter((elem) => elem.id === id);
        const singleObject = Object.assign({}, ...cartProd);
        setCartItems(prevState => [...prevState, singleObject])
    };

    const handleAddToFavourites = (id) => {
        let favProd = productList.filter((elem) => elem.id === id);
        const singleObject = Object.assign({}, ...favProd);
        setIsFavourite(prevState => [...prevState, singleObject])
    };

    const handleRemoveFromCart = (id) => {
        let cartProd = cartItems.findIndex((elem) => elem.id === id);
        let deletedItem = cartItems.splice(cartProd, 1);
        let updatedArr = cartItems.filter((elem) => elem.id !== deletedItem.map((elem) => elem.id));
        setCartItems(updatedArr);
    };

    const handleRemoveFromFavourites = (id) => {
        let favProd = isFavourite.findIndex((elem) => elem.id === id);
        let deletedItem = isFavourite.splice(favProd, 1);
        let updatedArr = isFavourite.filter((elem) => elem.id !== deletedItem.map((elem) => elem.id));
        setIsFavourite(updatedArr);
    };

    const handleTotalPayment = () => {
        let total = 0 ;
        cartItems.map((elem) => {
            return (
                total+=elem.price
            )
        })
        total = total.toFixed(2)
      setEstimatedTotal(total);
    }



    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(({data}) => {
            setProductList(data)
        })

    };


    const value = {
        productList,
        cartItems,
        isFavourite,
        estimatedTotal,
        handleAddToCart,
        handleRemoveFromCart,
        fetchProducts,
        handleAddToFavourites,
        handleRemoveFromFavourites,
        handleTotalPayment
    }


    return (

        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )

}

export {Provider};
export default DataContext;
import React, {createContext, useState} from 'react';
import axios from "axios";


const DataContext = createContext({})

const Provider = ({children}) => {

    const [productList, setProductList] = useState([]);
    const [product, setProduct] = useState({})
    const [cartItems, setCartItems] = useState([]);
    const [isFavourite, setIsFavourite] = useState([]);
    const [estimatedTotal, setEstimatedTotal] = useState(0);
    const [quantity, setQuantity] = useState({});

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

    const handleQtyChange = (event, elemId) => {
        const {value} = event.target;
        setQuantity((prevSelectedValues) => ({
            ...prevSelectedValues,
            [elemId]: value,
        }));
    };

    const handleTotalPayment = () => {
        let total = 0;
        let calPrice = 0
        if (quantity) {
            let quantityIds = Object.keys(quantity);
            let filteredCartItems = cartItems.filter(item => quantityIds.includes(item.id.toString()));
            filteredCartItems.map((elem) => {
                return (
                    calPrice += elem.price * (quantity[elem.id] - 1)
                )
            });

        }
        cartItems.map((elem) => {
            return (
                total += elem.price
            )
        })
        total = Number(total.toFixed(2)) + Number(calPrice.toFixed(2))
        setEstimatedTotal(total);
    }


    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(({data}) => {
            setProductList(data)
        })
    };

    const getProduct = (id) => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then(({data}) => {
            setProduct(data)
        })

    }


    const value = {
        productList,
        product,
        cartItems,
        isFavourite,
        estimatedTotal,
        quantity,
        handleAddToCart,
        handleRemoveFromCart,
        fetchProducts,
        handleAddToFavourites,
        handleRemoveFromFavourites,
        handleTotalPayment,
        getProduct,
        handleQtyChange,
    }


    return (

        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )

}

export {Provider};
export default DataContext;
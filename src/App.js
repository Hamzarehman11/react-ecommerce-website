import './App.css';


import {Route, Routes} from "react-router-dom";

import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import ProductItem from "./components/ProductItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";
import axios from "axios";
import {useEffect} from "react";



function App() {

    const [productList, setProductList] = useState([]);

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (id) => {
        let cartProd = productList.filter((elem)=> elem.id === id);
        const singleObject = Object.assign({}, ...cartProd);
        setCartItems(prevState => [...prevState, singleObject])
    };




    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products').then(({data}) => {
            setProductList(data)
        })

    };



    useEffect(() =>{
        fetchProducts();
    },[]);

    return (
        <div className="App">
            <Header cartItems={cartItems}/>
            <Routes>
                <Route path={'/'} element={<HomePage productList={productList} handleAddToCart={(id)=>handleAddToCart(id)}  />}/>
                <Route path={'/cart'} element={<CartPage cartItems={cartItems} />}/>
                <Route path={'/product-item'} element={<ProductItem/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;

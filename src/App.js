import './App.css';


import {Route, Routes} from "react-router-dom";

import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";
import ProductItem from "./components/ProductItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Provider} from "./Context/data";


function App() {


    return (
        <Provider>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'/'}
                           element={<HomePage/>}/>
                    <Route path={'/cart'} element={<CartPage/>}/>
                    <Route path={'/product/item/:id'} element={<ProductItem/>}/>
                </Routes>
                <Footer/>
            </div>
        </Provider>
    );
}

export default App;

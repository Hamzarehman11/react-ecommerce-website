import React, {useState} from 'react'
import axios from "axios";
import ProductCard from "./ProductCard";


const ProductsList = () => {

    const [productList, setProductList] = useState([])


    const showData = () => {
        axios.get('https://fakestoreapi.com/products').then(({data}) => {
            setProductList(data)
        })

    }



    const productCard = productList.map((elem) => {

        return (

            <ProductCard title={elem.title} price={elem.price} image={elem.image} minWidth={345} maxWidth={345}
                         maxHeight={500} minHeight={500} mediaHeight={340}/>
        )
    })

    return (
        <>
            <div className="container-fluid product-list">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
                        {productCard}
                        <button onClick={showData}>Click to get data</button>
                    </div>
                </div>
            </div>
        </>

    )
};


export default ProductsList;
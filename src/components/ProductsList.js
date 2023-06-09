import React, {useContext} from 'react'
import ProductCard from "./ProductCard";
import DataContext from "../Context/data";


const ProductsList = () => {


    const {productList, searchTerm} = useContext(DataContext);

    const filterSearch = () => {
        if (searchTerm === '') {
            return productList.map((elem) => {

                return (

                    <ProductCard key={elem.id} elemId={elem.id} title={elem.title} price={elem.price} image={elem.image}
                                 minWidth={345}
                                 maxWidth={345}
                                 maxHeight={500} minHeight={500} mediaHeight={340}/>
                )
            })
        } else {
            return productList.filter((elem) => {
                return elem.title.toLowerCase().includes(searchTerm.toLowerCase())
            }).map((elem) => {

                return (

                    <ProductCard key={elem.id} elemId={elem.id} title={elem.title} price={elem.price} image={elem.image}
                                 minWidth={345}
                                 maxWidth={345}
                                 maxHeight={500} minHeight={500} mediaHeight={340}/>
                )
            })
        }
    }


    return (
        <>
            <div className="container-fluid product-list">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center align-items-center flex-wrap">
                        {filterSearch()}
                    </div>
                </div>
            </div>
        </>

    )
};


export default ProductsList;
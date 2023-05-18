import React from 'react'


import CarouselBackground1 from '../assets/images/carousal-bg.jpg'
import CarouselBackground2 from '../assets/images/carousal-bg-1.jpg'
import CarouselBackground3 from '../assets/images/carousal-bg-2.jpg'


const BannerCarousel = () => {


    return (
        <>
            <div id="banner-carousel" className="carousel slide mt-3"  data-bs-ride="carousel" data-bs-interval='3000'>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CarouselBackground1} className="d-block w-100 c-img" alt="..."/>
                        <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                            <h1 className={'c-heading display-1  fs-1 fw-bolder'}>Get 50% Discount on all Items</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={CarouselBackground2} className="d-block w-100 c-img" alt="..."/>
                        <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                            <h1 className={'c-heading display-1  fs-1 fw-bolder'}>Get Free of Cost Shipping</h1>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={CarouselBackground3} className="d-block w-100 c-img" alt="..."/>
                        <div className="carousel-caption top-0 mt-5 d-none d-md-block">
                            <h1 className={'c-heading display-1 fs-1 fw-bolder'}>Download Our Mobile App Now!</h1>

                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#banner-carousel"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#banner-carousel"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>

    )
};


export default BannerCarousel;
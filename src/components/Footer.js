import React from "react";


import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';
import Divider from "@mui/material/Divider";


const Footer = () => {

    const footerLinks = {
        specialDiscounts: ['Promo Codes', 'Teacher Discounts', 'Military Discounts', 'Medical & First Responder', 'Student Discount'],
        support: ['Help', 'Return & Exchanges', 'Shipping', 'Track Order', 'Payments Accepted', 'Gift Cards', 'Unsubscribe', 'Feedback', 'Accessibility'],
        company: ['About Us', 'Our Values', 'Careers', 'Affiliate Program', 'Submit Your Idea'],
        store: ['Find a Store', 'Store Services', 'Shop by Appointment', 'Secondhand Products']
    };

    const discountsLink = footerLinks.specialDiscounts.map((elem) => {
        return (
            <ul key={elem} className={'text-start p-0'}>
                <li className={'footer-links'}>{elem}</li>
            </ul>
        )
    });

    const supportLink = footerLinks.support.map((elem) => {
        return (
            <ul key={elem} className={'text-start p-0'}>
                <li className={'footer-links'}>{elem}</li>
            </ul>
        )
    });

    const companyLink = footerLinks.company.map((elem) => {
        return (
            <ul key={elem} className={'text-start p-0'}>
                <li className={'footer-links'}>{elem}</li>
            </ul>
        )
    });

    const storeLink = footerLinks.store.map((elem) => {
        return (
            <ul key={elem} className={'text-start p-0'}>
                <li className={'footer-links'}>{elem}</li>
            </ul>
        )
    });

    return (
        <div className={'footer container-fluid'}>
            <div className="row">
                <div className="col-8 text-center">
                    <div className="row">
                        <div className="col-3">
                            <p className={'footer-links-title text-start mb-3'}>Special Discounts</p>
                            {discountsLink}
                        </div>
                        <div className="col-3">
                            <p className={'footer-links-title text-start mb-3'}>Support</p>
                            {supportLink}
                        </div>
                        <div className="col-3">
                            <p className={'footer-links-title text-start mb-3'}>Company</p>
                            {companyLink}
                        </div>
                        <div className="col-3">
                            <p className={'footer-links-title text-start mb-3'}>Store</p>
                            {storeLink}
                        </div>
                    </div>
                </div>
                <div className="col-4 text-center">
                    <div className="row">
                        <div className="col-12 ">
                            <span className={'fw-bolder fs-4'}>Our Social Media</span>
                            <div className={'social-icon-footer'}>
                                <a href="http://localhost:3000/"><img src={navIcon1} alt=""/></a>
                                <a href="http://localhost:3000/"><img src={navIcon2} alt=""/></a>
                                <a href="http://localhost:3000/"><img src={navIcon3} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <Divider className={'mt-5'} color={'black'}/>
                    <div className="row mt-5">
                        <div className="col-12">
                            <div className={'d-flex flex-column align-items-center'}>
                                <span className={'d-block fw-bolder fs-3'}>50% OFF + FREE SHIPPING</span>
                                <p className={'footer-terms p-0 w-75 text-start'}>Send me news and offers from the
                                    LS&Co. Group of Companies. <br/> I can unsubscribe
                                    at any time. I have read the LS&Co. Privacy Policy.<br/> Offer details, financial
                                    incentives and exclusions available here.</p>
                            </div>
                            <div>
                                <input className={'subscription-input'} type="text" placeholder={'Email'}/>
                            </div>
                            <div>
                                <button className={'add-to-cart-btn signUp-btn mt-3'}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row rights-reserved-footer">
                <div className="col-12 text-center">
                    <p>All rights Reserved</p>
                </div>
            </div>
        </div>
    )
}


export default Footer;
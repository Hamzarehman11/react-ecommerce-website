import React from "react";

import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


import Navbar from "./Navbar";
import {Button, styled} from "@mui/material";


const Header = ({ cartItems }) => {

    const SignInButton = styled(Button)(({theme}) => ({
        color: 'black',
        backgroundColor: 'white',
        textTransform: 'none',
        '&:hover': {
            color: 'white',
            border: '1px solid white'
        },
    }));

    const SignUpButton = styled(Button)(({theme}) => ({
        color: 'White',
        backgroundColor: 'none',
        textTransform: 'none',
    }));

    return (
        <>
            <div className={'container-fluid bg-dark py-2'}>
                <div className="row">
                    <div className="col-7 d-flex justify-content-end align-items-center gap-3">
                        <div className={'social-icon-text text-white'}>
                            <p className={'m-0'}>Follow us on these socials websites</p>
                        </div>
                        <div className={'social-icon'}>
                            <a href="http://localhost:3000/"><img src={navIcon1} alt=""/></a>
                            <a href="http://localhost:3000/"><img src={navIcon2} alt=""/></a>
                            <a href="http://localhost:3000/"><img src={navIcon3} alt=""/></a>
                        </div>
                    </div>
                    <div className="col-5 d-flex justify-content-end align-items-center gap-3">
                        <div>
                            <SignUpButton variant="text">Sign Up</SignUpButton>
                        </div>
                        <div>
                            <SignInButton variant="text" size={'small'}>Sign In</SignInButton>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar cartItems={cartItems}/>
        </>
    )
}


export default Header;
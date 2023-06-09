import React, {useContext, useState} from "react";

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Logo from "../assets/images/logo.png"


import TemporaryDrawer from "./CheckoutDrawer";
import {Badge, styled} from "@mui/material";
import DataContext from "../Context/data";
import {Link} from "react-router-dom";


const Navbar = () => {

    const {isFavourite,handleSearchTerm} = useContext(DataContext);


    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: 22,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: '#c41320'
        },
    }));


    return (
        <>
            <div className={'navbar-main container-fluid mt-2'}>
                <div className="row">
                    <div
                        className="col-xl-4 col-lg-6 nav-links d-xl-flex justify-content-center align-items-center gap-4 d-lg-none d-md-none">
                        <h6>Men</h6>
                        <h6>Women</h6>
                        <h6>Children</h6>
                        <h6>Accessories</h6>
                    </div>
                    <div className="col-xl-4 col-lg-12 text-center">
                        <Link to={'/'}>
                            <img className={'logo'} src={Logo} alt=""/>
                        </Link>
                    </div>
                    <div
                        className="col-xl-4 col-lg-6 nav-links d-xl-none justify-content-center align-items-center gap-4 d-lg-flex d-md-flex">
                        <h6>Men</h6>
                        <h6>Women</h6>
                        <h6>Children</h6>
                        <h6>Accessories</h6>
                    </div>
                    <div className="col-xl-4 col-lg-6 d-flex justify-content-center align-items-center">
                        <div className="col-8">
                            <SearchIcon/>
                            <input onChange={(e)=>handleSearchTerm(e)} className={'search-input'} type="text"
                                   placeholder={"What are you looking for?"}/>
                        </div>
                        <div className="col-4">
                            <StyledBadge badgeContent={isFavourite.length} color="secondary">
                                <FavoriteBorderOutlinedIcon className={'mx-4'}/>
                            </StyledBadge>
                            <TemporaryDrawer/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Navbar;
import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography} from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DataContext from "../Context/data";
import Box from "@mui/material/Box";
import {useNavigate} from "react-router-dom";


const ProductCard = ({elemId, image, title, price, maxWidth, minWidth, maxHeight, minHeight, mediaHeight}) => {


    const {
        cartItems, handleAddToCart, handleRemoveFromCart, handleAddToFavourites, handleRemoveFromFavourites,
        isFavourite, handleTotalPayment,getProduct
    } = useContext(DataContext);

    const navigate = useNavigate();

    const [inCart, setInCart] = useState(false);
    const [liked, setLiked] = useState(false);
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    const handleInCart = () => {
        if (cartItems) {
            let check = cartItems.findIndex((elem) => elem.id === elemId)
            if (check === -1) {
                setInCart(false)
            } else {
                setInCart(true)
            }
        }
    }

    const handleIsFavourite = () => {
        if (isFavourite) {
            let check = isFavourite.findIndex((elem) => elem.id === elemId)
            if (check === -1) {
                setLiked(false)
            } else {
                setLiked(true)
            }
        }
    }

    const handleRemoveCartItem = (event, id) => {
        handleInCart();
        handleRemoveFromCart(id);
        handleTotalPayment();
        event.stopPropagation();
    };

    const handleRemoveFavourite = (event, id) => {
        handleIsFavourite();
        handleRemoveFromFavourites(id);
        event.stopPropagation();
    };

    const handleAddCartItem = (event, id) => {
        setIsAddedToCart(true)
        handleInCart()
        setTimeout(() => {
            handleAddToCart(id);
            setIsAddedToCart(false)
        }, 1000)
        event.stopPropagation();
    };

    const handleAddFavourite = (event, id) => {
        handleIsFavourite();
        handleAddToFavourites(id);
        event.stopPropagation();
    };

    const handleProductClick = () => {
        getProduct(elemId)
        navigate('/product/item/:id');
    }

    useEffect(() => {
        handleInCart();
        handleIsFavourite();
        handleTotalPayment();
    }, [cartItems, isFavourite])



    return (
        <Card onClick={() => handleProductClick()} className={'product-card'}
              sx={{maxWidth, minWidth, maxHeight, minHeight, marginLeft: 5, marginTop: 5}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height={mediaHeight}
                image={image}
            />
            <CardContent>
                <Typography className={'text-truncate'} gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {price}$
                </Typography>
            </CardContent>
            <CardActions>
                {!liked &&
                    <FavoriteBorderRoundedIcon onClick={(e) => handleAddFavourite(e, elemId)} color={'warning'}/>}
                {liked && <FavoriteOutlinedIcon onClick={(e) => handleRemoveFavourite(e, elemId)} color={'warning'}/>}
                {!inCart &&
                    <Button onClick={(e) => handleAddCartItem(e, elemId)} className={'mx-3'} size="small"
                            variant={'contained'} disabled={isAddedToCart}>{isAddedToCart ?
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            <CircularProgress color="inherit" size={20}/>
                        </Box>
                        : 'Add to Cart'}</Button>}
                {inCart &&
                    <Button onClick={(e) => handleRemoveCartItem(e, elemId)} className={'mx-3'} color={'error'}
                            size="small"
                            variant={'contained'}>Remove from Cart</Button>}
            </CardActions>
        </Card>
    )
};


export default ProductCard;
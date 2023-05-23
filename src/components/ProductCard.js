import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import DataContext from "../Context/data";


const ProductCard = ({elemId, image, title, price, maxWidth, minWidth, maxHeight, minHeight, mediaHeight}) => {


    const {cartItems, handleAddToCart, handleRemoveFromCart, handleAddToFavourites, handleRemoveFromFavourites,
        isFavourite, handleTotalPayment} = useContext(DataContext);

    const [inCart, setInCart] = useState(false);
    const [liked, setLiked] = useState(false);

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

    const handleRemoveCartItem = (id) => {
        handleInCart();
        handleRemoveFromCart(id);
        handleTotalPayment();
    };

    const handleRemoveFavourite = (id) => {
        handleIsFavourite();
        handleRemoveFromFavourites(id);
    };

    const handleAddCartItem = (id) => {
        handleInCart()
        handleAddToCart(id);
    };

    const handleAddFavourite = (id) => {
        handleIsFavourite();
        handleAddToFavourites(id);
    };

    useEffect(() => {
        handleInCart();
        handleIsFavourite();
        handleTotalPayment();
    }, [cartItems,isFavourite])


    return (
        <Card className={'product-card'} sx={{maxWidth, minWidth, maxHeight, minHeight, marginLeft: 5, marginTop: 5}}>
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
                {!liked && <FavoriteBorderRoundedIcon onClick={() => handleAddFavourite(elemId)} color={'warning'}/>}
                {liked && <FavoriteOutlinedIcon onClick={() => handleRemoveFavourite(elemId)} color={'warning'}/>}
                {!inCart &&
                    <Button onClick={() => handleAddCartItem(elemId)} className={'mx-3'} size="small" variant={'contained'}>Add
                        to Cart</Button>}
                {inCart && <Button onClick={()=>handleRemoveCartItem(elemId)} className={'mx-3'} color={'error'} size="small"
                                   variant={'contained'}>Remove from Cart</Button>}
            </CardActions>
        </Card>
    )
};


export default ProductCard;
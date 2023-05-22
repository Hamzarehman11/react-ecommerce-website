import React, {useContext, useEffect, useState} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import DataContext from "../Context/data";


const ProductCard = ({elemId, image, title, price, maxWidth, minWidth, maxHeight, minHeight, mediaHeight}) => {


    const {cartItems, handleAddToCart, handleRemoveFromCart} = useContext(DataContext);

    const [inCart, setInCart] = useState(false);

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

    const handleRemove = () => {
        handleInCart();
        handleRemoveFromCart();
    }

    const handleAdd = (id) => {
        handleInCart()
        handleAddToCart(id);
    }

    useEffect(() => {
        handleInCart();
    }, [cartItems])


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
                <FavoriteBorderRoundedIcon color={'warning'}/>
                {/*<FavoriteRoundedIcon color={'warning'} />*/}
                {!inCart &&
                    <Button onClick={() => handleAdd(elemId)} className={'mx-3'} size="small" variant={'contained'}>Add
                        to Cart</Button>}
                {inCart && <Button onClick={handleRemove} className={'mx-3'} color={'error'} size="small"
                                   variant={'contained'}>Remove from Cart</Button>}
            </CardActions>
        </Card>
    )
};


export default ProductCard;
import React from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";



const ProductCard = ({elemId, image, title, price, maxWidth, minWidth, maxHeight, minHeight, mediaHeight, handleAddToCart}) => {



    return (
        <Card className={'product-card'} sx={{ maxWidth ,minWidth, maxHeight, minHeight , marginLeft: 5, marginTop: 5 }}>
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
                <FavoriteBorderRoundedIcon color={'warning'} />
                {/*<FavoriteRoundedIcon color={'warning'} />*/}
                <Button onClick={()=>handleAddToCart(elemId)} className={'mx-3'} size="small" variant={'contained'}>Add to Cart</Button>
            </CardActions>
        </Card>
    )
};


export default ProductCard;
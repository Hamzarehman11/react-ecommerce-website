import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, Button, Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";

import {useNavigate} from 'react-router-dom'


export default function TemporaryDrawer({cartItems}) {

    const navigate = useNavigate();
    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };


    const items = cartItems.map((item) => {
        return (
            <>
                <Card sx={{maxWidth: 345, marginTop: "15px", borderBottom: '2px solid black'}}>
                    <CardMedia
                        sx={{height: 200, transform: "scale(0.8)"}}
                        image={item.image}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.dark"  component="div" sx={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                            ${item.price}
                        <Typography variant="body2" color="text.dark">
                            Qty: {1}
                        </Typography>
                        </Typography>
                        <Typography  variant="body2">
                           Subtotal: ${item.price}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color={'error'} variant={'contained'}>Remove</Button>
                    </CardActions>
                </Card>
            </>

        )
    })


    const list = () => (
        <Box
            sx={{width: 650, maxHeight: 855, paddingLeft: 5, paddingRight: 25, overflowX:'hidden', overflowY:'auto'}}
            role="presentation"
        >
            {items}
        </Box>
    );


    const handleClick = () => {
        setState({...state, 'right': false});
        navigate('/cart')
    };

    const StyledBadge = styled(Badge)(({theme}) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: "#c41320"
        },
    }));

    console.log(state)

    return (
        <React.Fragment key={'right'}>
            <StyledBadge badgeContent={cartItems.length} color="secondary">
                <ShoppingCartOutlinedIcon className={'cart-icon'} onClick={toggleDrawer('right', true)}/>
            </StyledBadge>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('top')}
                <div className={'mt-5'}>
                    <Divider color={'black'} />
                    <div className={'p-3 px-5 d-flex justify-content-between align-items-center'}>
                        <h5 >Estimated Total</h5>
                        <h5 className={'fw-bolder'} >$750</h5>
                    </div>
                </div>
                <div className={'mt-1 mb-2 d-flex flex-column justify-content-between align-items-center gap-3'}>
                    <button className={'check-out-btn drawer-btn mt-3'} onClick={handleClick} >Checkout</button>
                </div>
            </Drawer>
        </React.Fragment>
    );
}
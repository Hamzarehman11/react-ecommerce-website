import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, Button, Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";

import jeansPic from '../assets/images/jeans.jpg'

export default function TemporaryDrawer() {

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const cardItems = [
        {
            name: 'Men Jeans',
            description: 'Whatever you want to write here',
            price: '9.99$'
        },
        {
            name: 'Men Jeans',
            description: 'Whatever you want to write here',
            price: '9.99$'
        }
    ]

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const cartItems = cardItems.map((item) => {
        return (
            <Card sx={{minWidth: 345}}>
                <CardMedia
                    sx={{height: 240}}
                    image={jeansPic}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.dark">
                        {item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color={'warning'}>Delete</Button>
                </CardActions>
                <Divider/>
            </Card>
        )
    })


    const list = (anchor) => (
        <Box
            sx={{width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550, padding: 5}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            {cartItems}
        </Box>
    );

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
            backgroundColor: "#c41320"
        },
    }));

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
            </Drawer>
        </React.Fragment>
    );
}
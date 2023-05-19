import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Badge, Button, Card, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";



export default function TemporaryDrawer({cartItems}) {

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

    console.log(cartItems)

    const items = cartItems.map((item) => {
        return (
            <Card sx={{maxWidth: 245}}>
                <CardMedia
                    sx={{height: 240}}
                    image={item.image}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title}
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
            {items}
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
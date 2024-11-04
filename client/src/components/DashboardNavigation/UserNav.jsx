import React from 'react';
import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Link, useNavigate } from 'react-router-dom';
import { ListItem } from '@mui/material';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export default function UserNav() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    //modify accordingly
    const handleLogout = () => {
        try {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            navigate("/");
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'yellow',
                backgroundImage: 'none',
                mt: 'calc(var(--template-frame-height, 0px) + 10px)',
            }}
        >
            <Container maxWidth="lg">
                <StyledToolbar variant="dense" disableGutters>
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                        <TipsAndUpdatesIcon sx={{ color: 'black' }} />
                        <Button
                            variant="text"
                            component={Link}
                            to="/user/dashboard"
                            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
                        >
                            Your Stats
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 1,
                            alignItems: 'center',
                        }}
                    >
                        <Button
                            variant="text"
                            component={Link}
                            to="/user/sell"
                            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
                        >
                            Sell Units
                        </Button>
                        <Button
                            variant="text"
                            component={Link}
                            to="/user/market"
                            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
                        >
                            Marketplace
                        </Button>
                        <Button
                            variant="text"
                            component={Link}
                            to="/user/history"
                            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
                        >
                            Transaction History
                        </Button>
                        <Button
                            variant="text"
                            onClick={handleLogout}
                            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
                        >
                            Log Out
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                        <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="top"
                            open={open}
                            onClose={toggleDrawer(false)}
                            PaperProps={{
                                sx: {
                                    top: 'var(--template-frame-height, 0px)',
                                },
                            }}
                        >
                            <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </Box>
                                <MenuItem>
                                    <Link to="/user/dashboard" color="primary" variant="text" size="small">
                                        Your Stats
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/user/sell" color="primary" variant="text" size="small">
                                        Sell Units
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/user/market" color="primary" variant="text" size="small">
                                        Marketplace
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Link to="/user/history" color="primary" variant="text" size="small">
                                        Transaction History
                                    </Link>
                                </MenuItem>
                                <MenuItem>
                                    <Button variant='contained' color='red' sx={{ fontWeight: 'bold', py: 1.5, mb: 2 }}>
                                        Log Out
                                    </Button>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </StyledToolbar>
            </Container>
        </AppBar>
    );
}
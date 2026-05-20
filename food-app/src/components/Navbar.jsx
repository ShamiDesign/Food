import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/logo.png"
import { useAuth } from '../context/Auth/AuthContext';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const {email, token}=useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate=useNavigate ();
  const handelLogin=()=>{
    navigate("/login");
  }
console.log("from Nav", {email, token})
  return (
    <AppBar position="static"   sx={{
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)",
  }}>
      <Container maxWidth="xl" sx={{backgroundColor: "#fff" ,}}>
        <Toolbar disableGutters>
         
            <img src={logo} className='w-[40px] pe-2'/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              
              color:" var(--main-color)",
              textDecoration: 'none',
            }}
          >
            Food Hup
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem  onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' , color: "var(--main-color)" }}>Home</Typography>
                
                </MenuItem>
                <MenuItem  onClick={handleCloseNavMenu}>
                  
                  <Typography sx={{ textAlign: 'center', color: "var(--main-color)" }}>About</Typography>
                </MenuItem>
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
               color: "var(--main-color)",
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: "center",
  alignItems: "center",}}>
              <Link to={"/"}><Button
               
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block',  color: "var(--main-color)" }}
              >
                Home
              </Button>
              </Link>
              <Link to={"/about"}>
              <Button
               
               onClick={handleCloseNavMenu}
               sx={{ my: 2, display: 'block',  color: "var(--main-color)"  }}
               >
                About
              </Button>
                </Link>
           
          </Box>
          <Box sx={{ flexGrow: 0 }}>
                <Button variant="contained" onClick={handelLogin}
                sx={{ background: "var(--main-color)", mx:2}} > Login</Button>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Food Sharp" src="" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Box, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const NavLink = ({ item, mobile }) => (
    <Link
      to={item.toLowerCase()}
      spy={true}
      smooth={true}
      duration={500}
      offset={-70}
      onClick={() => mobile && setMobileOpen(false)}
    >
      <Button 
        sx={{
          mx: mobile ? 0 : 1,
          my: mobile ? 1 : 0,
          color: 'white',
          fontSize: mobile ? '1.1rem' : '1rem',
          width: mobile ? '100%' : 'auto',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
          }
        }}
      >
        {item}
      </Button>
    </Link>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        sx={{
          background: isScrolled ? 'rgba(0, 30, 60, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 2px 28px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s'
        }}
      >
        <Container>
          <Toolbar sx={{ py: 1 }}>
            <Typography 
              variant="h6" 
              sx={{ 
                flexGrow: 1,
                fontWeight: 700,
                background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Abdul.dev
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navItems.map((item) => (
                <NavLink key={item} item={item} />
              ))}
            </Box>
            <IconButton
              onClick={() => setMobileOpen(true)}
              sx={{ display: { xs: 'block', md: 'none' }, color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: '300px',
            background: '#001e3c',
            px: 2
          }
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', pt: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ mt: 2 }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <NavLink item={item} mobile={true} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
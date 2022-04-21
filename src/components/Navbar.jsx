import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import cw from "../assets/cw.jpeg"

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <img src={cw} alt="cw" width="50" height="50" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:"center" }}>
            {"<CLARUSWAY/>"}
          </Typography>
          <Avatar src="/broken-image.jpg" />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

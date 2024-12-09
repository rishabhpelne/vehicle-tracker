import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


function Header({title}) {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
           
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Google Map Vehicle Live Tracking Simulation
            </Typography>
        
            
            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header

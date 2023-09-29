import { Box, Button, Stack, Typography, useTheme,useMediaQuery } from '@mui/material'
import { green, indigo, pink, white, grey } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Container from '@mui/material/Container';

function ElevationScroll(props) {

    const { children, window, theme, onlySmallScreen } = props;

    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 25,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      style:{
        // backgroundColor: trigger ? "white" : "transparent",
        transition: trigger ? "0.3s" : "0.5s",
      }, 
      sx:{
        zIndex: 1000,
        width: '80%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        borderRadius:8,
        paddingX: onlySmallScreen ? '2%' : 16,
        marginTop:1, 
        color: "#333", 
        boxShadow: trigger ? 4 : 0,
        bgcolor: trigger? "rgb(250 250 250)" : 'transparent',
      },
      zIndex: 1,
      paddingY: 1
    });
  }

const Navbar = (props) => {

  const theme = useTheme()
  const onlySmallScreen = useMediaQuery(theme.breakpoints.down("desktop"));
  console.log(onlySmallScreen)

  return (
    <Box display={'flex'} justifyContent={'center'}>
        <ElevationScroll {...props} theme={theme} onlySmallScreen={onlySmallScreen}>
            <Box>
            
                    <Box>
                        <Box component={'img'} src={'icons/logo2.png'}/>
                    </Box>

                    <Box display={'flex'} flexDirection={"row"} gap={4} marginRight={8}>
                        <Link to={'/'}><Typography>Link 1</Typography></Link>
                        <Link to={'/'}><Typography>Link 2</Typography></Link>
                        <Link to={'/'}><Typography>Link 3</Typography></Link>
                        <Link to={'/'}><Typography>Link 4</Typography></Link>
                    </Box>

                    <Box marginRight={'auto'} >
                        <Link to={'/login'}><Button color='primary'  sx={{
                            borderRadius: 8,
                            }} variant="contained"><Typography variant='body2'>ورود / ثبت نام</Typography>
                          </Button>
                          </Link>
                    </Box>
            </Box>
        </ElevationScroll>
    </Box>
  )
}

export default Navbar

import { Box, Button, Paper, Typography, useTheme } from '@mui/material'
import { purple } from '@mui/material/colors'
import React, { useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

const Slider = ({slides}) => {
    const theme = useTheme()
    const xs_view = useMediaQuery(theme.breakpoints.down("sm"));
    const sm_view = useMediaQuery(theme.breakpoints.down("md"));
    const md_view = useMediaQuery(theme.breakpoints.up("md"));
    let iCount = 0
    if(xs_view){
        iCount = 1
    }else if (sm_view){
        iCount = 2
    }else iCount = 3
    const [itemsCount, setItemsCount] = useState(iCount) 
    const [itemsPer, setItemsPer] = useState(0)
    const buttons = []
    for(let i = 0 ; i < Math.ceil(slides.length / itemsCount) ; i++){
        buttons.push(<Button variant={i == itemsPer ? 'contained' : null} color='primary' sx={{
            minWidth: 'unset',
            padding: 1,
            
            borderRadius: '50%',
            border: '1px solid #33333333',
            boxShadow: 'none',
            '&.MuiButtonBase-root:hover':{
                boxShadow: 'none',
            },

        }} onClick={() => setItemsPer(i)} key={i}></Button>)
    }
    
  return (
    <Box width={'100%'} overflow={'hidden'}>
        <Box display={'flex'} width={'100%'} sx={{transform: `translateX(${itemsPer*100}%)`, transition:'all 300ms'}}>
        {slides.map((slide, index) => {
            return <Box key={index} sx={{
                flex:{xs: `0 0 ${100/1}%`, sm: `0 0 ${100/2}%`, md: `0 0 ${100/3}%`},
                maxWidth:{xs: `${100/1}%`, sm: `${100/2}%`, md: `${100/3}%`},
                padding:2.5
            }}>
                <Paper elevation={4} sx={{
                    padding: 3,
                    borderRadius: 2,
                }}>
                    <Box>
                        <Box>
                            <Box width={'100%'} component={'img'} src={slide.src}/>
                        </Box>
                        <Box textAlign={'center'}>
                            <Typography>{slide.title}</Typography>
                            <Typography>{slide.des}</Typography>
                        </Box>
                    </Box>
                </Paper>
            </Box>
        })}
        </Box>
        <Box display={'flex'} gap={1} justifyContent={'center'}>
            {buttons.map(btn => btn)}
        </Box>
    </Box>
  )
}

export default Slider

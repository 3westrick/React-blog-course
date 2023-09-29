import { Divider, Rating, Typography,IconButton, Icon, Button, Paper, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { grey, purple } from '@mui/material/colors';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const OurCourse = ({price, src, description, category, units, stars, rounded= false}) => {

    const theme = useTheme()
  return (
    <Box zIndex={1} sx={{
            flex:{xs: `0 0 ${100/1}%`, sm: `0 0 ${100/2}%`, md: `0 0 ${100/3}%`},
            maxWidth:{xs: `${100/1}%`, sm: `${100/2}%`, md: `${100/3}%`},
            padding:2.5,
    }}>
        <Paper  
        elevation={4}
        sx={{
            zIndex:1,
            padding:3,
            borderRadius:2,
        }}
        >
        <Box sx={{
            overflow: 'hidden',
            borderRadius: rounded ? 1 : '0',
            bgcolor: grey[900],
            position: 'relative',
            '&::before': {
                content: '""',
                position: 'absolute',
                transition : 'all 300ms ease-out',
                top: '1.25em',
                left: '1.25em',
                right: '1.25em',
                bottom: '1.25em',

                transform: 'scale(0,1)',
                borderTop: '1px solid white',
                borderBottom: '1px solid white',
            },
            '&:hover::before': {
                transform: 'scale(1.1,1)',
            },
            '&::after': {
                content: '""',
                position: 'absolute',
                transition : 'all 300ms',
                top: '1.25em',
                left: '1.25em',
                right: '1.25em',
                bottom: '1.25em',
                
                transform: 'scale(1,0)',
                borderLeft: '1px solid white',
                borderRight: '1px solid white',
            },
            '&:hover::after': {
                transform: 'scale(1,1.15)',
            },
            '&:hover > img': {
                opacity: 0.6,
            },
            
        }}>
            <Box
                component="img"
                src={src}
                width={'100%'}
                sx={{
                    transition : 'all 300ms',
                }}
            />
        </Box>

        <Box width={'100%'} display={'flex'} justifyContent={'space-between'}>
            <Typography>
                {category}
            </Typography>
            <Typography>
                {price}
            </Typography>
        </Box>

        <Box>
            <Typography>
                {description}
            </Typography>
        </Box>

        <Box>
            <Typography>
                <ArrowRightIcon color='primary' sx={{border: `1px solid`, borderRadius: '50%', fontSize: 16}} /> {units} درس 
            </Typography>
        </Box>

        <Divider variant={'fullWidth'} sx={{backgroundColor: theme.palette.primary.main}} />

        <Box marginTop={2} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Rating size='sm' name="read-only" value={stars} readOnly />
            <IconButton color='primary' sx={{
                    backgroundColor: theme.palette.primary.main,
                    padding:1.5,
                    color: '#fff',
                    '&:hover': {
                        background: theme.palette.primary.dark,
                    },
                }}>
                <ArrowBackIcon sx={{
                    fontSize: 16
                }}/>
            </IconButton>
        </Box>
    </Paper>
    </Box>
  )
}

export default OurCourse

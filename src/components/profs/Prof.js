import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Prof = ({src, name, description}) => {
  return (
    <Box zIndex={1} sx={{
        flex:{xs: `0 0 ${100/1}%`, sm: `0 0 ${100/2}%`, md: `0 0 ${100/3}%`},
        maxWidth:{xs: `${100/1}%`, sm: `${100/2}%`, md: `${100/3}%`},
        padding:2.5,
        marginTop: {xs: 4, sm: 4, md: 0}
    }}>
    <Paper elevation={4}
        sx={{
            padding:3,
            borderRadius:2,
            position: 'relative'
        }}>
          <Box component={'img'} src={src} sx={{
            position: 'absolute',
            width:120,
            left: '50%',
            transform: 'translate(-50%, -50%)',
            top: 0,
          }} />
          <Box marginTop={8} textAlign={'center'}>
            <Typography>
              {name}
            </Typography>
            <Typography>
              {description}
            </Typography>
          </Box>


      </Paper>
    </Box>
  )
}

export default Prof

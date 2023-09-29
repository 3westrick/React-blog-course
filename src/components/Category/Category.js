import { Box, Typography } from '@mui/material'
import React from 'react'

const Category = ({src, alt, title}) => {
  return (
    <Box bgcolor={'rgb(250 250 250)'} zIndex={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{
        textAlign: 'center',}}>
        <Box
            component="img"
            sx={{
                width: 150,
                maxWidth: { xs: 350, md: 250 },
            }}
            alt={alt}
            src={src}
        />
        <Typography>
            {title}
        </Typography>
    </Box>
  )
}

export default Category

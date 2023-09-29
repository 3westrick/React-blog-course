import { Box, Typography } from '@mui/material'
import React from 'react'

const Service = ({src, alt, title, description}) => {
  return (
    <Box className={'out_line_beam bg-neutral-50'} paddingY={2} borderRadius={4} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} sx={{
        textAlign: 'center',
        }}>
        <Box
            component="img"
            sx={{
                width: 75,
                maxWidth: { xs: 350, md: 250 },
            }}
            alt={alt}
            src={src}
        />
        <Box paddingX={2}>
            <Typography fontSize={20}>
                {title}
            </Typography>
            <Typography fontSize={16}>
                {description}
            </Typography>
        </Box>
    </Box>
  )
}

export default Service

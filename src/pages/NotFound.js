import { Typography, Box } from '@mui/material'
import React from 'react'

const NotFound = () => {
  return (
    <Box height={'90vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Typography className="underline" variant={'h1'}>
        Not Found
      </Typography>
    </Box>
  )
}

export default NotFound

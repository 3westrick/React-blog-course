import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <Box zIndex={1} marginTop={20}>
      <Box zIndex={1} component={'img'} src={'/images/footer.png'}/>
    </Box>
  )
}

export default Footer

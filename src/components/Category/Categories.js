import { Box, Grid, Typography, Stack } from '@mui/material'
import React from 'react'
import Category from './Category'
import { useInView } from 'react-intersection-observer';
import Cat_list from './Cat_list';

const Categories = () => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -70px 0px",
    triggerOnce: true,
  });


  return (
    <Box overflow={'hidden'} marginTop={{xs: 4, sm: 8, md: 16}} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>          
       <Box ref={ref} textAlign={'center'} marginBottom={{xs: 2, sm: 4, md: 10}} sx={{
        transition : 'all 600ms',
        position: 'relative',
        left: inView ? '0': '50%',
        translate: inView ? '0' : '50%'
       }}>
          <Typography variant='h3' component={'p'} sx={{
            fontWeight: '400',
            fontSize:{
              xs: 32,
              sm: 42
            }
          }}>
            دسته بندی ها
          </Typography>
      </Box>
      
      <Cat_list/>

    </Box>
  )
}

export default Categories

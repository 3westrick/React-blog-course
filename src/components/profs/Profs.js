import { Box, Typography } from '@mui/material'
import React from 'react'
import Prof from './Prof'

const profs = [
  {src: '/images/Ellipse 13.png',name: 'متن تست', description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما'},
  {src: '/images/Ellipse 14.png',name: 'متن تست', description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما'},
  {src: '/images/Ellipse 15.png',name: 'متن تست', description: 'اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما'},
]

const Profs = () => {
  return (
    <Box marginTop={{xs: 4, sm: 8, md: 16}}>
      <Box textAlign={'center'}>
        <Typography sx={{
          fontWeight: '400',
          fontSize:{
            xs: 32,
            sm: 42
          },
        }}>اساتید دوره</Typography>
      </Box>
      <Box>
        <Box paddingX={{xs: 0, sm: 8, md: 16}} display={'flex'} flexWrap={'wrap'} marginTop={{xs: 4, sm: 6, md: 12}}>
            {profs.map((prof,index) => <Prof key={index} src={prof.src} name={prof.name} description={prof.description}/>)}
        </Box>
      </Box>
    </Box>
  )
}

export default Profs

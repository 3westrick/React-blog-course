import { Box, Typography } from '@mui/material'
import React from 'react'
import Service from './Service'
import { useInView } from 'react-intersection-observer';

const services = [
  {alt: '', src: '/icons/SvgjsG1028.png', title: 'امتحان', description: 'لورم ایپسوم متن ساختگی با تولید سادگی'},
  {alt: '', src: '/icons/SvgjsG1038.png', title: 'مدرک معتبر', description: 'لورم ایپسوم متن ساختگی با تولید سادگی'},
  {alt: '', src: '/icons/SvgjsG1058.png', title: 'فرصت های شغلی ', description: 'لورم ایپسوم متن ساختگی با تولید سادگی'},
  {alt: '', src: '/icons/SvgjsG1068.png', title: 'مشاوره', description: 'لورم ایپسوم متن ساختگی با تولید سادگی'},
]

const Services = () => {
  const { ref, inView, entry } = useInView({
  /* Optional options */
    root: null,
    threshold: 0,
    rootMargin: "0px",
    triggerOnce: true,
  });
  return (
    <Box ref={ref} paddingX={{xs: 4, sm: 8, md: 16}} marginTop={inView ? -16 : 0} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}
    sx={{
      transition : 'all 600ms',
    }}
    >          
       <Box textAlign={'center'} marginBottom={{xs: 4, sm: 6, md: 10}}>
          <Typography component={'p'} sx={{
            fontWeight: '400',
            fontSize:{
              xs: 32,
              sm: 42
            }
          }}>
            خدمات ما
          </Typography>
          <Typography component={'p'} sx={{

              fontSize:{
                xs: 16,
                sm: 20
              }
          }}>
          لورم ایپسوم متن ساختگی با تولید سادگی
          </Typography>
      </Box>

      <Box  paddingX={{xs: 6, sm: 6, md: 8}}  display={'grid'} gap={{xs: 2, sm: 4, md: 6}} gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}>
          {services.map((service, index) => <Service key={index} alt={service.alt} src={service.src} title={service.title} description={service.description}/>)}
      </Box>
      </Box>
  )
}

export default Services

import { Box, Button, Typography, useTheme } from '@mui/material'
import { purple } from '@mui/material/colors'
import React from 'react'
import OurCourse from './OurCourse'
import { useInView } from 'react-intersection-observer';

const courses = [
  {price: 1000, category: 'ui/ux design', src: '/images/Intersect.png', description: 'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان', units:24, stars:5},
  {price: 1000, category: 'ui/ux design', src: '/images/Intersect.png', description: 'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان', units:4, stars:2},
  {price: 100000, category: 'ui/ux design', src: '/images/Intersect.png', description: 'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان', units:13, stars:3},
  {price: 90000, category: 'ui/ux design', src: '/images/Intersect.png', description: 'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان', units:12, stars:5},
  {price: 80000, category: 'ui/ux design', src: '/images/Intersect.png', description: 'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان', units:8, stars:1},
  {price: 5000, category: 'ui/ux design', src: '/images/Intersect.png', description: 'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان', units:20, stars:0},
]

const OurCourses = () => {
  const theme = useTheme()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -150px 0px",
    triggerOnce: true,
  });

  return (
    <Box paddingX={{xs: 0, sm: 8, md: 16}} marginTop={{xs: 4, sm: 8, md: 16}}>
        <Box textAlign={'center'}  marginBottom={{xs: 6, sm: 8, md: 10}}>
            <Typography ref={ref} sx={{           
               fontWeight: '400',
            fontSize:{
              xs: 32,
              sm: 42
            },
              position:'relative',
              '&::after':{                
                content: '""',
                position: 'absolute',
                transition : 'all 300ms',
                borderBottom:`3px solid ${theme.palette.primary.main}`,
                width:'100%',
                bottom: -2,
                left: 0,
                transformOrigin: 'center',
                transform: inView ?  'scale(1,1)' : 'scale(0,1)'
              },
              '&::before':{                
                content: '""',
                position: 'absolute',
                transition : 'all 600ms',
                borderBottom:`3px solid ${theme.palette.primary.main}`,
                width:'80%',
                bottom: -12,
                left: '50%',
                transformOrigin: 'center',
                translate: '-50%',
                scale: inView ?  '1' : '0',
              }
            }} 
            display={'inline'} component={'p'}>
                دوره های ما
            </Typography>
        </Box>

        {/* <Box display={'grid'} gridTemplateColumns={{ xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
            <OurCourse rounded={true} price={100} category={'ui/ux design'} src={'/images/Intersect.png'} description={'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان'} units={4} stars={5}/>
            <OurCourse rounded={true} price={100} category={'ui/ux design'} src={'/images/Intersect.png'} description={'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان'} units={4} stars={5}/>
            <OurCourse rounded={true} price={100} category={'ui/ux design'} src={'/images/Intersect.png'} description={'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان'} units={4} stars={5}/>
            <OurCourse rounded={true} price={100} category={'ui/ux design'} src={'/images/Intersect.png'} description={'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان'} units={4} stars={5}/>
            <OurCourse rounded={true} price={100} category={'ui/ux design'} src={'/images/Intersect.png'} description={'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان'} units={4} stars={5}/>
            <OurCourse rounded={true} price={100} category={'ui/ux design'} src={'/images/Intersect.png'} description={'اموزش پیشرفته ی دانت به صورت به روژه محور ، سایت فلان'} units={4} stars={5}/>
        </Box> */}

<Box>
  <Box width={'100%'}>
      <Box display={'flex'} width={'100%'} overflow="hidden" flexWrap={'wrap'}>
                {courses.map((course,index) => <OurCourse key={index} rounded={true} price={course.price} category={course.category} src={course.src} description={course.description} units={course.units} stars={course.stars}/>)}
                
        </Box>
    </Box>
</Box>
<Box display={'flex'} justifyContent={'center'}>
<Button variant='contained' sx={{ 
            marginTop: 4,
            borderRadius: 8
          }}>
          مشاهده بیشتر
        </Button>
</Box>
  </Box>
  )
}

export default OurCourses

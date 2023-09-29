import { Box } from '@mui/material'
import React from 'react'
import Category from './Category'
import { useInView } from 'react-intersection-observer';


const categories = [
  {alt: '', src: '/icons/SvgjsG1062.png', title: 'وب',},
  {alt: '', src: '/icons/SvgjsG1080.png', title: 'هک و امنیت',},
  {alt: '', src: '/icons/SvgjsG1114.png', title: 'هوش مصنوعی',},
  {alt: '', src: '/icons/SvgjsG1150.png', title: 'داده کاوی',},
  {alt: '', src: '/icons/SvgjsG1172.png', title: 'طراحی رابط کاربری',},
]


const Cat_list = () => {  
    const { ref, inView, entry } = useInView({
    /* Optional options */
    root: null,
    threshold: 0,
    rootMargin: "0px 0px -50px 0px",
    triggerOnce: true,
  });
  
  return (
    <Box zIndex={1} ref={ref} display={'flex'} flexWrap={'wrap'}  gap={{xs: 4, sm: 6, md: 12}} alignItems={'center'} justifyContent={'center'}
    sx={{
        transition : 'all 700ms',
        scale: inView ? '1': '0'
    }} >
      {categories.map((cat, index) => <Category key={index} alt={cat.alt} src={cat.src} title={cat.title}/>)}
    </Box>
  )
}

export default Cat_list

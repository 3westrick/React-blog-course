
import { Box, Typography, Grid, useTheme, TextField, InputBase, IconButton } from '@mui/material'
import { green } from '@mui/material/colors'
import React from 'react'
import Blogs from '../components/blogs/Blogs'
import Categories from '../components/Category/Categories'
import Comments from '../components/Comments'
import OurCourses from '../components/courses/OurCourses'
import Profs from '../components/profs/Profs'
import Services from '../components/services/Services'
import SearchIcon from '@mui/icons-material/Search';

const Home = () => {
  const theme = useTheme()
  return (
    <Box>
      <Box sx={{
        height: "100vh",
        paddingTop: {
          xs: '70px',
          sm : '100px'
        },
        overflow: 'hidden',
        paddingX: {
          xs: 4,
          sm: 8,
          md: 16,
        }
      }}>

<Box sx={{
  display: 'flex',
  justifyContent: 'center',
  flexDirection: {
    xs:'column',
    sm: 'row',
  },
}}>
        <Box position={'relative'} zIndex={10} sx={{
          flex: {
            xs: '0 0 50%',
            sm: '0 0 50%',
          }
        }}>
            <Box color={'white'} sx={{
              position: 'relative',
              zIndex: 1,
              paddingTop:{
                xs: 2,
                sm: 8,
                md: 8
              },
              paddingLeft:{
                xs: '15%',
                sm: 8,
                md: "20%"
              },
              '&::after':{
                content: '""',
                position: 'absolute',
                top: {
                  xs:0,
                  sm:50
                },
                left: {
                  xs: -32,
                  sm: 0
                },
                right: -50,
                bottom: {
                  xs: -50,
                  sm: -150
                },
                borderRadius: 4,
                backgroundColor: theme.palette.primary.main,
                rotate: '-10deg',
                transformOrigin: {
                  xs: 'center',
                  sm: 'top left'
                },
                zIndex: -1,
              }
            }}>
              <Box >
                <Typography  component={'p'} sx={{
                  zIndex: 2,
                }}>
                اکادمی بحر ....
                </Typography>
                <Typography sx={{
                  zIndex: 2,
                }}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                </Typography>
              </Box>

              <Box sx={{
                  bgcolor: 'white',
                  borderRadius: 8,
                  width: '100%',
                  display: 'flex',
                  marginTop: 2,
                  zIndex: 2,
                }}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, paddingRight: 2, zIndex: 2, fontSize: {xs: 12, sm: 24}}}
                    placeholder="دنبال چه چیزی هستید"
                    inputProps={{ 'aria-label': 'دنبال چه چیزی هستید' }}
                  />
                <IconButton type="button" sx={{ p: {xs: '5px', sm: '10px'}, zIndex: 2, }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Box>
            </Box>

            {/* <Box zIndex={1} sx={{
            position: 'absolute',
            display: {
              xs: 'none',
              md: 'block'
            },
            left: "20%",
            right: {
              md: -150
            },
            aspectRatio: {
              md: 1.2
            },
            backgroundColor: theme.palette.primary.main,
            top: {
              md: 0,
            },
            borderRadius: 16,
            transform: 'rotate(-15deg)',
            zIndex: 1,
          }}></Box> */}

        </Box>  

        <Box sx={{
            flex: {
              xs: '0 0 50%',
              sm: '0 0 50%',
            },
            
        }}>
          <Box component={'img'} src={'/images/developer-2080968 2.png'} sx={{
            width: {
              xs: '80%',
              sm: '100%',
            },
            marginTop:{
              xs: 8,
              sm: 4,
              md: 0,
            },
            marginX: 'auto'
          }}/>
        </Box>      
        
</Box>        
        
      </Box>

      <Services/>
      <Categories/>
      <OurCourses/>
      <Blogs/>
      <Profs/>
      <Comments/>

    </Box>
  )
  
}

export default Home

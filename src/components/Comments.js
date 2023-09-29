import { Box, Button, TextField, Typography,useTheme } from '@mui/material'
import React from 'react'
import { alpha, styled } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';


const CssTextField = styled(TextField)(({ theme }) => ({
    '& label.Mui-focused': {
        color: theme.palette.primary.main
    },
    '& label.MuiFormLabel-root':{
        transformOrigin: 'top right',
        left: 'unset',
        right: 20,
        color: theme.palette.primary.main
    },
    '& .MuiInputBase-root::after': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiInputBase-root::before': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiInputBase-root:hover::before': {
        borderBottomColor: theme.palette.primary.main,
    },
    '& .MuiInputBase-root': {
        backgroundColor: '#efefef'
    },

  }));

const Comments = () => {
  return (
    <Box paddingX={{xs: 4, sm: 16, md: 16}} mt={2}>
      <Box textAlign={'center'}>
        <Typography sx={{
            zIndex:2,
          fontWeight: '400',
          fontSize:{
            xs: 32,
            sm: 42
          },
        }}>
        پیشنهادات و انتقادات
        </Typography>
      </Box>

        <Box display={'flex'} flexDirection={{xs: 'column', md: 'row'}}>
            <Box zIndex={2} paddingLeft={{xs: 0, md: 8}} paddingTop={8} flex={' 0 0 45%'}>
                <Box>
                    <CssTextField fullWidth size='small' variant='filled' label="نام و نام خانوادگی" id="custom-css-outlined-input" sx={{borderRadius: 4, overflow:'hidden'}}/>
                </Box>
                <Box marginTop={3}>
                    <CssTextField fullWidth size='small' variant='filled' label="ایمیل" id="custom-css-outlined-input" sx={{borderRadius: 4, overflow:'hidden'}}/>
                </Box>
                <Box marginTop={3}>
                    <CssTextField multiline rows={5} fullWidth size='small' variant='filled' label="متن ..." id="custom-css-outlined-input" sx={{borderRadius: 4, overflow:'hidden'}}/>
                </Box>
                <Box marginTop={3} display={'flex'} justifyContent={'center'}>
                    <Button variant='contained' color='primary' sx={{
                        borderRadius: 8,
                        paddingX: 6
                    }}>
                    ثبت
                    </Button>
                </Box>
            </Box>

            <Box flex={' 0 0 55%'}>
                <Box marginX={'auto'} width={{xs: '80%', md: '100%'}} component={'img'} src={'/images/working-with-laptop-2080962 1.png'} />
            </Box>
        </Box>

    </Box>
  )
}

export default Comments

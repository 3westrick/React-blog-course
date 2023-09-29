import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Checkbox, Container, FormControlLabel, IconButton, InputAdornment, InputBase, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirm, setShowConfirm] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirm = () => setShowConfirm((show) => !show);

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };
    const handleMouseDownConfirm = (event) => {
        event.preventDefault();
    };
  return (
    <Container>
      <Box display={'flex'} alignItems={{xs: 'unset', sm: 'center'}} justifyContent={'space-between'} paddingTop={{xs:15, sm: 20, md: 10}} flexDirection={{xs: 'column', md:'row'}}>
        <Box flex={{xs:'0 0 50%', sm: '0 0 40%', ms:'0 0 30%'}}>
            <Box>
                <Typography variant='h4' component={'p'}>ساخت حساب‌کاربری</Typography>
                <Box zIndex={2}>
                    <Box>
                    <Typography component={'label'} htmlFor="phone">شماره تلفن‌همراه</Typography>
                    </Box>
                    <InputBase id='phone' fullWidth sx={{
                        zIndex: 2,
                        backgroundColor: '#ebf1f5', 
                        borderRadius: 8,
                        padding: "4px 16px",
                        }}/>
                </Box>
                <Box zIndex={2}>
                    <Box display={'flex'}>
                        <Typography component={'label'} htmlFor="username">نام کاربری</Typography>
                    </Box>
                    <InputBase type='text' id='username' fullWidth sx={{
                        zIndex: 2,
                        backgroundColor: '#ebf1f5', 
                        borderRadius: 8,
                        padding: "4px 16px",
                        }}/>
                </Box>

                <Box zIndex={2}>
                    <Box display={'flex'}>
                        <Typography zIndex={2} component={'label'} htmlFor="email">ایمیل</Typography>
                    </Box>
                    <InputBase id='email' fullWidth sx={{
                        zIndex: 2,
                        backgroundColor: '#ebf1f5', 
                        borderRadius: 8,
                        padding: "4px 16px",
                        }}/>
                </Box>

                <Box>
                    <Box display={'flex'}>
                        <Typography zIndex={2} component={'label'} htmlFor="password">رمزعبور</Typography>
                    </Box>
                    <InputBase  type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      } id='password' fullWidth sx={{
                        zIndex: 2,
                        backgroundColor: '#ebf1f5', 
                        borderRadius: 8,
                        padding: "4px 16px",
                        }}/>
                </Box>

                <Box>
                    <Box display={'flex'}>
                        <Typography zIndex={2} component={'label'} htmlFor="confirm">تکرار رمزعبور</Typography>
                    </Box>
                    <InputBase  type={showConfirm ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle confirm visibility"
                            onClick={handleClickShowConfirm}
                            onMouseDown={handleMouseDownConfirm}
                            edge="end"
                          >
                            {showConfirm ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      } id='confirm' fullWidth sx={{
                        zIndex: 2,
                        backgroundColor: '#ebf1f5', 
                        borderRadius: 8,
                        padding: "4px 16px",
                        }}/>
                </Box>


                <Box mt={2}>
                    <Button sx={{
                        zIndex: 2
                    }} variant='contained'>
                    ثبت‌نام
                    </Button>
                    <Link to={'/login'}>
                        <Button variant='outlined' sx={{
                            mr: 1,
                            zIndex:2
                        }}>
                            ورود
                        </Button>
                    </Link>
                </Box>
            </Box>
        </Box>
        <Box flex={'0 0 50%'}>
            <Box component={'img'} src={'/images/SvgjsG1008.png'}/>
        </Box>
      </Box>
    </Container>
  )
}

export default Register

import { Box,Drawer, Button, ListItemText, ListItemIcon, List, Divider, AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

const MobileNav = () => {
    const [state, setState] = React.useState({
        right: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

  return (
    // <div>
    //     <Button onClick={toggleDrawer('right', true)}>{'right'}</Button>

    // </div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <IconButton onClick={toggleDrawer('right', true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon/>
        </IconButton>
        <Drawer
           anchor={'right'}
           open={state['right']}
           onClose={toggleDrawer('right', false)}
           sx={{
            '& .MuiPaper-root':{
                borderBottomLeftRadius: 300
            }
           }}
         >
           {list('right')}
         </Drawer>
         
        <Box mr={'auto'}>
            <Box width={'80%'} mt={1} component={'img'} src={'icons/logo.png'}/>
        </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default MobileNav

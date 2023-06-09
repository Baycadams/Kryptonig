import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { FaBars, FaHamburger } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


    const drawerWidth = 240;
    

    const menuItems = [
        {
            id: 1,
            path: '/home',
            text: 'Home'
        },
        {
            id: 2,
            path: '/addblog',
            text: 'Add Blog'
        }
    ]


const Layout = ({children}) => {
    const navigate = useNavigate()

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

  
    //   const container = window !== undefined ? () => window().document.body : undefined;
    
  return (

    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: 'white'
        }}
      >
        <Toolbar >
          <img style={{width: '100px', height: '100px'}} src="/images/KRYPTONIG-ICON - Copy (2).png" alt="" />
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <FaBars color='blue' sx={{width: '40px', height: '40px'}} />
          </IconButton>
          <Typography color='blue' variant="h6" noWrap component="div">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
        //   container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <div>
          <Toolbar />
          
          <Divider />

          <List >
          {menuItems.map((item) => {
                            const {id, path, text} = item
                            return(
                                
                                <ListItem 
                                key={id} 
                                button 
                                onClick={() => {navigate(path)
                                          setMobileOpen(false)}}
                                sx={{ paddingLeft: '10px'}}
                                >
                                    <ListItemText sx={{paddingleft : '3px'}}>{text}</ListItemText>
                                    
                                </ListItem>
                            )
                        })}
          </List>
         
        </div>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
        
        <div>
          <Toolbar />
          <Divider />

          <List>
          {menuItems.map((item) => {
            const {id,path, text} = item
              return(
                                
                <ListItem 
                key={id} 
                button 
                onClick={() => {navigate(path)}}
                sx={{ paddingLeft: '10px'}}
                >
                    <ListItemText >{text}</ListItemText>
                    
                </ListItem>
                    )
                })}
          </List>
         
        </div>

        </Drawer>
      </Box>


      {/* body of website */}
        <Box component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)`}, marginTop: '3rem' }} >

            {children}

        </Box>
       
    </Box>
  )
}

export default Layout
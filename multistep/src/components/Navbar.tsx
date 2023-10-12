import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const NavBar = () => {
  return (
    <AppBar position='static'>
        <Toolbar sx={{paddingTop: 0, margin:0}}>
            <IconButton 
            size="large" 
            edge="start" 
            color="inherit" 
            aria-label="menu"
            sx={{ mr: 2}}
            >
            </IconButton>
            <Typography variant="subtitle1" component='div'>
                Viagens
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

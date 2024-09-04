import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"

const Header = () => {
    return(
        <>
            <Box sx={{flexGrow:1}}>
                <AppBar position='static'>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{flexGrow:1}}
                        >
                            Task Management System
                        </Typography>
                        <Button color="inherit" href="/">Login</Button>
                        <Button color="inherit" href="/register">Sign Up</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header
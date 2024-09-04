import {Button, Card, CardContent, CardHeader, Container, TextField, Typography} from '@mui/material'
import Grid from '@mui/material/Grid2';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <>
            <Container maxWidth='xs' sx={{height:'100vh'}}>
                <Card sx={{marginTop:'50px', float:'right'}}>
                    <CardHeader title='TMS Login' />
                    <CardContent autoComplete='off' noValidate>
                        <Grid container spacing={1}>
                            <Grid size={{xs:12, sm:12, md:12}}>
                                <TextField variant='outlined' label='username' size='small' fullWidth></TextField>
                            </Grid>
                            <Grid size={{xs:12, sm:12, md:12}}>
                                <TextField variant='outlined' label='password' size='small' type='password' fullWidth></TextField>    
                            </Grid>
                            <Grid size={{xs:12, sm:12, md:12}}>
                                <Grid container spacing={1}>
                                    <Grid size='4'>
                                        <Button variant='contained'>Login</Button>
                                    </Grid>
                                    <Grid size='4' mr={3}>
                                        <Button variant='contained' to='/tasks'>Register</Button>
                                    </Grid>
                                    <Grid size='4' sx={{textAlign:'right'}}>
                                        <Typography>Not a member? </Typography><Link to='/register'>Sign up here</Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>   
        </>
    )
}

export default Login
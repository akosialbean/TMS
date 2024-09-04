import { Button, Card, CardContent, CardHeader, Container, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

const Registration = () => {
    return(
        <>
            <Container maxWidth='sm'>
                <Card>
                    <CardHeader title='Register'/>
                    <CardContent>
                        <Grid Container spacing={1}>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='first name' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='last name' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='gender' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='username' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='email' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='password' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <TextField variant='outlined' size='small' fullWidth label='confirm password' />
                            </Grid>
                            <Grid size='12' marginBottom={1}>
                                <Grid container spacing={3}>
                                    <Grid size='6'>
                                        <Button variant='contained'>Sign Up</Button>
                                    </Grid>
                                    <Grid size='6'>
                                        <Typography>Already registered? <Link to='/'>Login here</Link></Typography>
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

export default Registration
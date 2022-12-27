import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormControl, InputLabel, Select } from '@mui/material';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const SignupScreen =  () => {
    const [selectedOption, setSelectedOption] = React.useState('');
    const [nameValue, setNameValue] = React.useState('');
    const [placeValue, setPlaceValue] = React.useState('');
    const [numberValue, setNumberValue] = React.useState('');
    const [error, setError] = React.useState(null);
  
    function handleNameChange(event) {
      setNameValue(event.target.value);
      const regex = /^[a-zA-Z ]+$/; //to include space, add space after Z
      // Validate the input here
      if (!regex.test(event.target.value)) {
        setError('Name must contain only letters and spaces');
      } else {
        setError(null);
      }
    }

    function handlePlaceChange(event) {
      setPlaceValue(event.target.value);
      const regex = /^[a-zA-Z ,]+$/; //to include space, add space after Z
      // Validate the input here
      if (!regex.test(event.target.value)) {
        setError('Place must contain only letters, spaces and ,');
      } else {
        setError(null);
      }
    }

    function handleNumberChange(event){
      setNumberValue(event.target.value);
      const regex = /^\d{10}$/;
      if (!regex.test(event.target.value)) {
        setError('Phone number must be 10 digits');
      } else {
        setError(null);
      }
    }


    
  const handleSubmit = (event) => {
    event.preventDefault();


    const data = new FormData(event.currentTarget);
    console.log({
      code: data.get('code'),
      number: data.get('number'),
      name: data.get('name'),
      place: data.get('place'),

    });
    //post form data with fetch or axios
    //return route to new screen --** Research first **--
    //post data with fetch?

(async () => {
  
  try {
    const response = await fetch('http://localhost:3002/api/users/signup/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: data.get('code'),
        number: data.get('number'),
        name: data.get('name'),
        place: data.get('place'),
      })
    });
    if (response.status === 200) {
      // The request was successful
      // Do something with the response here
      window.location.replace('/signup/verify-otp');

    } else if (response.status === 422) {
      // The resource was not found
      // Do something to handle the error here
      console.log(response)
      alert("Server Error: Invalid Input!");
    }
    else{
      alert('Error:',response.status);
    }
  } catch (error) {
    // Handle any errors that occurred outside of the response object (e.g. network errors)
    console.log(error);
    alert("Cannot connect to server!")

  }
})();

  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            {error && <Stack sx={{ width: '100%' }} spacing={2}>
              <Alert severity="error">{error}</Alert> </Stack>}
           
            

              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={nameValue} 
                onChange={handleNameChange}
                autoFocus
              />
             
              <div className="groupOneLine">
                    <FormControl>
                        <Select
                        native
                        name="code"
                        value={selectedOption}
                        onChange={event => setSelectedOption(event.target.value)}
                        inputProps={{
                            id: 'options',
                        }}
                        >
                          <option value={91}>India</option>
                          <option value={21}>UAE</option>
                          <option value={22}>SAUDI ARABIA</option>
                          <option value={21}>UAE</option>
                          <option value={22}>SAUDI ARABIA</option>
                          <option value={21}>UAE</option>
                          <option value={22}>SAUDI ARABIA</option>
                        </Select>
                    </FormControl>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="number"
                        label="Phone Number"
                        name="number"
                        autoComplete="number"
                        value={numberValue}
                        onChange={handleNumberChange}
                        autoFocus
                    />
            </div>

              <TextField
                margin="normal"
                required
                fullWidth
                id="place"
                name="place"
                autoComplete="place"
                label="Place / Village / City / State"
                value={placeValue}
                onChange={handlePlaceChange}
                autoFocus
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign up
              </Button>
              {/* </ValidatorForm> */}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}


export default SignupScreen;
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { useUser } from '../UserContext';

//LOGIN
function Login({ setOpenLogin, setOpenSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userId, setUserId, setUsername: setContextUsername } = useUser();

  const navigate = useNavigate();
  //Save userId for future requests
  useEffect(() => {}, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:2000/user/login', {
        username,
        password,
      });
      // You can store the token in localStorage and redirect the user
      localStorage.setItem('token', data.token);
      setUserId(data.userId);

      setContextUsername(data.username);

      if (setOpenLogin) setOpenLogin(false);
      if (setOpenSignup) setOpenSignup(false);
      navigate('/');
    } catch (err) {
      console.error('Caught error:', err.message, err);
      alert('Invalid credentials');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant='h5' gutterBottom>
          Login
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <TextField
          label='Username'
          variant='outlined'
          sx={{ width: '250px' }}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          sx={{ width: '250px' }}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button
          sx={{ borderRadius: 28, width: '150px' }}
          variant='contained'
          color='primary'
          type='submit'
        >
          Login
        </Button>
      </Box>
    </form>
  );
}

export default Login;

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
//import Button from './Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Divider } from '@mui/material';
import { useUser } from '../UserContext';

//SINGUP
function Signup({ setOpenLogin, setOpenSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { userId, setUserId, setUsername: setContextUsername } = useUser();

  const navigate = useNavigate();

  //Save userId for future requests
  useEffect(() => {}, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:2000/user/signup', {
        username,
        password,
      });

      setUserId(data.userId);

      setContextUsername(username);

      if (setOpenLogin) setOpenLogin(false);
      if (setOpenSignup) setOpenSignup(false);
      navigate('/');

      alert('User created successfully');
    } catch (err) {
      console.error(err);
      alert('An error occurred while creating the user');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant='h5' gutterBottom>
          Sign Up
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
          Sign Up
        </Button>
      </Box>
    </form>
  );
}

export default Signup;

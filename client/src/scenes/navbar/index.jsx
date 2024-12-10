import React, { useState } from 'react';
import { Box, Stack, Modal } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '../../components/Button';
import Signup from '../../components/Signup';
import Login from '../../components/Login';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useUser } from '../../UserContext';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const { userId, setUserId } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserId(null);
    navigate('/');
  };

  return (
    <Stack
      direction='row'
      alignItems='center'
      sx={{
        position: 'sticky',
        p: '30px 7% 15px 5% ',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {/* LOGO */}
      <Link to='/'>
        <img src={logo} alt='logo' height={40} />
      </Link>

      {/* BUTTONS */}
      <Box sx={{ display: 'flex', gap: '20px' }}>
        {userId ? (
          <>
            <Avatar
              onClick={() => navigate(`/user/${userId}`)}
              src={`https://www.gravatar.com/avatar/${userId}?d=identicon`}
              alt='User Icon'
            />
            {/* Logout */}
            <Button variant='dark' onClick={handleLogout} aria-label='logout'>
              <ExitToAppIcon />
            </Button>
          </>
        ) : (
          <>
            <Button variant='dark' onClick={() => setOpenLogin(true)}>
              Login
            </Button>
            <Button variant='light' onClick={() => setOpenSignup(true)}>
              Sign Up
            </Button>
          </>
        )}
      </Box>
      <Modal
        open={openLogin}
        onClose={() => setOpenLogin(false)}
        aria-labelledby='signup-modal-title'
        aria-labelledby='signup-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            borderRadius: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
            width: '100%',
          }}
        >
          <Login setOpenLogin={setOpenLogin} setOpenSignup={setOpenSignup} />
        </Box>
      </Modal>
      <Modal
        open={openSignup}
        onClose={() => setOpenSignup(false)}
        aria-labelledby='signup-modal-title'
        aria-labelledby='signup-modal-description'
      >
        <Box
          sx={{
            position: 'absolute',
            borderRadius: 2,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            maxWidth: 400,
            width: '100%',
          }}
        >
          <Signup setOpenLogin={setOpenLogin} setOpenSignup={setOpenSignup} />
        </Box>
      </Modal>
    </Stack>
  );
};

export default Navbar;

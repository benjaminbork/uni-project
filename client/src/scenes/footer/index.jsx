import { Box, IconButton, Typography, useMediaQuery } from '@mui/material';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const isNonLargeScreen = useMediaQuery('(min-width: 1200px)');

  return (
    <Box
      sx={{
        p: isNonLargeScreen ? '20px' : '40px',

        gap: '60px',
        display: isNonLargeScreen ? 'flex' : 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        mt: 'auto',
        alignItems: 'center',

        backgroundColor: '#EAEAEA',
      }}
    >
      {/* LOGO */}

      <Link
        to='/'
        style={{
          margin: isNonLargeScreen ? '10px 0 0 0' : '0 auto',
        }}
      >
        <img src={logo} alt='logo' height={40} />
      </Link>
      {/* LINKS */}
      <Box
        display='flex'
        gap='40px'
        mr='auto'
        flexDirection={isNonLargeScreen ? 'row' : 'column'}
        m={isNonLargeScreen ? '0 auto 0 20px' : '0 auto'}
        gridColumn='span 2'
      >
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='titleSmall'>About Us</Typography>
        </Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='titleSmall'>Careers</Typography>
        </Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='titleSmall'>Support</Typography>
        </Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='titleSmall'>Legal</Typography>
        </Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='titleSmall'>Privacy</Typography>
        </Link>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
          <Typography variant='titleSmall'>Contact</Typography>
        </Link>
      </Box>
      {/* SOCIAL MEDIA */}
      <Box
        display='flex'
        m={isNonLargeScreen ? '0 auto auto auto' : '10px'}
        sx={{
          gridRow: ' 1 / 2',
          gridColumn: '2 / 3',
          margin: isNonLargeScreen ? '' : '0 auto',
          pr: '10px',
        }}
      >
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
        <IconButton>
          <YouTubeIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;

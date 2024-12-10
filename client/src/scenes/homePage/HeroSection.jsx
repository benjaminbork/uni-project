import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import Background from '../../assets/backgroundImage.png';
import SearchForm from '../../components/SearchForm';
import { useGetFetchQuery } from '../../hooks/useGetFetchQuery';

const HeroSection = ({ setIsShowingAll }) => {
  const theme = useTheme();
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  const { refetch } = useGetFetchQuery(['search']);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: `url(${Background})`,
          backgroundSize: 'cover',
          height: isNonMediumScreen ? '90vh' : '700px',
          p: '0 15%',
        }}
      >
        <Typography
          variant={isNonMediumScreen ? 'headlineMedium' : 'headlineSmall'}
          sx={{ lineHeight: 1, color: theme.palette.neutral.light, mt: -5 }}
        >
          RESTAURANTS IN BERLIN
        </Typography>
        <Typography
          variant={isNonMediumScreen ? 'displayLarge' : 'displaySmall'}
          sx={{
            lineHeight: 2,
            mb: 10,
            color: theme.palette.neutral.light,
            fontSize: isNonMediumScreen ? '57px' : '35px',
          }}
        >
          BOOK NOW FOR FREE
        </Typography>
        <SearchForm refetch={refetch} setIsShowingAll={setIsShowingAll} />
      </Box>
    </Box>
  );
};

export default HeroSection;

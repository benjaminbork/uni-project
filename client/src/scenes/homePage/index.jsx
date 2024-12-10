import { Box } from '@mui/material';
import HeroSection from './HeroSection';
import Recommendation from './Recommendation';
import Navbar from '../navbar';
import Footer from '../footer';

const HomePage = ({ setIsShowingAll }) => {
  setIsShowingAll(true);

  return (
    <>
      <Box backgroundColor='white' width='100vw'>
        <Navbar />
        <HeroSection setIsShowingAll={setIsShowingAll} />
        <Recommendation cuisine='Indian' />
        <Recommendation cuisine='Italian' />
        <Recommendation cuisine='Grill' />
        <Recommendation cuisine='French' />
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;

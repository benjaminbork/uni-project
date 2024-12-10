import {
  Box,
  IconButton,
  Modal,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import Calendar from './Calendar';
import Button from '../../components/Button';
import { useState } from 'react';
import BookingForm from './BookingForm';

const AvailabilityCard = ({
  restaurantAvailability,
  restaurantAvailability: {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  },
}) => {
  const theme = useTheme();
  const [openBooking, setOpenBooking] = useState(false);
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  return (
    <Box width='80%' m='24px auto 96px' display='flex' flexDirection='column'>
      <Box
        sx={{
          width: '100%',
          color: theme.palette.neutral.dark,
          backgroundColor: theme.palette.background.default,
          borderRadius: '12px',
          border: `1px solid ${theme.palette.primary.light}`,
          overFlow: 'hidden',
        }}
      >
        <Box
          p='56px'
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* TITLE */}
          <Typography variant='titleLarge' sx={{ fontWeight: '500' }}>
            Availibility
          </Typography>
          {!restaurantAvailability ? (
            <Typography>Restaurant is booked out for the week.</Typography>
          ) : (
            <>
              {/* CALENDAR */}
              <Calendar
                monday={Monday}
                tuesday={Tuesday}
                wednesday={Wednesday}
                thursday={Thursday}
                friday={Friday}
                saturday={Saturday}
                sunday={Sunday}
              />
              {/* BOOKING BUTTON */}

              <Button
                sx={{
                  width: isNonMediumScreen ? '50%' : '100%',
                  m: '30px auto 0px',
                }}
                onClick={() => setOpenBooking(true)}
              >
                Book your table now
              </Button>
            </>
          )}
        </Box>
      </Box>

      {/* Booking Modal */}
      <Modal
        open={openBooking}
        onClose={() => setOpenBooking(false)}
        aria-labelledby='booking-modal'
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
            maxWidth: '60%',
            height: '70vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <IconButton
            sx={{ marginLeft: 'auto' }}
            onClick={() => setOpenBooking(false)}
          >
            <CancelOutlinedIcon height={'25px'} width={'25px'} />
          </IconButton>
          <BookingForm
            restaurantAvailability={restaurantAvailability}
            monday={Monday}
            tuesday={Tuesday}
            wednesday={Wednesday}
            thursday={Thursday}
            friday={Friday}
            saturday={Saturday}
            sunday={Sunday}
            setOpenBooking={setOpenBooking}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default AvailabilityCard;

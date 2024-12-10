import React, { useState, useEffect } from 'react';
import { Box, useMediaQuery, useTheme, Grid } from '@mui/material';
import Navbar from '../navbar';
import Footer from '../footer';
import BookingCard from './BookingCard';
import { getBookingByUserId } from '../../services/apiRestaurant';
import { useUser } from '../../UserContext';

const UserPage = () => {
  const [bookings, setBookings] = useState([]);
  const { userId } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    async function fetchBookings() {
      try {
        const data = await getBookingByUserId(userId);
        setBookings(data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }
    fetchBookings();
  }, [userId]);

  return (
    <>
      <Box
        backgroundColor='white'
        display='flex'
        flexDirection='column'
        height='100vh'
        justifyContent='space-between'
      >
        <Navbar />
        <Box
          sx={{
            flexGrow: 1,
            padding: '20px 0',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isMobile ? (
            // Mobile layout - Each booking card occupies full width
            bookings.map((booking) => (
              <Box mb={2} key={booking.bookingId}>
                <BookingCard booking={booking} />
              </Box>
            ))
          ) : (
            // Desktop layout - Use grid for arranging cards
            <Grid container spacing={3}>
              {bookings.map((booking) => (
                <Grid item xs={12} sm={6} md={3} key={booking.bookingId}>
                  <BookingCard booking={booking} />
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default UserPage;

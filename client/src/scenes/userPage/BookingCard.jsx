import { Card, CardContent, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

function BookingCard({ booking }) {
  return (
    <Card
      sx={{
        width: 280,
        height: 150,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant='h6' noWrap>
          {booking.restaurantName}
        </Typography>
        <Typography display='flex' alignItems='center' noWrap>
          <AccessTimeIcon fontSize='small' sx={{ mr: 1 }} />
          Time: {booking.time}
        </Typography>
        <Typography display='flex' alignItems='center' noWrap>
          <CalendarTodayIcon fontSize='small' sx={{ mr: 1 }} />
          Day of the Week: {booking.dayOfWeek}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookingCard;

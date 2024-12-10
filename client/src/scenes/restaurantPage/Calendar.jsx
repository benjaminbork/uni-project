import { Box, useMediaQuery } from '@mui/material';
import CalendarCell from './CalendarCell';

const Calendar = ({
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
}) => {
  const timeSlot1 = ['00:00', '01:00', '02:00', '03:00'];
  const timeSlot2 = ['04:00', '05:00', '06:00', '07:00'];
  const timeSlot3 = ['08:00', '09:00', '10:00', '11:00'];
  const timeSlot4 = ['12:00', '13:00', '14:00', '15:00'];
  const timeSlot5 = ['16:00', '17:00', '18:00', '19:00'];
  const timeSlot6 = ['20:00', '21:00', '22:00', '23:00'];

  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
        }}
      >
        <CalendarCell headerCell={true} />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Mon' : 'M'}
        />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Tue' : 'T'}
        />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Wed' : 'W'}
        />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Thu' : 'T'}
        />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Fri' : 'F'}
        />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Sat' : 'S'}
        />
        <CalendarCell
          headerCell={true}
          label={isNonMediumScreen ? 'Sun' : 'S'}
        />
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(8, 1fr)',
          border: '1px solid black',
          borderRadius: '12px',
        }}
      >
        {/* CALENDAR ROW 0 - 4 */}
        <CalendarCell label='0 - 4' />
        <CalendarCell day={monday} time={timeSlot1} />
        <CalendarCell day={tuesday} time={timeSlot1} />
        <CalendarCell day={wednesday} time={timeSlot1} />
        <CalendarCell day={thursday} time={timeSlot1} />
        <CalendarCell day={friday} time={timeSlot1} />
        <CalendarCell day={saturday} time={timeSlot1} />
        <CalendarCell
          day={sunday}
          time={timeSlot1}
          lastCell={true}
          lastTop={true}
        />

        {/* CALENDAR ROW 4 - 8 */}
        <CalendarCell label='4 - 8' />
        <CalendarCell day={monday} time={timeSlot2} />
        <CalendarCell day={tuesday} time={timeSlot2} />
        <CalendarCell day={wednesday} time={timeSlot2} />
        <CalendarCell day={thursday} time={timeSlot2} />
        <CalendarCell day={friday} time={timeSlot2} />
        <CalendarCell day={saturday} time={timeSlot2} />
        <CalendarCell day={sunday} time={timeSlot2} lastCell={true} />

        {/* CALENDAR ROW 8 - 12 */}
        <CalendarCell label='8 - 12' />
        <CalendarCell day={monday} time={timeSlot3} />
        <CalendarCell day={tuesday} time={timeSlot3} />
        <CalendarCell day={wednesday} time={timeSlot3} />
        <CalendarCell day={thursday} time={timeSlot3} />
        <CalendarCell day={friday} time={timeSlot3} />
        <CalendarCell day={saturday} time={timeSlot3} />
        <CalendarCell day={sunday} time={timeSlot3} lastCell={true} />

        {/* CALENDAR ROW 12 - 16 */}
        <CalendarCell label='12 - 16' />
        <CalendarCell day={monday} time={timeSlot4} />
        <CalendarCell day={tuesday} time={timeSlot4} />
        <CalendarCell day={wednesday} time={timeSlot4} />
        <CalendarCell day={thursday} time={timeSlot4} />
        <CalendarCell day={friday} time={timeSlot4} />
        <CalendarCell day={saturday} time={timeSlot4} />
        <CalendarCell day={sunday} time={timeSlot4} lastCell={true} />

        {/* CALENDAR ROW 16 - 20 */}
        <CalendarCell label='16 - 20' />
        <CalendarCell day={monday} time={timeSlot5} />
        <CalendarCell day={tuesday} time={timeSlot5} />
        <CalendarCell day={wednesday} time={timeSlot5} />
        <CalendarCell day={thursday} time={timeSlot5} />
        <CalendarCell day={friday} time={timeSlot5} />
        <CalendarCell day={saturday} time={timeSlot5} />
        <CalendarCell day={sunday} time={timeSlot5} lastCell={true} />

        {/* CALENDAR ROW 20 - 24 */}
        <CalendarCell label='20 - 24' lastRow={true} />
        <CalendarCell lastRow={true} day={monday} time={timeSlot6} />
        <CalendarCell lastRow={true} day={tuesday} time={timeSlot6} />
        <CalendarCell lastRow={true} day={wednesday} time={timeSlot6} />
        <CalendarCell lastRow={true} day={thursday} time={timeSlot6} />
        <CalendarCell lastRow={true} day={friday} time={timeSlot6} />
        <CalendarCell lastRow={true} day={saturday} time={timeSlot6} />
        <CalendarCell
          lastCell={true}
          lastRow={true}
          day={sunday}
          time={timeSlot6}
          lastBottom={true}
        />
      </Box>
    </>
  );
};

export default Calendar;

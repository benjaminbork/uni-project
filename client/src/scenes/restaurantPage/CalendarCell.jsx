import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';

function checkAvailability(day, time) {
  if (!day || !time) return false;
  const checkedAvailiablity = day.filter((hour) => time.indexOf(hour) !== -1);
  return checkedAvailiablity.length;
}

const CalendarCell = ({
  headerCell,
  lastCell,
  lastRow,
  lastTop,
  lastBottom,
  label,
  day,
  time,
}) => {
  const theme = useTheme();
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');
  const isNonLargeScreen = useMediaQuery('(min-width: 1200px)');

  return (
    <Box
      sx={{
        borderRight: headerCell || lastCell ? '' : '1px solid black',
        borderBottom: headerCell || lastRow ? '' : '1px solid black',
        textAlign: 'center',
        p: isNonMediumScreen ? '10px 20px' : '10px 0',
        backgroundColor: checkAvailability(day, time)
          ? theme.palette.quartiary.main
          : '',

        borderTopRightRadius: lastTop ? '11px' : '',
        borderBottomRightRadius: lastBottom ? '11px' : '',
      }}
    >
      <Typography variant='labelMedium'> {label}</Typography>
    </Box>
  );
};

export default CalendarCell;

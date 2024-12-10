import { Box, Rating, Typography, useTheme } from '@mui/material';

const Review = ({ review }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        color: theme.palette.neutral.dark,
        backgroundColor: theme.palette.neutral.light,
        borderRadius: '12px',
        border: `1px solid ${theme.palette.primary.light}`,
      }}
    >
      <Box
        p='16px'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant='titleMedium'>{review?.username}</Typography>
        <Box display='flex' gap='6px'>
          <Rating
            readOnly
            value={review?.rating}
            width='20%'
            sx={{
              '& .MuiRating-iconFilled': {
                color: theme.palette.neutral.dark,
              },
              '& .MuiRating-iconHover': {
                color: theme.palette.neutral.dark,
              },
            }}
          />
          <Typography variant='lableSmall'>{review?.date}</Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Typography variant='bodyMedium'>{review?.review}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;

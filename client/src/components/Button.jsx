import { Button as MUIButton, Typography, useTheme } from '@mui/material';

const Button = ({ children, variant, sx, ...props }) => {
  const theme = useTheme();
  const darkBackground = theme.palette.primary.dark;
  const lightBackground = theme.palette.primary.light;
  const darkColor = theme.palette.primary.main;
  const lightColor = theme.palette.neutral.light;

  return (
    <MUIButton
      {...props}
      variant='contained'
      sx={{
        ...sx,
        backgroundColor: variant === 'light' ? lightBackground : darkBackground,
        color: variant === 'light' ? darkColor : lightColor,
        boxShadow: 0,
        padding: '8px 16px',
        borderRadius: '100px',
        transition: '.4s',
        '&:hover': {
          color: variant === 'light' ? lightColor : darkColor,
          backgroundColor:
            variant === 'light' ? darkBackground : lightBackground,
        },
      }}
    >
      <Typography variant='titleSmall'>{children}</Typography>
    </MUIButton>
  );
};

export default Button;

import { Paper, IconButton, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = ({
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  setFieldValue,
}) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: 'flex',
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        width: '100%',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <IconButton type='submit' sx={{ p: '10px' }}>
        <Search />
      </IconButton>
      <input
        name='query'
        placeholder='Search...'
        onChange={(e) => setFieldValue('query', e.target.value)}
        onBlur={handleBlur}
        style={{
          border: 'none',
          outline: 'none',
          backgroundColor: theme.palette.background.default,
          width: '80%',
          borderRadius: 20,
        }}
      />
    </Paper>
  );
};

export default SearchBar;

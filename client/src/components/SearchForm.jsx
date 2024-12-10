import {
  Box,
  InputAdornment,
  TextField,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import * as yup from 'yup';
import { Formik } from 'formik';

import SearchBar from './SearchBar';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateSearch } from '../hooks/useCreateSearch';

const initialValues = {
  date: null,
  time: null,
  persons: null,
  query: '',
};

const searchSchema = yup.object().shape({
  date: yup.date().nullable().required('Please enter a date.'),
  time: yup.date().nullable().required('Please enter a time.'),
  persons: yup.number().integer().nullable(),
  query: yup.string().nullable(),
});

const SearchForm = ({ refetch, setIsShowingAll }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { createSearch } = useCreateSearch();

  const [personsNumber, setPersonsNumber] = useState('');
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');
  const isNonLargeScreen = useMediaQuery('(min-width: 1200px)');

  const handleFormSubmit = async (values, { resetForm }) => {
    setIsShowingAll(false);
    createSearch(values);
    resetForm();
    navigate('/search');
  };

  return (
    <Box>
      {/* FORMIK */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={searchSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={(values) => handleSubmit(values)}>
            <Box
              sx={{
                display: 'grid',
                gridAutoFlow: 'row',
                gap: isNonMediumScreen ? '12px' : '20px',

                gridTemplateColumns: isNonMediumScreen
                  ? 'repeat(7, minmax(0, 1fr))'
                  : 'repeat(1, 1fr)',
                alignItems: 'start',
              }}
            >
              {/* PICKERS */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* DATE PICKER*/}
                <DatePicker
                  disablePast={true}
                  name='date'
                  label='DATE'
                  onBlur={handleBlur}
                  value={values.date}
                  onChange={(value) => setFieldValue('date', value)}
                  slotProps={{
                    textField: {
                      variant: 'filled',
                      focused: true,
                      error: Boolean(touched.date && errors.date),
                      helperText: touched.date && errors.date,
                    },
                  }}
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    gridColumn: isNonLargeScreen ? 'span 2' : 'span 4',
                  }}
                />

                {/* TIME PICKER */}
                <TimePicker
                  name='time'
                  label='TIME'
                  ampm={false}
                  minutesStep={60}
                  onBlur={handleBlur}
                  value={values.time}
                  onChange={(value) => setFieldValue('time', value)}
                  slotProps={{
                    textField: {
                      variant: 'filled',
                      focused: true,
                      error: Boolean(touched.time && errors.time),
                      helperText: touched.time && errors.time,
                    },
                  }}
                  sx={{
                    backgroundColor: theme.palette.background.default,
                    gridColumn: isNonLargeScreen ? 'span 1' : 'span 2',
                  }}
                />
              </LocalizationProvider>

              {/* PERSONS PICKER */}
              <TextField
                name='persons'
                type='number'
                label='PERSONS'
                onBlur={handleBlur}
                onKeyDown={(e) => {
                  if (
                    e.key === 'e' ||
                    e.key === 'E' ||
                    e.key === '-' ||
                    e.key === '+'
                  ) {
                    e.preventDefault();
                  }
                }}
                value={personsNumber}
                onChange={(e) => {
                  const regex = /^[1-9][0-9]?$/;
                  if (regex.test(e.target.value) || e.target.value === '') {
                    setPersonsNumber(e.target.value);
                    setFieldValue('persons', e.target.value);
                  }
                }}
                error={Boolean(touched.persons && errors.persons)}
                helperText={touched.persons && errors.persons}
                variant='filled'
                focused={true}
                placeholder='2'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <PersonOutlineOutlinedIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  backgroundColor: theme.palette.background.default,
                  gridColumn: 'span 1',
                }}
              />

              <Box
                sx={{
                  gridColumn: isNonLargeScreen ? 'span 2' : 'span 4',
                  pt: '4px',
                  mt: isNonLargeScreen ? '' : isNonMediumScreen ? 2 : '',
                }}
              >
                {/* SEARCH BAR */}

                <SearchBar
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              </Box>
              {/* SUBMIT BUTTON */}
              <Box
                sx={{
                  gridColumn: isNonLargeScreen ? 'span 1' : 'span 3',
                  pt: '4px',
                  mt: isNonLargeScreen ? '' : isNonMediumScreen ? 2 : '',
                }}
              >
                <Button type='submit' sx={{ width: '100%' }}>
                  Book Now
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default SearchForm;

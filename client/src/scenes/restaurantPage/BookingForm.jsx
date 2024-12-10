import * as yup from 'yup';
import { Formik } from 'formik';
import { Box, MenuItem, TextField, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useUser } from '../../UserContext';

import Button from '../../components/Button';
import { useCreateReservation } from '../../hooks/useCreateReservation';
import { useQueryClient } from '@tanstack/react-query';

const initialValues = {
  dayOfWeek: '',
  time: '',
  userId: '',
  restaurantId: '',
};

const bookingSchema = yup.object().shape({
  dayOfWeek: yup.string().required('The weekday is required.'),
  time: yup.string().required('The time is required.'),
  userId: yup.string().required(),
  restaurantId: yup.number().required(),
});

const BookingForm = ({
  restaurantAvailability,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  setOpenBooking,
}) => {
  const { restaurantId } = useParams();
  const { userId } = useUser();
  const { isCreating, createReservation } = useCreateReservation();
  const queryClient = useQueryClient();

  /* SETTING USER ID AND RESTAURANT ID AND HANDLING UNDEFINED ISSUES */
  initialValues.restaurantId = restaurantId;
  initialValues.userId = userId;

  if (!initialValues.userId)
    return (
      <Typography variant='titleLarge'>
        Please Log in or Sign up before booking a table.
      </Typography>
    );

  if (!initialValues.restaurantId)
    return (
      <Typography variant='titleLarge'>
        There was an issue with the Restaurant. Please try later again.
      </Typography>
    );

  /* CREATING SELECT LISTS FOR WEEKDAYS*/
  const weekdays = [];
  if (monday.length !== '0')
    weekdays.push({ label: 'Monday', value: 'Monday' });
  if (tuesday != null) weekdays.push({ label: 'Tuesday', value: 'Tuesday' });
  if (wednesday != null)
    weekdays.push({ label: 'Wednesday', value: 'Wednesday' });
  if (thursday != null) weekdays.push({ label: 'Thursday', value: 'Thursday' });
  if (friday.length !== '0')
    weekdays.push({ label: 'Friday', value: 'Friday' });
  if (saturday != null) weekdays.push({ label: 'Saturday', value: 'Saturday' });
  if (sunday != null) weekdays.push({ label: 'Sunday', value: 'Sunday' });

  /* SUBMIT FORM */

  const handleFormSubmit = (values, { reset }) => {
    const { restaurantId, ...otherValues } = values;
    queryClient.refetchQueries();

    createReservation({
      ...otherValues,
      restaurantId: parseInt(restaurantId, 10),
    });
    setOpenBooking(false);
    queryClient.invalidateQueries();
    queryClient.refetchQueries();
    reset();
  };

  return (
    <>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={bookingSchema}
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
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              {/* HEADER */}
              <Typography variant='titleLarge'>
                Booking of your table:
              </Typography>

              {/* WEEKDAY */}
              <TextField
                name='dayOfWeek'
                variant='filled'
                select
                disabled={isCreating}
                label='Weekday'
                value={values.dayOfWeek || ''}
                onBlur={handleBlur}
                onChange={(value) => {
                  setFieldValue('dayOfWeek', value.target.value);
                  setFieldValue('time', '');
                }}
                error={Boolean(touched.dayOfWeek && errors.dayOfWeek)}
                helperText={touched.dayOfWeek && errors.dayOfWeek}
              >
                <MenuItem key={''} value={''} disabled></MenuItem>
                {weekdays.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                name='time'
                variant='filled'
                disabled={isCreating || !values.dayOfWeek}
                select
                label='Time'
                value={values.time || ''}
                onBlur={handleBlur}
                onChange={(value) => {
                  setFieldValue('time', value.target.value);
                }}
                error={Boolean(touched.time && errors.time)}
                helperText={touched.time && errors.time}
              >
                <MenuItem key={''} value={''} disabled></MenuItem>
                {!!values.dayOfWeek &&
                  restaurantAvailability[values.dayOfWeek].map(
                    (option, values) => (
                      <MenuItem
                        key={`${option}${values.dayOfWeek}`}
                        value={option}
                      >
                        {option}
                      </MenuItem>
                    )
                  )}
              </TextField>

              <Button type='submit' disabled={isCreating}>
                Submit Booking
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};
export default BookingForm;

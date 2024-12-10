import * as yup from 'yup';
import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import {
  Box,
  Rating,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useUser } from '../../UserContext';
import { useCreateReview } from '../../hooks/useCreateReview';

import Button from '../../components/Button';
import { useQueryClient } from '@tanstack/react-query';

const initialValues = {
  userId: '',
  username: '',
  restaurantId: '',
  review: '',
  rating: '',
};

const reviewSchema = yup.object().shape({
  userId: yup.string().required('User Id is required.'),
  username: yup.string().required('Username is required.'),
  restaurantId: yup.number().required('Restaurant Id is required.'),
  review: yup.string().required('You have to write a review.'),
  rating: yup
    .number()
    .transform((_, originalValue) => parseInt(originalValue))
    .min(1)
    .max(5)
    .required('You have to give a rating.'),
});

/* SUBMIT FORM */

const ReviewForm = () => {
  const theme = useTheme();
  const { userId, username } = useUser();
  const { restaurantId } = useParams();
  const { isCreatingReview, createReview } = useCreateReview();
  const queryClient = useQueryClient();
  const isNonMediumScreen = useMediaQuery('(min-width: 900px)');

  initialValues.restaurantId = restaurantId;
  initialValues.userId = userId;
  initialValues.username = username;

  if (!initialValues.userId)
    return (
      <Typography variant='titleLarge'>
        Please Log in or Sign up to write a review.
      </Typography>
    );

  if (!initialValues.restaurantId)
    return (
      <Typography variant='titleLarge'>
        There was an issue with the Restaurant. Please try later again.
      </Typography>
    );

  const handleFormSubmit = (values, { resetForm }) => {
    queryClient.invalidateQueries();
    queryClient.refetchQueries();
    const { restaurantId, rating, ...otherValues } = values;
    createReview({
      ...otherValues,
      restaurantId: parseInt(restaurantId, 10),
      rating: parseInt(rating, 10),
    });

    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={(values, actions) => handleFormSubmit(values, actions)}
        initialValues={initialValues}
        validationSchema={reviewSchema}
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
          <form onSubmit={handleSubmit}>
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
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  p: '20px',
                }}
              >
                {/* HEADER */}
                <Typography
                  variant='titleLarge'
                  sx={{
                    mb: isNonMediumScreen ? -2 : 2,
                    mt: isNonMediumScreen ? 0 : 2,
                    lineHeight: isNonMediumScreen ? 2.8 : 1.6,
                  }}
                >
                  Review the restaurant:
                </Typography>

                {/* RATING */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: isNonMediumScreen ? 3 : 0,
                    alignItems: isNonMediumScreen ? 'center' : 'start',
                    flexDirection: isNonMediumScreen ? 'row' : 'column',
                  }}
                >
                  <Typography
                    variant='bodyLarge'
                    color={
                      Boolean(touched.rating && errors.rating)
                        ? theme.palette.error.main
                        : ''
                    }
                  >
                    Rating:{' '}
                  </Typography>
                  <Rating
                    onBlur={handleBlur}
                    value={Number(values.rating) || 0}
                    onChange={(e) => {
                      setFieldValue('rating', Number(e.target.value));
                    }}
                    error={Boolean(touched.rating && errors.rating)}
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
                </Box>
                <Box sx={{ mt: -2.5, ml: 2 }}>
                  <Typography
                    color={theme.palette.error.main}
                    sx={{ fontSize: '11px' }}
                  >
                    {touched.rating && errors.rating}
                  </Typography>
                </Box>

                {/* REVIEW */}
                <TextField
                  name='review'
                  label='Review'
                  disabled={isCreatingReview}
                  placeholder='The restaurant is ...'
                  multiline
                  minRows={4}
                  maxRows={4}
                  onBlur={handleBlur}
                  value={values.review || ''}
                  onChange={(e) => {
                    setFieldValue('review', e.target.value);
                  }}
                  error={Boolean(touched.review && errors.review)}
                  helperText={touched.review && errors.review}
                />

                {/* SUBMIT BUTTON */}
                <Button
                  type='submit'
                  sx={{
                    width: isNonMediumScreen ? '50%' : '100%',
                    m: '10px auto 20px',
                  }}
                  disabled={isCreatingReview}
                >
                  Submit Review
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default ReviewForm;

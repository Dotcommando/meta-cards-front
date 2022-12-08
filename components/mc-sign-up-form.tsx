import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { AnyAction } from 'redux';
import * as yup from 'yup';

import { Button, FormControl, Grid, TextField } from '@mui/material';

import { signUpReq } from '../store';

interface ISignUpFormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const MCSignUpForm = () => {
  const dispatch = useDispatch();
  const handleSignUp = (values: ISignUpFormFields) => {
    dispatch(signUpReq({
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    }) as unknown as AnyAction);
  };
  const validationSchema = yup.object({
    firstName: yup
      .string()
      .required('First name is required'),
    lastName: yup
      .string()
      .required('Last name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .required('Password confirmation is required')
      .oneOf([ yup.ref('password'), null ], 'Passwords must match'),
  });

  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values: ISignUpFormFields) => handleSignUp(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={2} justifyContent="center">
        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="first-name"
              name="firstName"
              type="text"
              label="First name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              onBlur={formik.handleBlur}
              helperText={ formik.touched.firstName && Boolean(formik.errors.firstName) ? formik.errors.firstName : '' }
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="last-name"
              name="lastName"
              type="text"
              label="Last name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              onBlur={formik.handleBlur}
              helperText={ formik.touched.lastName && Boolean(formik.errors.lastName) ? formik.errors.lastName : '' }
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              onBlur={formik.handleBlur}
              helperText={ formik.touched.email && Boolean(formik.errors.email) ? formik.errors.email : '' }
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              onBlur={formik.handleBlur}
              helperText={ formik.touched.password && Boolean(formik.errors.password) ? formik.errors.password : '' }
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth>
            <TextField
              id="confirm-password"
              name="confirmPassword"
              label="Password else one time"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              onBlur={formik.handleBlur}
              helperText={ formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword) ? formik.errors.confirmPassword : '' }
            />
          </FormControl>
        </Grid>

        <Grid item>
          <Button color="primary" variant="contained" type="submit">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MCSignUpForm;

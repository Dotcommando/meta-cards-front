import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import { AnyAction } from 'redux';
import * as yup from 'yup';

import { Button, FormControl, Grid, TextField } from '@mui/material';

import { signInReq } from '../store';

interface ISignInFormFields {
  email: string;
  password: string;
}

const MCSignInForm = () => {
  const dispatch = useDispatch();
  const handleSignIn = (values: ISignInFormFields) => {
    dispatch(signInReq({
      email: values.email,
      password: values.password,
    }) as unknown as AnyAction);
  };
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    validateOnBlur: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values: ISignInFormFields) => handleSignIn(values),
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container rowSpacing={2} justifyContent="center">
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

        <Grid item>
          <Button color="primary" variant="contained" type="submit">
            Sign In
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default MCSignInForm;

import React, { FunctionComponent } from 'react';

import { TextField, Grid, MenuItem, Button, Box } from '@material-ui/core';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  UpdateLocalStateDemoEditMutationFn,
  UpdateLocalStateDemoEditMutationVariables,
  LocalStateDemoQuery,
  BloodTypes,
} from '~client/graphql/__generated__/schema';

import { enumToArray } from '@sandbox-react-apollo/helpers';

const validationSchema = Yup.object<
  UpdateLocalStateDemoEditMutationVariables['input']
>({
  name: Yup.string(),
  age: Yup.number(),
  blood: Yup.string(),
});

type Props = {
  data: LocalStateDemoQuery;
  updateYou: UpdateLocalStateDemoEditMutationFn;
};

type FormValue = Yup.InferType<typeof validationSchema>;

export const LocaStateDemoEditPresentational: FunctionComponent<Props> = (
  props
) => {
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<FormValue>({
    enableReinitialize: true,
    validationSchema,
    initialValues: {
      name: props.data.you.name,
      age: props.data.you.age,
      blood: props.data.you.blood,
    },
    onSubmit: (values) => {
      const input = values;
      props.updateYou({ variables: { input } });
    },
  });
  return (
    <form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={5}>
        <Grid item xs={4}>
          <TextField
            name="name"
            value={values.name}
            label="名前"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            error={!!errors.name}
            helperText={errors.name}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            name="age"
            value={values.age}
            label="年齢"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            error={!!errors.age}
            helperText={errors.age}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            select
            name="blood"
            value={values.blood}
            label="血液型"
            onChange={handleChange}
            fullWidth
            variant="outlined"
            onBlur={handleBlur}
            error={!!errors.blood}
            helperText={errors.blood}
          >
            {enumToArray(BloodTypes)
              .getValues()
              .map((bloodType) => (
                <MenuItem key={bloodType} value={bloodType}>
                  {bloodType}
                </MenuItem>
              ))}
          </TextField>
        </Grid>
      </Grid>

      <Box marginTop={1}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!isValid}
        >
          更新
        </Button>
      </Box>
    </form>
  );
};

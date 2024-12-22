import { Box, MenuItem, Snackbar, Stack, TextField, Typography, useTheme } from '@mui/material';

import React from 'react'

import { useForm } from "react-hook-form";
const Choice = [
  {
    value: "manager",
    label: "manager",
  },
  {
    value: "admin",
    label: "admin",
  },
  {
    value: "user",
    label: "user",
  },

];


export default function PorfileForm() {
  const theme = useTheme();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const { vertical, horizontal, open } = state;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm ();
  const onSubmit = (data) => console.log(data)
  return (
    <>
      <Typography
        sx={{
          color: theme.palette.info.dark,
          fontSize: "40px",
        }}
      >
        Create_User
      </Typography>
      <Typography
        sx={{
          color: theme.palette.info.dark,
          fontSize: "20px",
        }}
      >
        Create New User Profile
      </Typography>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: "column",
          width: "100%",
          color: "teal",
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ gap: 2 }} direction={"row"} spacing={2}>
          <TextField
            error={Boolean(errors.FirstName)}
            helperText={
              Boolean(errors.FirstName)
                ? "This Field is Required & max:10 charachter"
                : null
            }
            sx={{ flex: 1 }}
            label="FirstName"
            variant="filled"
            {...register("FirstName", { required: true, maxLength: 10 })}
          />
          <TextField
            error={Boolean(errors.LastName)}
            helperText={
              Boolean(errors.LastName)
                ? "This Field is Required & max:10 charachter"
                : null
            }
            sx={{ flex: 1 }}
            label="LastName"
            variant="filled"
            {...register("LastName", { required: true, maxLength: 10 })}
          />
        </Stack>
        <TextField
          error={Boolean(errors.Email)}
          helperText={Boolean(errors.Email) ? "This is Email not valid" : null}
          sx={{ width: "100%" }}
          label="Email"
          variant="filled"
          {...register("Email", { required: true, pattern: emailPattern })}
        />

        <TextField
          error={Boolean(errors.Address)}
          helperText={Boolean(errors.Address) ? "This Field is Required" : null}
          sx={{ width: "100%" }}
          label="Address"
          variant="filled"
          {...register("Address", { required: true, maxLength: 10 })}
        />

        <TextField
          error={Boolean(errors.role)}
          helperText={Boolean(errors.role) ? "This Field is Required" : null}
          id="outlined-select-currency"
          select
          label="role"
          variant="filled"
          defaultValue="user"
        >
          {Choice.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ textAlign: "right" }}>
          <button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
            type="submit"
            style={{
              backgroundColor: "blue",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Create New User
          </button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message="This is Account successfully"
            key={vertical + horizontal}
            sx={{
              backgroundColor: "blue", // الخلفية الزرقاء
              color: "white", // النص باللون الأبيض
              "& .MuiSnackbarContent-root": {
                backgroundColor: "blue", // تخصيص الخلفية داخل محتوى الـ Snackbar
                color: "white", // تخصيص لون النص
              },
            }}
          />
        </Box>
      </Box>
    </>
  );
}

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import CallIcon from "@mui/icons-material/Call";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useFormik } from "formik";
import Grid from "@mui/material/Grid";
import axiosInstance from "../utils/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme();

//formik validation
const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Name is Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone_number) {
    errors.phone_number = "Phone number is Required";
  } else if (values.phone_number.length < 10) {
    errors.phone_number = "phone number must be 10 numbers";
  } else if (values.phone_number.length > 10) {
    errors.phone_number = "phone number must be only 10 numbers";
  }

  if (!values.message) {
    errors.message = "Message is Required";
  }

  return errors;
};

const Contact = () => {
  //submission msg generator
  const submissionMsg = (msg) => {
    toast.success(msg, {
      position: "bottom-right",
    });
  };

  //formik validation
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      //api call using axios instance
      await axiosInstance.post("/api/contact", values).then((response) => {
        if (response.data.submitted) {
          submissionMsg(response.data.msg);
        }
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 12,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <CallIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Contact
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    helperText={formik.errors.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    helperText={formik.errors.email && formik.errors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="phone_number"
                    label="phone number"
                    id="phone_number"
                    autoComplete="phone_number"
                    value={formik.values.phone_number}
                    onChange={formik.handleChange}
                    helperText={
                      formik.errors.phone_number && formik.errors.phone_number
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="message"
                    label="message"
                    id="message"
                    autoComplete="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    helperText={formik.errors.message && formik.errors.message}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
          <ToastContainer />
        </Container>
      </ThemeProvider>
    </form>
  );
};

export default Contact;

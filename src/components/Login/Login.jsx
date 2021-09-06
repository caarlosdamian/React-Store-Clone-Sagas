import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/reducer";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const history = useHistory();
  console.log(history);
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    dispatch(login(credentials));
    history.push("/home");
  };
  return (
    <form
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}
    >
      <TextField
        id="standard-basic"
        label="Username"
        name="displayName"
        type="text"
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Email"
        name="email"
        type="text"
        onChange={handleChange}
      />
      <TextField
        id="standard-basic"
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <Button
        variant="contained"
        type="submit"
        onClick={onSubmit}
        color="primary"
      >
        Login
      </Button>
    </form>
  );
};

export default Login;

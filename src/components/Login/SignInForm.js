import React, { useContext, useEffect, useState } from "react";
import styles from "./SignInForm.module.css";
import { useNavigate } from "react-router-dom";
import { MyContext } from "./../../store";
import { TextField } from "@mui/material";

function SignInForm() {
  const ctx = useContext(MyContext);
  const { username, setUsername, password, setPassword } = ctx;

  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const validateFields = () => {
    if (username.trim !== "" && password.trim !== "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate("/home");
      console.log(ctx);
    }
  };

  useEffect(() => {
    validateFields();
  }, [username, password, validateFields]);

  return (
    <div className={styles.form}>
      <div className={styles["manual-form"]}>
        <p className={styles.logIn}>Log In</p>
        <form onSubmit={handleSubmit}>
          <TextField
            className={styles["text-field"]}
            required
            placeholder="Username"
            id="outlined-required"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            className={styles["text-field"]}
            required
            placeholder="Password"
            id="outlined-required"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {isValid ? (
            <button type="submit">Sign In</button>
          ) : (
            <button type="button" disabled>
              Sign In
            </button>
          )}
          {/* <Link to="home">
            <button type="submit">Sign In</button>
          </Link> */}
        </form>
      </div>
    </div>
  );
}

export default SignInForm;

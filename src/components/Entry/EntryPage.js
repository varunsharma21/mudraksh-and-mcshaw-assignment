import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import styles from "./EntryPage.module.css";
import { MyContext } from "../../store";
import NavBar from "../NavigationBar/NavBar";

const EntryPage = () => {
  const {
    name,
    setName,
    age,
    setAge,
    job,
    setJob,
    salary,
    setSalary,
    city,
    setCity,
  } = useContext(MyContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, age, city, salary, job);

    // setName("");
    // setAge("");
    // setCity("");
    // setSalary("");
    // setJob("");
    // console.log(name);
  };

  return (
    <div className={styles.container}>
      <NavBar />
      <p className={styles.instruction}>Fill the form!</p>
      <form className={styles.form} onSubmit={formSubmitHandler}>
        <TextField
          className={styles["text-field"]}
          required
          placeholder="Name"
          id="outlined-required"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          className={styles["text-field"]}
          required
          placeholder="Job"
          id="outlined-required"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <TextField
          className={styles["text-field"]}
          required
          placeholder="Age"
          id="outlined-required"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <TextField
          className={styles["text-field"]}
          required
          placeholder="City"
          id="outlined-required"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          className={styles["text-field"]}
          required
          placeholder="Salary"
          id="outlined-required"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <Button className="styles.btn" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EntryPage;

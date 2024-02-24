import React, { useContext } from "react";
import NavBar from "../NavigationBar/NavBar";
import styles from "./HomePage.module.css";
import { MyContext } from "../../store";

const Home = () => {
  return (
    <div className={styles.container}>
      <NavBar />
      <p className={styles.instruction}>Navigate via </p>
      <p>
        <span className={styles.highlight}>Navbar!</span>
      </p>
      <div className={styles.steps}>
        <p>Step 1: Fill the entry form.</p>
        <p>Step 2: Visit table to see data in table format.</p>
        <p>Step 3: Visit chart for graphical representation.</p>
      </div>
    </div>
  );
};

export default Home;

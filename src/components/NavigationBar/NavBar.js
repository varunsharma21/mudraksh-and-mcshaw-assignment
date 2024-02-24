import React from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul className={styles.list}>
          <li>
            <Link to="/entry" className={styles["custom-link"]}>
              Entry
            </Link>
          </li>
          <li>
            <Link to="/table" className={styles["custom-link"]}>
              Table
            </Link>
          </li>
          <li>
            <Link to="/charts" className={styles["custom-link"]}>
              Chart
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useContext } from "react";
import { MyContext } from "../../store";
import styles from "./Table.module.css";

const InfoTable = () => {
  const { name, salary, job, city, age } = useContext(MyContext);

  return (
    <TableContainer component={Paper} className={styles.container}>
      <Table sx={{ minWidth: 550, maxWidth: 1100 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" className={styles.heading}>
              Fields
            </TableCell>
            <TableCell align="center" className={styles.heading}>
              Values
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key="1"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              Name
            </TableCell>
            <TableCell align="center">{name}</TableCell>
          </TableRow>
          <TableRow
            key="1"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              Age
            </TableCell>
            <TableCell align="center">{age}</TableCell>
          </TableRow>
          <TableRow
            key="1"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              Job
            </TableCell>
            <TableCell align="center">{job}</TableCell>
          </TableRow>
          <TableRow
            key="1"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              Salary
            </TableCell>
            <TableCell align="center">{salary}</TableCell>
          </TableRow>
          <TableRow
            key="1"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" align="center">
              City
            </TableCell>
            <TableCell align="center">{city}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InfoTable;

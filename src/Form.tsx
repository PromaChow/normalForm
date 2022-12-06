import { Fragment, useEffect, useRef, useState } from "react";
import { User } from "./model-files/User";
import { Multiselect } from "multiselect-react-dropdown";
import { addUser, getUserData } from "./model-files/userData";
import "./Form.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import SearchComponent from "react-material-ui-searchbar";
import { Valid } from "./model-files/validation";
import axios from "axios";
import Select from "react-select";

var validator = require("validator");

function Form() {
  const [userData, setUserData] = useState<User[]>([]);
  const [data, setData] = useState<any[]>();

  const [rows, setRows] = useState<User[]>([]);
  // const [options] = useState(colourOptions);
  // const [selected, setSelected] = useState<any>([]);
  // const allTrue = useRef(false);
  // const [data, setData] = useState<any[]>();
  // const [checked, setChecked] = useState("");
  // const validationData = useRef<Valid>({
  //   firstNameValid: false,
  //   lastNameValid: false,
  //   emailAddressValid: false,
  //   phoneValid: false,
  //   genderValid: false,
  //   categoryValid: false,
  // });

  //const [user, setUser] = useState<User[]>([]);
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await axios.get<User[]>(url);
    return response;
  };

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      setUserData(data.data);
      setRows(data.data);
    })();
  }, []);

  function showData() {
    console.log(userData[1].address.city);
  }
  return (
    // <button onClick={showData}>hello</button>
    <div className="row overflow-hidden">
      {" "}
      <div
        className="container-fluid"
        style={{
          alignContent: "center",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <SearchComponent
          onChangeHandle={(searchedVal: string) => {
            let filteredRows = userData.filter((row) => {
              return row.username
                .toLowerCase()
                .includes(searchedVal.toLowerCase());
            });
            setRows([...filteredRows]);
          }}
        />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">UserName</TableCell>
                <TableCell align="left">Email Address</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Website</TableCell>
                <TableCell align="left">Company</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row, k) => (
                <Fragment>
                  <TableRow key={k++}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">
                      {row.address.street +
                        ", " +
                        row.address.suite +
                        " " +
                        row.address.city}
                    </TableCell>
                    <TableCell align="left">{row.phone}</TableCell>
                    <TableCell align="left">{row.website}</TableCell>
                    <TableCell align="left">{row.company.name}</TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Form;

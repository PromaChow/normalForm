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

import { default as ReactSelect } from "react-select";
import Select from "react-select";

import { components } from "react-select";
import { SocialDistanceOutlined } from "@mui/icons-material";

var validator = require("validator");

const data = ["1", "2", "3", "4"];

export const colourOptions = [
  { value: "ocean", label: "Cat one", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Cat two", color: "#0052CC", isDisabled: false },
  { value: "purple", label: "Cat three", color: "#5243AA" },
  { value: "red", label: "Cat four", color: "#FF5630", isFixed: true },
];

function Form() {
  const [userData, setUserData] = useState<User[]>([]);
  const [searched, setSearched] = useState<string>("");
  const [rows, setRows] = useState<User[]>([]);
  const label: any[] = [];
  const save = useRef<User[]>(userData);
  const [options] = useState(colourOptions);
  const newDataArray: any[] = [];
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    gender: "",
    category: [],
  });

  useEffect(() => {
    setRows([...userData]);
    save.current = [...userData];
    //  console.log(userData);
  }, [rows]); 

  function handleChangeFname(event: any) {
    setUser((prev) => ({ ...prev, firstName: event.target.value }));
  }

  function handleChangeLname(event: any) {
    setUser((prev) => ({ ...prev, lastName: event.target.value }));
  }

  function handleChangePhone(event: any) {
    var phoneno = /^(?:(?:\+|00)88|01)?\d{11}$/;
    if (event.target.value.match(phoneno)) {
      setUser((prev) => ({ ...prev, phone: event.target.value }));
      console.log("yes");
    } else {
      console.log("no");
    }
  }

  function handleChangeGender(event: any) {
    setUser((prev) => ({ ...prev, gender: event.target.value }));
  }
  function handleChangeEmail(event: any) {
    if (validator.isEmail(event.target.value)) {
      setUser((prev) => ({ ...prev, emailAddress: event.target.value }));
    } else console.log("no");
  }

  const onChange = (selectedOptions: any) => {
    console.log("sel", selectedOptions);
    //label = selectedOptions;
    //newDataArray = [...user.category, ...selectedOptions];
    console.log("new", newDataArray);
    setUser((prev) => ({
      ...prev,
      category: selectedOptions.map((d: { label: any }) => d.label),
    }));
    //console.log("usr", user);
  };

  function Submit(event: any) {
    event.preventDefault();

    // console.log(userData);
    addUser(user);
    console.log(user);

    setUserData([...userData, user]);
    
    console.log("fin", userData);
    setUser({
      firstName: "",
      lastName: "",
      emailAddress: "",
      phone: "",
      gender: "",
      category: [],
    });
  }




  return (
    <div className="row overflow-auto">
      <div className="col">
        <div
          className="container-fluid"
          style={{
            alignContent: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          <form className="Auth-form">
            <div className="container">
              <h3 className="Auth-form-title">Form</h3>

              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  type="text"
                  value={user.firstName}
                  className="form-control mt-1"
                  placeholder="Enter First Name"
                  onChange={handleChangeFname}
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  value={user.lastName}
                  placeholder="Enter Last Name"
                  onChange={handleChangeLname}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  value={user.emailAddress}
                  placeholder="Enter Email"
                  onChange={handleChangeEmail}
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={user.phone}
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                  onChange={handleChangePhone}
                />
              </div>

              <div className="form-group mt-3">
                <label>Category</label>
                <Select
                  isMulti
                  name="colors"
                  options={options}
                  classNamePrefix="select"
                  onChange={onChange}
                />
              </div>

              <div className="form-group mt-3">
                <label>Gender</label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={handleChangeGender}
                />{" "}
                Male
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={handleChangeGender}
                />{" "}
                Female
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={handleChangeGender}
                />{" "}
                Other
              </div>

              <div className="d-grid gap-2 mt-3">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={Submit}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-8">
        <div
          className="container-fluid"
          style={{
            alignContent: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
            <SearchComponent onChangeHandle={(searchedVal:string)=>{
               let filteredRows = userData.filter((row) => {
                return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
              });
              setRows([...filteredRows]);
              save.current = [...filteredRows];
              console.log(save.current);
             
             
            }} />
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Gender</TableCell>
                  <TableCell align="left">Email Address</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Category</TableCell>
                  
                </TableRow>
              </TableHead>

              <TableBody>
                {save.current.map((row, k) => (
                  <Fragment>
                    <TableRow key={k++}>
                      <TableCell component="th" scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell align="left" >{row.lastName}</TableCell>
                      <TableCell align="left" >{row.gender}</TableCell>
                      <TableCell align="left" >{row.emailAddress}</TableCell>
                      <TableCell align="left" >{row.phone}</TableCell>
                      <TableCell align="left" >{row.category.join(",")}</TableCell>
                    </TableRow>
                   
                  </Fragment>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Form;

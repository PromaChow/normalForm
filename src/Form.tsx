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
import { CustomSelect } from "./CustomSelect";
import { Valid } from "./model-files/validation";
import { useFormik, FormikProps } from "formik";

import Select from "react-select";

var validator = require("validator");

export const colourOptions: any = [
  { value: "ocean", label: "Cat one", color: "#00B8D9", isFixed: true },
  { value: "blue", label: "Cat two", color: "#0052CC", isDisabled: false },
  { value: "purple", label: "Cat three", color: "#5243AA" },
  { value: "red", label: "Cat four", color: "#FF5630", isFixed: true },
];

function Form() {
  const [userData, setUserData] = useState<User[]>([]);
  const [rows, setRows] = useState<User[]>([]);
  const [options] = useState(colourOptions);
  let user: User = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    gender: "",
    category: [],
  };

  const formik: FormikProps<User> = useFormik<User>({
    initialValues: user,
    onSubmit: (values, action) => {
      console.log(
        " ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
        values
      );
      setUserData([...userData, values]);
      setRows([...userData, values]);
      action.resetForm();
    },
  });
  console.log(
    " ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    formik.errors
  );

  useEffect(() => {
    setRows([...userData]);
  }, []);

  // // function handleChangeFname(event: any) {
  // //   setUser((prev) => ({ ...prev, firstName: event.target.value }));
  // //   if (event.target.value) {
  // //     validationData.current.firstNameValid = true;
  // //     checkAllValidationTrue();
  // //   }
  // // }

  // // function handleChangeLname(event: any) {
  // //   setUser((prev) => ({ ...prev, lastName: event.target.value }));
  // //   if (event.target.value) {
  // //     validationData.current.lastNameValid = true;
  // //     checkAllValidationTrue();
  // //   }
  // // }

  // // function handleChangePhone(event: any) {
  // //   var phoneno = /^(?:(?:\+|00)88|01)?\d{11}$/;
  // //   setUser((prev) => ({ ...prev, phone: event.target.value }));
  // //   if (event.target.value.match(phoneno)) {
  // //     if (event.target.value) {
  // //       validationData.current.phoneValid = true;
  // //       checkAllValidationTrue();
  // //     }
  // //     console.log("yes");
  // //   } else {
  // //     console.log("no");
  // //   }
  // // }

  // // function handleChangeGender(event: any) {
  // //   setUser((prev) => ({ ...prev, gender: event.target.value }));
  // //   setChecked(event.target.value);
  // //   if (event.target.value) {
  // //     validationData.current.genderValid = true;
  // //     checkAllValidationTrue();
  // //   }
  // //   console.log(user);
  // // }

  // // function handleChangeEmail(event: any) {
  // //   setUser((prev) => ({ ...prev, emailAddress: event.target.value }));
  // //   if (validator.isEmail(event.target.value)) {
  // //     validationData.current.emailAddressValid = true;
  // //     checkAllValidationTrue();
  // //   }
  // // }

  // // const onChange = (selectedOptions: any) => {
  // //   // console.log("sel", selectedOptions);
  // //   setSelected(selectedOptions);

  // //   setUser((prev) => ({
  // //     ...prev,
  // //     category: selectedOptions.map((d: { label: any }) => d.label),
  // //   }));
  // //   if (selectedOptions.length > 0) {
  // //     validationData.current.categoryValid = true;
  // //     checkAllValidationTrue();
  // //   }
  // // };

  // // function Submit(event: any) {
  // //   event.preventDefault();

  // //   addUser(user);
  // //   console.log(user);

  // //   setUserData([...userData, user]);
  // //   setRows([...userData, user]);
  // //   setSelected([]);
  // //   setChecked("");
  // //   console.log("fin", userData);
  // //   setUser({
  // //     firstName: "",
  // //     lastName: "",
  // //     emailAddress: "",
  // //     phone: "",
  // //     gender: "",
  // //     category: [],
  // //   });
  // //   validationData.current.firstNameValid = false;
  // //   validationData.current.lastNameValid = false;
  // //   validationData.current.emailAddressValid = false;
  // //   validationData.current.phoneValid = false;
  // //   validationData.current.genderValid = false;
  // //   validationData.current.categoryValid = false;
  // //   allTrue.current = false;
  // // }

  // function checkAllValidationTrue() {
  //   let indicator = true;
  //   console.log(validationData);
  //   if (
  //     validationData.current.firstNameValid === true &&
  //     validationData.current.lastNameValid === true &&
  //     validationData.current.emailAddressValid === true &&
  //     validationData.current.phoneValid === true &&
  //     validationData.current.genderValid === true &&
  //     validationData.current.categoryValid === true
  //   ) {
  //     allTrue.current = true;
  //   }
  // }

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
          <form className="Auth-form" onSubmit={formik.handleSubmit}>
            <div className="container">
              <h3 className="Auth-form-title">Form</h3>

              <div className="form-group mt-3">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formik.values.firstName}
                  className="form-control mt-1"
                  placeholder="Enter First Name"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control mt-1"
                  value={formik.values.lastName}
                  placeholder="Enter Last Name"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  name="emailAddress"
                  className="form-control mt-1"
                  value={formik.values.emailAddress}
                  placeholder="Enter Email"
                  onChange={formik.handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={formik.values.phone}
                  name="phone"
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                  onChange={formik.handleChange}
                />
              </div>

              <div className="form-group mt-3">
                <label>Category</label>
                <CustomSelect
                  onChange={(value: any) => {
                    console.log("hrllo", value);
                    formik.setFieldValue(
                      "category",
                      value.map((item: any) => item.label)
                    );
                  }}
                  value={formik.values.category}
                  options={options}
                />
              </div>

              <div className="form-group mt-3">
                <label>Gender</label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={formik.handleChange}
                />{" "}
                Male
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={formik.handleChange}
                />{" "}
                Female
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={formik.handleChange}
                />{" "}
                Other
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-7">
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
                return row.firstName
                  .toLowerCase()
                  .includes(searchedVal.toLowerCase());
              });
              setRows([...filteredRows]);
            }}
          />
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">First Name</TableCell>
                  <TableCell align="left">Last Name</TableCell>
                  <TableCell align="left">Gender</TableCell>
                  <TableCell align="left">Email Address</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Category</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {rows.map((row, k) => (
                  <Fragment>
                    <TableRow key={k++}>
                      <TableCell component="th" scope="row">
                        {row.firstName}
                      </TableCell>
                      <TableCell align="left">{row.lastName}</TableCell>
                      <TableCell align="left">{row.gender}</TableCell>
                      <TableCell align="left">{row.emailAddress}</TableCell>
                      <TableCell align="left">{row.phone}</TableCell>
                      <TableCell align="left">
                        {row.category.join(",")}
                      </TableCell>
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

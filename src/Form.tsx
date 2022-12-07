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
import { formSchema } from "./schemas/userValidation";
import MuiSelect from "./MuiSelect";
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
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      console.log(values);
      setUserData([...userData, values]);
      setRows([...userData, values]);
      action.resetForm({
        values: {
          firstName: "",
          lastName: "",
          emailAddress: "",
          phone: "",
          gender: "",
          category: [],
        },
      });
    },
  });

  useEffect(() => {
    setRows([...userData]);
  }, []);

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
                  onBlur={formik.handleBlur}
                />
                {formik.errors.firstName && formik.touched.firstName ? (
                  <div className="alert alert-danger alert-dismissible fade show">
                    {formik.errors.firstName}
                  </div>
                ) : null}
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
                  onBlur={formik.handleBlur}
                />
                {formik.errors.lastName && formik.touched.lastName ? (
                  <div className="alert alert-danger alert-dismissible fade show">
                    {formik.errors.lastName}
                  </div>
                ) : null}
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
                  onBlur={formik.handleBlur}
                />
                {formik.errors.emailAddress && formik.touched.emailAddress ? (
                  <div className="alert alert-danger alert-dismissible fade show">
                    {formik.errors.emailAddress}
                  </div>
                ) : null}
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
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone ? (
                  <div className="alert alert-danger alert-dismissible fade show">
                    {formik.errors.phone}
                  </div>
                ) : null}
              </div>

              {/* <div className="form-group mt-3">
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
                  onBlur={() => {
                    formik.setFieldTouched("category");
                  }}
                />
                {formik.errors.category && formik.touched.category ? (
                  <div className="alert alert-danger alert-dismissible fade show">
                    {formik.errors.category}
                  </div>
                ) : null}
              </div> */}
              <div className="form-group mt-3">
                <label>Category</label>
                <MuiSelect
                  onChange={(value: any) => {
                    console.log("hrllo", value.target.value);
                    if (value.target.value) {
                      formik.setFieldValue("category", value.target.value);
                    } else {
                      formik.setFieldValue("category", []);
                    }
                  }}
                  value={formik.values.category}
                  onBlur={() => {
                    formik.setFieldTouched("category");
                  }}
                />
                {formik.errors.category && formik.touched.category ? (
                  <div className="alert alert-danger alert-dismissible fade show">
                    {formik.errors.category}
                  </div>
                ) : null}
              </div>

              <div className="form-group mt-3">
                <label>Gender</label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  style={{ marginLeft: 10 }}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
              {formik.errors.gender && formik.touched.gender ? (
                <div className="alert alert-danger alert-dismissible fade show">
                  {formik.errors.gender}
                </div>
              ) : null}

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

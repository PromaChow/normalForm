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

  // const [rows, setRows] = useState<User[]>([]);
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
    })();
  }, []);
  // function handleChangeFname(event: any) {
  //   setUser((prev) => ({ ...prev, firstName: event.target.value }));
  //   if (event.target.value) {
  //     validationData.current.firstNameValid = true;
  //     checkAllValidationTrue();
  //   }
  // }

  // function handleChangeLname(event: any) {
  //   setUser((prev) => ({ ...prev, lastName: event.target.value }));
  //   if (event.target.value) {
  //     validationData.current.lastNameValid = true;
  //     checkAllValidationTrue();
  //   }
  // }

  // function handleChangePhone(event: any) {
  //   var phoneno = /^(?:(?:\+|00)88|01)?\d{11}$/;
  //   setUser((prev) => ({ ...prev, phone: event.target.value }));
  //   if (event.target.value.match(phoneno)) {
  //     if (event.target.value) {
  //       validationData.current.phoneValid = true;
  //       checkAllValidationTrue();
  //     }
  //     console.log("yes");
  //   } else {
  //     console.log("no");
  //   }
  // }

  // function handleChangeGender(event: any) {
  //   setUser((prev) => ({ ...prev, gender: event.target.value }));
  //   setChecked(event.target.value);
  //   if (event.target.value) {
  //     validationData.current.genderValid = true;
  //     checkAllValidationTrue();
  //   }
  //   console.log(user);
  // }

  // function handleChangeEmail(event: any) {
  //   setUser((prev) => ({ ...prev, emailAddress: event.target.value }));
  //   if (validator.isEmail(event.target.value)) {
  //     validationData.current.emailAddressValid = true;
  //     checkAllValidationTrue();
  //   }
  // }

  // const onChange = (selectedOptions: any) => {
  //   // console.log("sel", selectedOptions);
  //   setSelected(selectedOptions);

  //   setUser((prev) => ({
  //     ...prev,
  //     category: selectedOptions.map((d: { label: any }) => d.label),
  //   }));
  //   if (selectedOptions.length > 0) {
  //     validationData.current.categoryValid = true;
  //     checkAllValidationTrue();
  //   }
  // };

  // function Submit(event: any) {
  //   event.preventDefault();

  //   addUser(user);
  //   console.log(user);

  //   setUserData([...userData, user]);
  //   setRows([...userData, user]);
  //   setSelected([]);
  //   setChecked("");
  //   console.log("fin", userData);
  //   setUser({
  //     firstName: "",
  //     lastName: "",
  //     emailAddress: "",
  //     phone: "",
  //     gender: "",
  //     category: [],
  //   });
  //   validationData.current.firstNameValid = false;
  //   validationData.current.lastNameValid = false;
  //   validationData.current.emailAddressValid = false;
  //   validationData.current.phoneValid = false;
  //   validationData.current.genderValid = false;
  //   validationData.current.categoryValid = false;
  //   allTrue.current = false;
  // }

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
  function showData() {
    console.log(userData[1].address.city);
  }
  return (
    <button onClick={showData}>hello</button>
    // // <div className="row overflow-auto">

    //   <div className="col-7">
    //     <div
    //       className="container-fluid"
    //       style={{
    //         alignContent: "center",
    //         justifyContent: "center",
    //         margin: "10px",
    //       }}
    //     >
    //       <SearchComponent
    //         onChangeHandle={(searchedVal: string) => {
    //           let filteredRows = userData.filter((row) => {
    //             return row.firstName
    //               .toLowerCase()
    //               .includes(searchedVal.toLowerCase());
    //           });
    //           setRows([...filteredRows]);
    //         }}
    //       />
    //       <TableContainer component={Paper}>
    //         <Table
    //           sx={{ minWidth: 650 }}
    //           size="small"
    //           aria-label="a dense table"
    //         >
    //           <TableHead>
    //             <TableRow
    //               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    //             >
    //               <TableCell align="left">First Name</TableCell>
    //               <TableCell align="left">Last Name</TableCell>
    //               <TableCell align="left">Gender</TableCell>
    //               <TableCell align="left">Email Address</TableCell>
    //               <TableCell align="left">Phone Number</TableCell>
    //               <TableCell align="left">Category</TableCell>
    //             </TableRow>
    //           </TableHead>

    //           <TableBody>
    //             {rows.map((row, k) => (
    //               <Fragment>
    //                 <TableRow key={k++}>
    //                   <TableCell component="th" scope="row">
    //                     {row.firstName}
    //                   </TableCell>
    //                   <TableCell align="left">{row.lastName}</TableCell>
    //                   <TableCell align="left">{row.gender}</TableCell>
    //                   <TableCell align="left">{row.emailAddress}</TableCell>
    //                   <TableCell align="left">{row.phone}</TableCell>
    //                   <TableCell align="left">
    //                     {row.category.join(",")}
    //                   </TableCell>
    //                 </TableRow>
    //               </Fragment>
    //             ))}
    //           </TableBody>
    //         </Table>
    //       </TableContainer>
    //     </div>
    //   </div>
  );
}

export default Form;

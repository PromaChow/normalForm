import "./Form.css";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
function Form() {
  const data = [
    { name: "Cat one", id: 1 },
    { name: "Cat two", id: 2 },
    { name: "Cat three", id: 3 },
    { name: "Cat four", id: 4 },
  ];

  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();
  const [category, setCategory] = useState();
  const [options] = useState(data);
  console.log(gender);
  function handleChangeFname(event) {
    setFname(event.target.value);
  }

  function handleChangeLname(event) {
    setLname(event.target.value);
  }

  function handleChangePhone(event) {
    setPhone(event.target.value);
  }

  function handleChangeGender(event) {
    setGender(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangeCategory(event) {
    setCategory(event.target.value);
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Form</h3>

          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
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
              placeholder="Enter Last Name"
              onChange={handleChangeLname}
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter Email"
              onChange={handleChangeEmail}
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone Number</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter Phone Number"
              onChange={handleChangePhone}
            />
          </div>

          <div className="form-group mt-3">
            <label>Category</label>
            <Multiselect options={options} displayValue="name"></Multiselect>
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

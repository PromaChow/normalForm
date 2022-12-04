import { useState } from "react";
import { User } from "./model-files/User";
import { Multiselect } from "multiselect-react-dropdown";
import "./Form.css";
var validator = require("validator");
function Form() {
  const data = [
    { name: "Cat one", id: 1 },
    { name: "Cat two", id: 2 },
    { name: "Cat three", id: 3 },
    { name: "Cat four", id: 4 },
  ];
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phone: "",
    gender: "",
    category: [],
  });
  const [options] = useState(data);
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

  function Submit() {
    console.log(user);
  }

  return (
    <div className="row overflow-auto">
      <div className="col-sm">
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
                  type="tel"
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                  onChange={handleChangePhone}
                />
              </div>

              <div className="form-group mt-3">
                <label>Category</label>
                <Multiselect
                  options={options}
                  displayValue="name"
                  onSelect={(event) => {
                    setUser((prev) => ({
                      ...prev,
                      category: event,
                    }));
                    console.log(Array.isArray(event));
                  }}
                  onRemove={(event) => {
                    setUser((prev) => ({
                      ...prev,
                      category: event,
                    }));
                  }}
                ></Multiselect>
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
                  type="button"
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
      <div className="col-sm">
        <div
          className="container"
          style={{
            alignContent: "center",
            justifyContent: "center",
            margin: "10px",
          }}
        >
          sfs
        </div>
      </div>
    </div>
  );
}

export default Form;

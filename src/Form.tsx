import { useState } from "react";
import { User } from "./model-files/User";
import { Multiselect } from "multiselect-react-dropdown";
import "./Form.css";
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
                />
              </div>
              <div className="form-group mt-3">
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter Last Name"
                />
              </div>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group mt-3">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="form-control mt-1"
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="form-group mt-3">
                <label>Category</label>
                <Multiselect
                  options={options}
                  displayValue="name"
                ></Multiselect>
              </div>

              <div className="form-group mt-3">
                <label>Gender</label>
                <input
                  type="radio"
                  value="Male"
                  name="gender"
                  style={{ marginLeft: 10 }}
                />{" "}
                Male
                <input
                  type="radio"
                  value="Female"
                  name="gender"
                  style={{ marginLeft: 10 }}
                />{" "}
                Female
                <input
                  type="radio"
                  value="Other"
                  name="gender"
                  style={{ marginLeft: 10 }}
                />{" "}
                Other
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="button" className="btn btn-primary">
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

import "./Form.css";
import { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
var validator = require('validator');
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
  const [category, setCategory] = useState([]);
  const [options] = useState(data);
  

  function handleChangeFname(event) {
    setFname(event.target.value);
  }

  function handleChangeLname(event) {
    setLname(event.target.value);
  }

  function handleChangePhone(event) {
     var phoneno = /^(?:(?:\+|00)88|01)?\d{11}$/;
      if(event.target.value.match(phoneno)) {
        setPhone(event.target.value);
        console.log("yes");
      }
      else {
        console.log("no");
      }
    
  }

  function handleChangeGender(event) {
    setGender(event.target.value);
  }
  function handleChangeEmail(event) {
    if(validator.isEmail(event.target.value)){
      setEmail(event.target.value);
    }
    else console.log("no");
    
  }


  function Submit(){
    let result = {"First Name": fname, "Last Name":lname, "Email Address":email,"Phone Number":phone, "Gender":gender, "Category":category}
    console.log(result);
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
              type="tel"
              className="form-control mt-1"
              placeholder="Enter Phone Number"
              onChange={handleChangePhone}
            />
          </div>

          <div className="form-group mt-3">
            <label>Category</label>
            <Multiselect options={options} 
            displayValue="name" 
            onSelect={(event)=>{
              setCategory(event);
              console.log(Array.isArray(event))
            }}
            onRemove = {(event)=>{
              setCategory(event);
             console.log(event)
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
            <button type="button" className="btn btn-primary" onClick={Submit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;

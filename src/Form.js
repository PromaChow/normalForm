
import './Form.css';
import { useState } from 'react';
import Select from "react-dropdown-select";
function Form() {
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState();
    const [gender, setGender] = useState();
    const [category, setCategory] = useState();
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
      

      
    const options = [
        { 
          value: 1,
          label: "Category A"
        },
        {
          value:  2,
          label: "Category B"
        }
        ,
        {
            value:  3,
            label: "Category C"
          }
      ];

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
            <Select
    multi
    options={options}
    onChange={(values) => this.onChange({handleChangeCategory})}
  />
        </div>

        <div className="form-group mt-3">
          <label>Gender</label>
          <input type="radio" value="Male" name="gender" style={{marginLeft:10}} onChange={handleChangeGender}/> Male
        <input type="radio" value="Female" name="gender" style={{marginLeft:10}} onChange={handleChangeGender} /> Female
        <input type="radio" value="Other" name="gender" style={{marginLeft:10}} onChange={handleChangeGender} /> Other
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

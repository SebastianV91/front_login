import {  useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

function Register() {

    const [employeeName, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8084/api/v1/employee/save", {
          employeeName: employeeName,
          email: email,
          password: password,
          });
          Swal.fire({
            title: "Congratulations!",
            text: "Employee Registration Successfully",
            icon: "success"
          });
        } catch (err) {
          alert(err);
        }
      }

    return (

      <div>

<div>
<nav className="navbar navbar-expand navbar-dark bg-dark">
      <a href="/" className="navbar-brand">
            Login
          </a>
      </nav>
    <div class="container mt-4" >
    <div class="card">
            <h1>Student Registation</h1>
    
    <form>
        <div class="form-group">
          <label>Employee name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={employeeName}
          onChange={(event) => {
            setEmployeename(event.target.value);
          }}
          />
        </div>
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>
       
      </form>
    </div>
    </div>
     </div>
      </div>
    );
  }
  
  export default Register;
import React from "react";
import {useFormik} from "formik";

function App() {
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      alert('Login Succesful');
    },
    validate: values => {
      let errors = {};
      if (!values.email) errors.email = 'Field required';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = 'Field required';      
      return errors;
    }
  });
  
  return (
    <div class="card w-75 m-auto mt-5">
      <div className="m-4">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="labelEmail" className="form-label">Email</label>
            <input id="emailField" name="email" className="form-control" type="email" onChange={formik.handleChange}/>
            {formik.errors.email ? <div id="emailError" className="form-text text-danger">{formik.errors.email}</div> : null}
          </div>
          <div className="mb-4">
            <label htmlFor="labelPassword" className="form-label">Password</label>
            <input id="pswField" name="password" className="form-control" type="text" onChange={formik.handleChange}/>
            <div id="pswError" className="form-text text-danger">{formik.errors.password}</div>
          </div>
          <div className="mb-4 d-grid gap-2">
            <button id="submitBtn" type="submit" className="mt-4 btn btn-primary btn-block">Submit</button>
          </div>
        </form>
      </div>
    </div>
    
    );
  }
  
  export default App;
  
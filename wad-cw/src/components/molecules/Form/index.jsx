import Navbar from "../Navbar";
import React, { useState } from "react";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 


const Form1 = () => {
 const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '100px'}}>Sign In</h1>
      <center>
        <form
          style={{
            width: '700px',
            borderTopWidth: '5px',
            borderRadius: '10px',
            borderTopStyle: 'solid',
            marginTop: '10px',
            backgroundColor: '#ADD8E6',
            borderTopColor: '#000080',
            borderBottom: '30px',
            borderBottomStyle: 'solid',
            borderLeft:'4px',
            borderRight:'4px',
            borderLeftStyle:'solid',
            borderRightStyle:'solid',
            marginBottom:'100px'
          }}
          className="row g-3"
        >
          <div className="col-md-6">
            <label style={{color: '#000080'}} htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="zehan@gmail.com"
              
            />
          </div>
          <div className="col-md-6">
            <label style={{color: '#000080'}} htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <div className="input-group">
              <input
                type={passwordVisible ? 'text' : 'password'}
                className="form-control"
                id="inputPassword4"
                placeholder="Password"
                
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <div className="col-12">
            <label style={{color: '#000080'}} htmlFor="inputAddress" className="form-label">
              Address Line 1
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="No. 508 wackwella Road"
             
            />
          </div>
          <div className="col-12">
            <label style={{color: '#000080'}} htmlFor="inputAddress2" className="form-label">
              Address Line 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="galle"
              
            />
          </div>
          <div className="col-md-6">
            <label style={{color: '#000080'}} htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              placeholder="Galle"
              
            />
          </div>
          <div className="col-md-4">
            <label style={{color: '#000080'}} htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              id="inputState"
              className="form-select"
             
            >
              <option selected>Choose...</option>
              <option>Sri Lanka</option>
              <option>India</option>
              <option>USA</option>
              <option>Pakistan</option>
            </select>
          </div>
          <div className="col-md-2">
            <label style={{color: '#000080'}} htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZip"
              placeholder="800000"
            
            />
          </div>

          <center>
            <div className="col-12">
              <button
                style={{
                  padding: '5px',
                  width: '80px',
                  marginTop: '30px',
                  backgroundColor: '#000080',
                  marginBottom: '30px',
                }}
                type="submit"
                className="btn btn-primary"
              >
                Sign in
              </button>
            </div>
          </center>
        </form>
      </center>
    </div>
  );
}

export default Form1;

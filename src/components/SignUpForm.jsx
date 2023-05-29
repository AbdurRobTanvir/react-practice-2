import React, { useState } from "react";
import Output from "./Output";

const SignUpForm = () => {
  const [emailAddress, setemailAddress] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [country, setCountry] = useState();
  const [education, setEducation] = useState();
  const [check, setCheck] = useState();
  const [secondCheck, setSecondCheck] = useState();
  const [submit, setSubmit] = useState();
  const [value, setValue] = useState();
  
  return (
    <div className="container">
      {!submit && (
        <div>
          <div className="title">Sign Up</div>
          <from>
            {!check && (
              <>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Email Address"
                    value={emailAddress}
                    onChange={(event) => setemailAddress(event.target.value)}
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  ></input>
                </div>
                <button
                  className="next-button"
                  onClick={() => {
                    setCheck("first form done");
                  }}
                >
                  NEXT
                </button>
              </>
            )}
            {check && !secondCheck && (
              <>
                <div className="clearfix">
                  <div className="float-left">
                    <input
                      className="form-element-half"
                      type="text"
                      placeholder="First Name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                    ></input>
                  </div>
                  <div className="float-right">
                    <input
                      className="form-element-half"
                      type="text"
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                    ></input>
                  </div>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Country of Residence"
                    value={country}
                    onChange={(event) => setCountry(event.target.value)}
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Level of Education"
                    value={education}
                    onChange={(event) => setEducation(event.target.value)}
                  ></input>
                </div>
                <div className="clearfix">
                  <button
                    className="previous-submit-button float-left"
                    onClick={() => {
                      setCheck();
                    }}
                  >
                    PREVIOUS
                  </button>
                  <button
                    className="previous-submit-button float-right"
                    onClick={() => {
                      const value = {
                        emailAddress,
                        username,
                        password,
                        firstName,
                        lastName,
                        country,
                        education,
                      };
                      setValue(value);
                      setSubmit("second form done");
                    }}
                  >
                    NEXT
                  </button>
                </div>
              </>
            )}
          </from>
        </div>
      )}
      {submit && (
        <>
          <Output
            value={value}
            setSecondCheck={setSecondCheck}
            setSubmit={setSubmit}
            setValue={setValue}
          />
        </>
      )}
    </div>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import Output from "./Output";

const SignUpForm = () => {

  const [values, setValues] = useState({
    emailAddress: "",
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    country: "",
    education: "",
  });
  const [steps, setSteps] = useState({
    firstPage: false,
    secondPage: false,
    thirdPage: false,
    fourthPage: false,
  });

  return (
    <div className="container">
      {!steps.thirdPage && (
        <div>
          <div className="title">Sign Up</div>
          <from>
            {!steps.firstPage && (
              <>
                <div>
                  <input
                    className="form-element"
                    type="email"
                    placeholder="Email Address"
                    value={values.emailAddress}
                    onChange={(event) =>
                      setValues({ ...values, emailAddress: event.target.value })
                    }
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Username"
                    value={values.userName}
                    onChange={(event) =>
                      setValues({ ...values, userName: event.target.value })
                    }
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={(event) =>
                      setValues({ ...values, password: event.target.value })
                    }
                  ></input>
                </div>
                <button
                  className="next-button"
                  onClick={() => setSteps({ ...steps, firstPage: true })}
                >
                  NEXT
                </button>
              </>
            )}
            {steps.firstPage && (
              <>
                <div className="clearfix">
                  <div className="float-left">
                    <input
                      className="form-element-half"
                      type="text"
                      placeholder="First Name"
                      value={values.firstName}
                      onChange={(event) =>
                        setValues({ ...values, firstName: event.target.value })
                      }
                    ></input>
                  </div>
                  <div className="float-right">
                    <input
                      className="form-element-half"
                      type="text"
                      placeholder="Last Name"
                      value={values.lastName}
                      onChange={(event) =>
                        setValues({ ...values, lastName: event.target.value })
                      }
                    ></input>
                  </div>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Country of Residence"
                    value={values.country}
                    onChange={(event) =>
                      setValues({ ...values, country: event.target.value })
                    }
                  ></input>
                </div>
                <div>
                  <input
                    className="form-element"
                    type="text"
                    placeholder="Level of Education"
                    value={values.education}
                    onChange={(event) =>
                      setValues({ ...values, education: event.target.value })
                    }
                  ></input>
                </div>
                <div className="clearfix">
                  <button
                    className="previous-submit-button float-left"
                    onClick={() => setSteps({ ...steps, firstPage: false })}
                  >
                    PREVIOUS
                  </button>
                  <button
                    className="previous-submit-button float-right"
                    onClick={() => setSteps({ ...steps, thirdPage: true })}
                  >
                    NEXT
                  </button>
                </div>
              </>
            )}
          </from>
        </div>
      )}
      {steps.thirdPage && (
        <Output
          values={values}
          setSteps={setSteps}
          steps={steps}
        />
      )}
    </div>
  );
};

export default SignUpForm;

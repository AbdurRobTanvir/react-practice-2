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
  const [step, setStep] = useState(0)

  return (
    <div className="container">
      {
        step < 2 &&
        <div>
          <div className="title">Sign Up</div>
          <from>
            {
              step === 0 &&
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
                  onClick={() => setStep(step + 1)}
                >
                  NEXT
                </button>
              </>
            }
            {
              step === 1 &&
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
                    >
                    </input>
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
                    onClick={() => setStep(step - 1)}
                  >
                    PREVIOUS
                  </button>
                  <button
                    className="previous-submit-button float-right"
                    onClick={() => setStep(step + 1)}
                  >
                    NEXT
                  </button>
                </div>
              </>
            }
          </from>
        </div>
      }
      {
        step >= 2 &&
        <Output values={values} setStep={setStep} step={step} />
      }
    </div>
  );
};

export default SignUpForm;

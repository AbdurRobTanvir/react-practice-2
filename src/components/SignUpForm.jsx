import React, { useState } from "react";
import Output from "./Output";
import InputComponent from "./InputComponent";
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
  const [step, setStep] = useState(0);

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
                  <InputComponent
                    type="email"
                    placeholder="Email Address"
                    className="form-element"
                    values={values}
                    setValues={setValues}
                    name="emailAddress"
                  />
                </div>
                <div>
                  <InputComponent
                    type="text"
                    placeholder="Username"
                    className="form-element"
                    values={values}
                    setValues={setValues}
                    name="userName"
                  />
                </div>
                <div>
                  <InputComponent
                    type="password"
                    placeholder="Password"
                    className="form-element"
                    values={values}
                    setValues={setValues}
                    name="password"
                  />
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
                    <InputComponent
                      type="text"
                      placeholder="First Name"
                      className="form-element-half"
                      values={values}
                      setValues={setValues}
                      name="firstName"
                    />
                  </div>
                  <div className="float-right">
                    <InputComponent
                      type="text"
                      placeholder="Last Name"
                      className="form-element-half"
                      values={values}
                      setValues={setValues}
                      name="lastName"
                    />
                  </div>
                </div>
                <div>
                  <InputComponent
                    type="text"
                    placeholder="Country of Residence"
                    className="form-element"
                    values={values}
                    setValues={setValues}
                    name="country"
                  />
                </div>
                <div>
                  <InputComponent
                    type="text"
                    placeholder="Level of Education"
                    className="form-element"
                    values={values}
                    setValues={setValues}
                    name="education"
                  />
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

import React from "react";

const Output = ({ values, step, setStep }) => {

  return (
    <>
      {step < 3 &&
        <>
          <div className="output">
            <div className="output-title">Email</div>
            <div>{values.emailAddress}</div>
            <div className="output-title">Username</div>
            <div>{values.userName}</div>
            <div className="output-title">First Name</div>
            <div>{values.firstName}</div>
            <div className="output-title">Last Name</div>
            <div>{values.lastName}</div>
            <div className="output-title">Country of Residence</div>
            <div>{values.country}</div>
            <div className="output-title">Level of Education</div>
            <div>{values.education}</div>
          </div>

          <div className="clearfix">
            <button
              className="previous-submit-button float-left"
              onClick={() =>
                setStep(step - 1)
              }
            >
              PREVIOUS
            </button>
            <button
              className="previous-submit-button float-right"
              onClick={() => setStep(step + 1)}
            >
              CONFIRM & CONTINUE
            </button>
          </div>
        </>
      }
      {
        step === 3 &&
        <div className="done">You are done!</div>
      }
    </>
  );
};

export default Output;

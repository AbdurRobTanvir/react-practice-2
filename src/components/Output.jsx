import React, { useState } from "react";

const Output = ({ value, setSecondCheck, setSubmit, setValue }) => {
  const [done, setDone] = useState();
    
  return (
    <>
      {!done && (
        <>
          <div className="output">
            <div className="output-title">Email</div>
            <div>{value.emailAddress}</div>
            <div className="output-title">Username</div>
            <div>{value.username}</div>
            <div className="output-title">First Name</div>
            <div>{value.firstName}</div>
            <div className="output-title">Last Name</div>
            <div>{value.lastName}</div>
            <div className="output-title">Country of Residence</div>
            <div>{value.country}</div>
            <div className="output-title">Level of Education</div>
            <div>{value.education}</div>
          </div>
          
          <div className="clearfix">
            <button
              className="previous-submit-button float-left"
              onClick={() => {
                setSubmit();
                setValue();
                setSecondCheck();
              }}
            >
              PREVIOUS
            </button>
            <button
              className="previous-submit-button float-right"
              onClick={() => {
                setDone("done");
              }}
            >
                 CONFIRM & CONTINUE
            </button>
          </div>
        </>
      )}
      { done &&
        <>
        <div className="done">
        You are done!
        </div>
        </>
      }
    </>
  );
};

export default Output;

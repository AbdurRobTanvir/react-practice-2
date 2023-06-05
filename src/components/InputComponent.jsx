import React from 'react'

const InputComponent = ({ type, placeholder, className, values, setValues, name }) => {
  return (
    <div>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        value={values[name]}
        name={name}
        onChange={(event) => {
          setValues({ ...values, [name]: event.target.value });
        }
        }
      ></input>
    </div>
  )
}

export default InputComponent

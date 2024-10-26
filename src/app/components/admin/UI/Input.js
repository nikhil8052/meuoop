import React from 'react';

const Input = ({
  label,           // Label for the input field
  type = 'text',   // Input type (e.g., text, password, email, etc.)
  name,            // Name attribute for the input
  value,           // Value of the input field
  onChange,        // Function to handle input change
  placeholder = '',// Placeholder text
  required = false,// If the input is required
  className = '',  // Additional custom class names
  col = 12         // Bootstrap column size for responsiveness (default: 12)
}) => {
  return (
    <div className={`mb-3 col-md-${col}`}>
      {label && <label htmlFor={name} className="form-label">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`form-control ${className}`}
      />
    </div>
  );
};

export default Input;

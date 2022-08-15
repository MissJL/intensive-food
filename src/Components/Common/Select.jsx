import React from "react";

const Select = ({ name, label, selections, error, value, onChange }) => {
  return (
    <div className="form-group mb-3">
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="form-select"
      >
        <option value="">Select ...</option>
        {selections.map((selection) => (
          <option key={selection._id} value={selection._id}>
            {selection.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;

import React from "react";

function Input({ name, label, value, onChange, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        onChange={onChange}
        //här skriver vi över inputs eget value
        value={value}
        className="form-control"
        id={name}
        name={name}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
}

export default Input;

//"for" attribut på en labbel samarbetar med id i input. Det gör att vi kan klicka på texten och förflytta sig till input box.
//<input type="checkbox" class="form-check-input" id="exampleCheck1">
//"Type" används för att antingen specificera "type=text" eller "type=password", ska texten synas eller ej?

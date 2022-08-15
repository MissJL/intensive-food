import React, { Component } from "react";
import Input from "./Input";
import Select from "./Select";
//abstrakt komponent som inte har render funktion = detta blir en mall till andra specifika form

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate() {
    const options = { abortEarly: false };
    const { error } = this.schema.validate(this.state.data, options);

    if (!error) return null;

    const errors = {};
    for (const detail of error.details)
      errors[detail.context.key] = detail.message;
    //"mappa" en array till objekt med for of loop istället för vanlig map.
    return errors;
  }

  validateProperty = ({ name, value }) => {
    const subSchema = this.schema.extract(name);
    const { error } = subSchema.validate(value); //vi vill ha abortEarly här för den ska ge oss error för 1 input

    if (!error) return null;
    return error.message;
  };

  //error meddelande visas under tiden input görs
  handleChange = ({ target: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  handleSubmit = (e) => {
    //förhindrar default beteende av fullpage reload (händer för buttons i form), för annars kan vi inte visa errors, condition rendering
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  renderButton(label) {
    return (
      <button className="btn btn-primary" disabled={this.validate()}>
        {label}
      </button>
    );
  }

  renderSelect(name, label, selections) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        onChange={this.handleChange}
        selections={selections}
      />
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={data[name]}
        error={errors[name]}
        type={type}
        onChange={this.handleChange}
      />
    );
  }
}

export default Form;

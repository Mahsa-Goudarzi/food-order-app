import React from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  const input = props.input;
  const label = props.label;

  return (
    <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input {...input} />
    </div>
  );
}

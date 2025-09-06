// import React from 'react'
import "./Button.css";

type ButtonProps = {
  title: string;
};

const Button = ({ title }: ButtonProps) => {
  return <button className="btn">{title}</button>;
};

export default Button;

import React from 'react';
import spinner from './spinner.svg';
import './Spinner.css';

export default function Spinner() {
  return (
    <img className="spinner" src={spinner} alt="Spinner" />
  );
}


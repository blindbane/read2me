import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';

export default function AppNav() {
  return (
    <div>
      <Spinner />

      <ul>
        <li>
          <Link href="/" to="/">Home</Link>
        </li>
        <li>
          <Link href="/about" to="/about">About</Link>
        </li>
        <li>
          <Link href="/topics" to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />
    </div>
  );
}

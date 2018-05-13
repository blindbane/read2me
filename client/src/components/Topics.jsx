import React from 'react';
import { Route, Link } from 'react-router-dom';

import Topic from './Topic';

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link href={`${match.url}/rendering`} to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link href={`${match.url}/components`} to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link href={`${match.url}/props-v-state`} to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}


export default Topics;

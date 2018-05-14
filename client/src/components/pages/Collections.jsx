import React, { Component } from 'react';
import axios from 'axios';
import PaperSheet from '../atoms/PaperSheet';
import Spinner from '../atoms/Spinner';

export default class Collections extends Component {
  state = {
    texts: [],
  }
  componentDidMount() {
    axios.get('/text').then((res) => {
      this.setState({
        texts: res.data,
      });
    });
  }
  render() {
    if (!this.state.texts) {
      return <Spinner />;
    }
    return (
      <div>
        <h2>Collections</h2>
        {this.state.texts.map(text => <PaperSheet key={text.id} title={text.title} username={text.username} body={text.text} />)}
      </div>
    );
  }
}

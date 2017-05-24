import React, { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import BookTitle from './title';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookTitle />
        <BookList />
        <BookDetail />
      </div>
      
    );
  }
}

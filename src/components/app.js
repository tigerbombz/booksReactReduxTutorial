import React, { Component } from 'react';
import BookList from "../containers/book-list";
// import BookList2 from "../containers/book-list2";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}

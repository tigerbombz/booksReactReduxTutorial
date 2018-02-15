import React, {Component} from 'react';
import {connect} from 'react-redux'; // react-redux is glue between React & Redux

class BookList extends Component{

  renderList(){
    {/* map over an array of books*/}
    return this.props.books.map((book) => {
      return(
        <li key={book.title} className="list-group-item">
        {/* each book in the array, we create a LI that contains book title  */}
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {/* renderList is a helper function */}
        {this.renderList()}
      </ul>
    )
  }
}


function mapStateToProps(state){
  // Whatever is returned will show up as props inside our container/component
  // inside of BookList

  return{        // always returning an OBJECT
    // books is object we want to pass as props to our component
    books: state.books    // state.books is from index.js in 'reducers folder';
  }
}

// connect takes a function & component as PARAMS
export default connect(mapStateToProps)(BookList);

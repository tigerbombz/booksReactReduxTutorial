import React, {Component} from 'react';
import {connect} from 'react-redux'; // react-redux is glue between React & Redux
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

  renderList(){
    {/* map over an array of books*/}
    return this.props.books.map((book) => {
      return(
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
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

//anything returned from this function will end up as props on the BookList container
function matchDispatchToProps(dispatch){
  //whenever selectBook is called, the result should be passed to all our reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


// connect takes a function & component as PARAMS
//promote BookList from a component to a container - it needs to know
//about this new dispatch method, selectBook. Make it avail as a prop
export default connect(mapStateToProps, matchDispatchToProps)(BookList);

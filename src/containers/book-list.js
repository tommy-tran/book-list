// Renders a list of books
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    return {
        // returns as props inside BookList
        books: state.books
    }
}

// Returns props to BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result is passed to all reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container
// Make the dispatch method selectBook available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
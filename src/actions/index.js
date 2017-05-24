export function selectBook(book) {
    // selectBook is an ActionCreator, returns an action(object with type property)
    return {
        type: 'BOOK_SELECTED', // type is always uppercase
        payload: book
    }
    
};


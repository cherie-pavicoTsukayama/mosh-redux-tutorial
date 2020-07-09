import { Map } from 'immutable';

let book = {title: "Harry Potter"};

function publish(book) {
  book.isPublished = true;
}

publish(book);

console.log(book);

{
  type: "bugRemoved",
  payload: {
    id: 1
  }
}

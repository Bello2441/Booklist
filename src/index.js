import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//stateless functional component
const books = [
  { id: 1,
  img : 'https://images-na.ssl-images-amazon.com/images/I/A1Ee%2BYjn92L._AC_UL200_SR200,200_.jpg',
  title : 'The Polar Express',
  author : 'Chris Van Allsburg',
},
{ id: 2,
  img : 'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
  title : 'Greenlights',
  author : 'Matthew McConaughey',
},
{ id : 3,
  img : 'https://images-na.ssl-images-amazon.com/images/I/41cW7tUznyL.__AC_SY300_QL70_ML2_.jpg',
  title : 'Sky Scout',
  author : 'Yu-Gi-Oh',
}];

function BookList() { //This is our component, React knows with capital letter
  return (
    <section className="booklist">
      {books.map((book)=>{
        return (
        <Book key={book.id} {...book}></Book>
          );
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const {img, title, author} = props;
  const clickHandler = () => {
    alert('Hello World');
  }
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        Hello!
      </button>
    </article>
  );
}
//inline styling is more powerful than added css
// brackets must return a value

ReactDom.render(<BookList />, document.getElementById('root'));

/*const Person = () => <h2>Hello World</h2>;
const Message = () => {
  return <p>this is my message</p>;
}
const Greeting = () => {
  return React.createElement(
    'div', 
    {},
    React.createElement('h1',{}, 'Hello World')
    );
}*/
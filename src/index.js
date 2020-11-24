import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//stateless functional component
const firstBook = {
  img : 'https://images-na.ssl-images-amazon.com/images/I/A1Ee%2BYjn92L._AC_UL200_SR200,200_.jpg',
  title : 'The Polar Express',
  author : 'Chris Van Allsburg',
}

const secBook = {
  img : 'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
  title : 'Greenlights',
  author : 'Matthew McConaughey',
}

const thirdBook = {
  img : 'https://images-na.ssl-images-amazon.com/images/I/91F6EG8aJ%2BL._AC_UL200_SR200,200_.jpg',
  title : 'The Monster at the End of this Book',
  author : 'Grover from Sesame Street'
}

function BookList() { //This is our component, React knows with capital letter
  return (
    <section className="booklist">
      <Book 
      img={firstBook.img} 
      title={firstBook.title} 
      author={firstBook.author}
      />
      <Book 
      img={secBook.img} 
      title={secBook.title} 
      author={secBook.author}
      />
      <Book
      img = {thirdBook.img}
      title = {thirdBook.title}
      author = {thirdBook.author}
      >
        <p>
          This book is about a super hero 
          who can kill Superman.
        </p>
      </Book>
    </section>
  );
}

const Book = (props) => {
  //const {img, title, author} = props;
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt=""/>
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
      {props.children}
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
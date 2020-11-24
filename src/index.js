import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

//stateless functional component
const books = [{
  img : 'https://images-na.ssl-images-amazon.com/images/I/A1Ee%2BYjn92L._AC_UL200_SR200,200_.jpg',
  title : 'The Polar Express',
  author : 'Chris Van Allsburg',
},
{
  img : 'https://images-na.ssl-images-amazon.com/images/I/81Kc8OsbDxL._AC_UL200_SR200,200_.jpg',
  title : 'Greenlights',
  author : 'Matthew McConaughey',
}];

const names = ['john', 'peter','susan'];
const newName = names.map((name) => {
  return <h1>{name}</h1>
});
console.log(newName)
function BookList() { //This is our component, React knows with capital letter
  return (
    <section className="booklist">
      {newName}
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt=""/>
      <h1>{title}</h1>
      <h4>{author}</h4>
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
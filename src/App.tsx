import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
  const API_URL = 'http://localhost:3000/books';
  const [books, setBooks] = useState<Book[]>([]);

  const loadData = async () => {
    await fetch(API_URL)
    .then(res => res.json())
    .then(response => setBooks(response))
    .catch(e => console.log(e));
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="App">
      {books.map((book, index) => 
        <Book key={index} title={book.title} author={book.author} rating={book.rating} />
      )}
    </div>
  );
}

interface Book {
  id?: number
  title: string
  author: string
  rating: number
}

const Book: React.FC<Book> = props => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.author}</p>
      <p>{props.rating}</p>
    </>
  );
}

export default App;

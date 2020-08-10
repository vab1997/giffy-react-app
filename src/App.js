import React from 'react';
import './App.css';
import {Route, Link} from 'wouter';
import ListOfGifs from './components/ListOfGifs';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/messi">Gifs Messi</Link>
        <Link to="/gif/cristiano">Gifs CR7</Link>
        <Link to="/gif/maradona">Gifs Maradona</Link>
        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;

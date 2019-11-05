import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './Scenes/HomePage.jsx';
import HeaderComponent from './Components/Header.jsx';

export default function App( props ){
  return(
    <Router>
        <HeaderComponent/>
        <Route
          path="/"
          render={ ( props ) => <HomePage /> }
        />
      <footer>
      </footer>
    </Router>
  )
};
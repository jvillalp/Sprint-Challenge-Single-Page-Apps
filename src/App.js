import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <Link to="/WelcomePage">Welcome Page</Link>
        <Link to="/">CharacterList</Link>
        <Route exact path="/WelcomePage" component={WelcomePage}/>
        <Route exact path="/" component={CharacterList}/>
      </Router>
    </main>
  );
}

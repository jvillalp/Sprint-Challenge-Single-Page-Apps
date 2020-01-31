import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from './components/WelcomePage';
import styled from "styled-components";
import SearchForm from "./components/SearchForm.js";

const MainNav = styled.div`

display:flex;
justify-content: space-around;
font-size: 20px;
text-decoration: none;
`;

export default function App() {
  return (
    <main>
      
      <Header />
      <Router >
      
        
        <MainNav>
        <Link to="/WelcomePage">Welcome Page</Link>
        <Link to="/">CharacterList</Link>
        </MainNav>

      

        <Route exact path="/WelcomePage" component={WelcomePage}/>
        <Route exact path="/" component={CharacterList}/>
        
      </Router>
      
    </main>
  );
}

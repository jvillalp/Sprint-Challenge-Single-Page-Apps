import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import styled from "styled-components";
import SearchForm from "./components/SearchForm.js";

const MainNav = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-around;
  font-size: 20px;
  text-decoration: none;
  color: #20b2aa;

  &:hover{
    color:#778899 ;
  }
`;

export default function App() {
  return (
    <main>
      <Header />
      <Router>
        <MainNav>
          <StyledLink to="/WelcomePage">Welcome Page</StyledLink>
          <StyledLink to="/">CharacterList</StyledLink>
        </MainNav>
        <Route exact path="/WelcomePage" component={WelcomePage} />
        <Route exact path="/" component={CharacterList} />
      </Router>
    </main>
  );
}

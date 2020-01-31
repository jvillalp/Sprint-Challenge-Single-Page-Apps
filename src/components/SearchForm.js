import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const SearchPa = styled.div`
border: 2px solid #FFF0F5;
color: #8FBC8F;
padding: 2%;
`;

const SearchBar = styled.div`
background: #FFF0F5;
color: #8FBC8F;
margin: 2%;
display:flex;
justify-content: center;
padding: 2%;
`;
const NavPa = styled.nav`
color: #8FBC8F;
`;
const Input = styled.input`
color: palevioletred;
font-size: 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;
const Label=styled.label`
color: palevioletred;
`;

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(" ");

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      console.log("hello there", res.data.results);
      const characters = res.data.results.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      );
      setData(characters);
    });
  }, [query]);

  const handleInputChange = event => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };
  return (
    
    <section className="search-form">
      <SearchBar>
      {/* <p>Search</p> */}
      <form className="search">
  <Label htmlFor="name"> Search: </Label>
        <Input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="Search by Name"
          className="prompt search-name"
        />
       
      </form>
      </SearchBar>
      <h2>
        <SearchPa>
        {data.map(data => {
          return (
            <div>
              <NavPa>
              <h3> {data.name}</h3>
              <h5>Status: {data.status} </h5>
              <h5>Gender: {data.gender} </h5>
              <h5>Species: {data.species} </h5>
              </NavPa>
            </div>
          );
        })}
        </SearchPa>
      </h2>
    </section>
  );
}

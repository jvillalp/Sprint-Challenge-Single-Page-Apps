import React, { useState, useEffect } from "react";
import axios from "axios";
import uuid from "react-uuid";
import styled from 'styled-components';

const SearchPa = styled.div`
background: #FFF0F5;
color: #8FBC8F;
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
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          placeholder="Search by Name"
          className="prompt search-name"
        />
      </form>
      <h2>
        <SearchPa>
        {data.map(data => {
          return (
            <div>
              <h3> {data.name}</h3>
              <h5>Status: {data.status} </h5>
              <h5>Gender: {data.gender} </h5>
              <h5>Species: {data.species} </h5>
            </div>
          );
        })}
        </SearchPa>
      </h2>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import axios from 'axios';
import uuid from "react-uuid";
import styled from 'styled-components';

const CharaList = styled.div`
margin: 0 auto;
display:flex;
justify-content: center;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          console.log('Rick & Morty Characters', response.data.results);
          setData(response.data.results);
        })
  }, []);

  return (
   
    <section className="character-list">
      <h2>{data.map(data => {
        return (
          <CharaList>
          <div key={uuid()}>
          
           <h2> {data.name}</h2>
           
           <h4>Status: {data.status} </h4>
           <h4>Gender: {data.gender} </h4>
           <h4>Species: {data.species} </h4>
           
          </div>
          </CharaList>
        )
      })}</h2>
    </section>
    
  );
}

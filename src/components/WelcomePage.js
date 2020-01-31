import React from "react";
import styled from "styled-components";

const WelcomePa = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #fff0f5;
`;

export default function WelcomePage() {
  return (
    <WelcomePa>
      <section className="welcome-page">
        <header>
          <h1>Welcome to the Ultimate Fan Site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </section>
    </WelcomePa>
  );
}

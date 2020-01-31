import React from "react";
import styled from "styled-components";

const HeaderPa = styled.h1`
color: #8FBC8F;
font-size: 20px;
`;


export default function Header() {
  return (
    <HeaderPa>
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    </HeaderPa>
  );
}

import React from 'react';
import styled from 'styled-components';

const Header = styled.header `
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
 
`;

const H1 = styled.h1 `
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
  color:tomato;
`;

const P = styled.p `
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
  color:white;
`;

export const Headline = () => {
    return ( 
        <Header>
            <H1>Infinite scroll image gallery </H1> 
            <P> Using Unsplash API to present random images. </P>
        </Header>
        )
};








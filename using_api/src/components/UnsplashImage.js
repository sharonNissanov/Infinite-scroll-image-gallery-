import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
  :hover {
    box-shadow: 5px 10px #444 ;
    animation: mymove 5s infinite;
  }

`;

export const UnsplashImage = ({ url, _key }) => {
  return (
    <>
      <Img key={_key} src={url} alt={_key} />
    </>
  );
};

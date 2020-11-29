import React, { useState, useEffect } from "react";
import { Headline } from "./components/Headline";
import { Loader } from "./components/Loader";
import { UnsplashImage } from "./components/UnsplashImage";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
// creating style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 1rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 8) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data]);
      })
  }

  return (
    <div>
      <Headline />
      <GlobalStyle/>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {images.map(image => (
            <UnsplashImage url={image.urls.thumb} key={image.id} />
          ))}
        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default App;

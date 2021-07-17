import React from "react";
import Nav from "./Nav/Nav";
import styled from "styled-components";

const Image = styled.img`
  height: 30rem;
  width: 30rem;
`;

function Home() {
  return (
    <div>
      <Nav />
      <h1> Profiles</h1>
      <Image
        src="https://blog.hubspot.com/hs-fs/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg"
        alt="blogging"
      />
    </div>
  );
}

export default Home;

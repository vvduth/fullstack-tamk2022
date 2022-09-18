import React, { useContext } from "react";
import { APIContext } from "./APIContext";

const ChuckNorrisItem = () => {
  const { joke, setJoke, fetchRandomJoke } = useContext(APIContext) as any;
  return (
    <>
      {joke ? (
        <>
          <div>{joke.value}</div>
          <img src={joke.url} alt="icon" />
        </>
      ) : (
        <p>Nothing to show</p>
      )}
    </>
  );
};

export default ChuckNorrisItem;

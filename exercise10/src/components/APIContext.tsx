import axios from "axios";
import React, { createContext, FC, PropsWithChildren, useState } from "react";

export interface ResponseInterface {
  categories: any[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

const APIContext = createContext(null) as any; 

const APIContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [joke, setJoke] = useState<ResponseInterface | null>(null);

  const fetchRandomJoke = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );

      setJoke(response.data);
      console.log(response.data)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <APIContext.Provider
        value={{
            joke, 
            setJoke,
            fetchRandomJoke
        }}
    >
        {children}
    </APIContext.Provider>
  );
};

export  {APIContext, APIContextProvider};

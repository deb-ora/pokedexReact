import React, { useEffect, useState } from "react";
import axios from "axios";
import Dex from "../components/Dex";

const MainPage = () => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokedex/?limit=2").then((response) => {
      setRegions(response.data.results);
      console.log(response.data.results);
    });
  }, []);

  return (
    <div>
      {regions.map((region) => (
        <Dex region={region} id={region.id} data = {region.url}/>
      ))}
    </div>
  );
};

export default MainPage;

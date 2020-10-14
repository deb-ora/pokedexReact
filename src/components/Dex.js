import React from "react";

const Dex = ({ region }) => (
  <div className="container">
    
      <div className="wrapper">
          {console.log(region.url.pokemon_entries)}
      
       <h1>{region.name}</h1>

       <div>
        {/* region.url retorna link da api com informacoes da region
retorno eh 
{
    "descriptions": [{}],
    "id": 1,
    "is_main_series": true,
    "name": "national",
    "names": [{}]
    "pokemon_entries": [
        {
            "entry_number": 1,
            "pokemon_species": {
                "name": "bulbasaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/1/"
            }
        },
        {
            "entry_number": 2,
            "pokemon_species": {
                "name": "ivysaur",
                "url": "https://pokeapi.co/api/v2/pokemon-species/2/"
            } ....}

COMO FAZER PRA ACESSAR pokemon_entries 
tentei receber data = {region.url} no aqruivo MainPage.js mas veio undefined */}
{/* comof azer quando a api retorna url */}
       </div>
    </div>
  </div>
);



export default Dex;

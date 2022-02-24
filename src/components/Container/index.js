import { useContext } from "react";
import CharacterContext from "../../contexts/CharactersContext";
import Card from "../Card";
import Skeleton from "../Skeleton";
import "./style.css";

const Container = () => {
  // const loading = true;
  const { characters, 
          loading 
  } = useContext(CharacterContext);
  return (
    <div className="container">
      {loading ?
      <Skeleton /> 
      :
      characters &&
        characters.length > 0 &&
        characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            image={character.image}
          />
        ))}
    </div>
  );
};

export default Container;

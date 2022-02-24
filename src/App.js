import { useEffect, useContext } from "react";
import { Container, Searcher } from "./components";
import CharacterContext from "./contexts/CharactersContext";

function App() {
  const { obtainCharacters, mockCharacters } = useContext(
    CharacterContext
  );
  useEffect(() => {
    //obtainCharacters();
    mockCharacters();
  }, []);

  return (
    <>
      <Searcher />
      <Container />
    </>
  );
}

export default App;

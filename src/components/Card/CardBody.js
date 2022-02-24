import { useState, useContext, useEffect } from "react";
import CharacterContext from "../../contexts/CharactersContext";
import avatar from "./style";


const CardBody = (props) => {
    const {id, status, image} = props;
    const [styleAvatar, setStyleAvatar] = useState();
    useEffect(() => {
      setStyleAvatar(avatar(status, image));
    }, []);
  
    const { characters, loadNewCharacterList } = useContext(
      CharacterContext
    );
    const handleClickDeleteCharater = (e) => {
      e.preventDefault();
      loadNewCharacterList(characters.filter((char) => char.id !== id));
    };
    return(
    <main className="card-main">
      <div style={styleAvatar}></div>
      <div className="attributes">
        <div className="item" onClick={handleClickDeleteCharater}>
          Eliminar
        </div>
      </div>
    </main>
    )
}
export default CardBody;
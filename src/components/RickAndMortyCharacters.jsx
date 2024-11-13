import { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";
import Loading from "./Loading";


const RickAndMortyCharacters = () => {
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [numberPage, setNumberPage] = useState(1);
    



    useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character?page=${numberPage}`)
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info)
            setIsLoading(false)

        });
    }, [numberPage]);

    return(
        <div className="container">
        <div className="row row-cols-1  row-cols-md-2 g-4">
        {isLoading ? <Loading/> : ''}
        {!isLoading && characters.map(character => (
                <Character key={character.id}
                 id={character.id}
                 name={character.name}
                 image={character.image}
                 status={character.status}
                 species={character.species}
                 location={character.origin.name}
                 episode={character.episode.length}
                 />      
            ))}
        </div>

            <Pagination info = {info} numberPage={numberPage} setNumberPage={setNumberPage}/>

        </div>
    )
}

export default RickAndMortyCharacters;

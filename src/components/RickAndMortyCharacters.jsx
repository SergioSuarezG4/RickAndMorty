import { useEffect, useState } from "react";
import Character from "./Character";
import Pagination from "./Pagination";

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
        <>
        <div className="row row-cols-1 row-cols-md-2 g-2">
            {isLoading ?  'Cargando...' : ''}
            {!isLoading && characters.map(character => (
                <Character key={character.id} name={character.name}
                 image={character.image}/>      
            ))}
        </div>

            <Pagination info = {info} numberPage={numberPage} setNumberPage={setNumberPage}/>

        </>
    )
}

export default RickAndMortyCharacters;

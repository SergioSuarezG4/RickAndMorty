import { Link } from "react-router-dom";

const  Character = ({id, name,image, status, species, location, episode}) =>{
    return(
    <div className="col">
        <div className="card mb-4 bg-dark">
          <div className="row g-0 card-character rounded">
            <div className="col-md-5 ">
              <img src={image} className="img-fluid rounded-start" alt={name}/>
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h3 className='card-title'><Link className={`title-link ${status}`} to={`characters/${id}`}>{name}</Link></h3>
                <div className="estado">
                  <span className={status}></span>
                </div>
                <span className="species-status">{status} - {species}</span>
                <span className="text-secondary">Ultima Ubicacion Conocida:</span>
                <p className={`card-text ${status}`}>{location}
                </p>
                <span className="text-secondary">Cantidad de Capitulos: </span>
                <p className={`card-text ${status}`}>{episode}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
    );
}

export default Character;


import image from "../assets/img/RickAndMortyPortal.gif"

const Loading = () =>{
    return (
        <div className="d-flex justify-content-center">
            <img id="img-loading" src={image} alt="loading" />
        </div>
    )
}

export default Loading;
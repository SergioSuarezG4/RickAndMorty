const Pagination = ({info, numberPage, setNumberPage  }) => {

    const next = () => {
        if(numberPage < info.pages){
            setNumberPage(numberPage + 1);
        }
    }
    
    const previous = () =>{
        if (numberPage > 1){
            setNumberPage(numberPage - 1)
        }
    }

    return(
        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item" onClick={previous}><a class="page-link text-dark" href="#">Previous</a></li>
                <li className="page-item"><a class="page-link text-dark" href="#">{numberPage}</a></li>
                <li className="page-item" onClick={next}><a class="page-link text-dark" href="#">Next</a></li>
            </ul>
        </nav>
    );
}

export default Pagination;
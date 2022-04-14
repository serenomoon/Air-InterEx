import './Planet.css';

const Planet = ({ cards , link, id, title, paragraph, carousel, citiest, cities })=>{
    if(id !== "/destinations"){


    return (
        <div className="container">
            <h1 className="earth-title"> {title} </h1>
            <p className="earth-p"> {paragraph} </p>
            <div id="carouselExampleIndicators" className="carousel slide z-depth-1-half" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {carousel.map( (carou,i ) => {
                        return(
                            <div className={ i === 0 ? "carousel-item active" : "carousel-item" }>
                                <img src={ carou } className="d-block w-100" alt="planet" />
                            </div>
                            )
                        }
                    )}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>

            <hr></hr>

            <div className="place-cards">
                <div class="row">
                    {cards.map( ( card ) => {
                        return(
                                <div className="col-4">
                                    <div className="card" style={{width: "18rem"}}>
                                        <img className="card-img-top" src={card.img} alt="planet"></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{card.title}</h5>
                                            <p className="card-text">{card.paragraph}</p>
                                            <a href={ link } className="btn btn-primary">{card.button}</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </div>

                <div className="city-list">
                    <h3>{citiest}</h3>
                    <ul>
                        {cities.map( city => {
                            return(
                                <li><a href={ link }>{ city }</a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )}else{
    return(
        <div className="container">
            <h1 className="earth-title"> {title} </h1>
            <p className="earth-p"> {paragraph} </p>
            <div id="carouselExampleIndicators" className="carousel slide z-depth-1-half" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {carousel.map( (carou,i )=> {
                        console.log(carou);
                        return(
                            <div className={ i === 0 ? "carousel-item active" : "carousel-item" }>
                                <img src={ carou } className="d-block w-100" alt="..."></img>
                            </div>
                        )
                    })}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>

            <hr></hr>

            <div className="place-cards">
                <div class="row">
                    {cards.map( ( card ) => {
                            return(
                                    <div className="col-4">
                                        <div className="card" style={{width: "18rem"}}>
                                            <img className="card-img-top" src={card.img} alt="planet"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{card.title}</h5>
                                                <p className="card-text">{card.paragraph}</p>
                                                <a href={ link } className="btn btn-primary">{card.button}</a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                </div>
            </div>
        </div>
        )}
}

export default Planet;
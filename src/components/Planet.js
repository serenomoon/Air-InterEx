import './Planet.css';

const Planet = ({ cards , link, id, title, paragraph, carousel1, carousel2, carousel3, firstb, firstp, firstt, firsti, secondb, secondi, secondp, secondt, thirdb, thirdi, thirdp, thirdt, fourthb, fourthi, fourthp, fourtht, fifthi, fifthb, fifthp, fiftht, sixthb, sixthi, sixthp, sixtht, citiest, cities1, cities2, cities3, cities4, cities5, cities6, cities7, cities8, cities9 })=>{
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
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="..."></img>
                    </div>
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
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={firsti} alt="planet"></img>
                            <div className="card-body">
                                <h5 className="card-title">{firstt}</h5>
                                <p className="card-text">{firstp}</p>
                                <a href={ link } className="btn btn-primary">{firstb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={secondi} alt="planet"></img>
                            <div className="card-body">
                                <h5 className="card-title">{secondt}</h5>
                                <p className="card-text">{secondp}</p>
                                <a href={ link } className="btn btn-primary">{secondb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={thirdi} alt="planet"></img>
                            <div className="card-body">
                                <h5 className="card-title">{thirdt}</h5>
                                <p className="card-text">{thirdp}</p>
                                <a href={ link } className="btn btn-primary">{thirdb}</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={fourthi} alt="planet"></img>
                            <div className="card-body">
                                <h5 className="card-title">{fourtht}</h5>
                                <p className="card-text">{fourthp}</p>
                                <a href={ link } className="btn btn-primary">{fourthb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={fifthi} alt="planet"></img>
                            <div className="card-body">
                                <h5 className="card-title">{fiftht}</h5>
                                <p className="card-text">{fifthp}</p>
                                <a href={ link } className="btn btn-primary">{fifthb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={sixthi} alt="planet"></img>
                            <div className="card-body">
                                <h5 className="card-title">{sixtht}</h5>
                                <p className="card-text">{sixthp}</p>
                                <a href={ link } className="btn btn-primary">{sixthb}</a>
                            </div>
                        </div>
                    </div>
                </div>
{/* 
                {cards.map( card => {
                    return(
                        <div className="col">
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
                })} */}

                <div className="city-list">
                    <h3>{citiest}</h3>
                    <ul>
                        <li><a href={ link }>{cities1}</a></li>
                        <li><a href={ link }>{cities2}</a></li>
                        <li><a href={ link }>{cities3}</a></li>
                        <li><a href={ link }>{cities4}</a></li>
                        <li><a href={ link }>{cities5}</a></li>
                        <li><a href={ link }>{cities6}</a></li>
                        <li><a href={ link }>{cities7}</a></li>
                        <li><a href={ link }>{cities8}</a></li>
                        <li><a href={ link }>{cities9}</a></li>
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
                    <div className="carousel-item active">
                        <img src={carousel1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={carousel3} className="d-block w-100" alt="..."></img>
                    </div>
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
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={firsti} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">{firstt}</h5>
                                <p className="card-text">{firstp}</p>
                                <a href={ link } className="btn btn-primary">{firstb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={secondi} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">{secondt}</h5>
                                <p className="card-text">{secondp}</p>
                                <a href={ link } className="btn btn-primary">{secondb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={thirdi} alt="img"></img>
                            <div className="card-body">
                                <h5 className="card-title">{thirdt}</h5>
                                <p className="card-text">{thirdp}</p>
                                <a href={ link } className="btn btn-primary">{thirdb}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Planet;
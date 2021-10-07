import './Planet.css';

const Planet = (props)=>{
    if(props.id != "/destinations"){
    return (
        <div className="container">
            <h1 className="earth-title"> {props.title} </h1>
            <p className="earth-p"> {props.paragraph} </p>
            <div id="carouselExampleIndicators" className="carousel slide z-depth-1-half" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.carousel1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={props.carousel2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={props.carousel3} className="d-block w-100" alt="..."></img>
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
                            <img className="card-img-top" src={props.firsti} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.firstt}</h5>
                                <p className="card-text">{props.firstp}</p>
                                <a href="#" className="btn btn-primary">{props.firstb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.secondi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.secondt}</h5>
                                <p className="card-text">{props.secondp}</p>
                                <a href="#" className="btn btn-primary">{props.secondb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.thirdi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.thirdt}</h5>
                                <p className="card-text">{props.thirdp}</p>
                                <a href="#" className="btn btn-primary">{props.thirdb}</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.fourthi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.fourtht}</h5>
                                <p className="card-text">{props.fourthp}</p>
                                <a href="#" className="btn btn-primary">{props.fourthb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.fifthi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.fiftht}</h5>
                                <p className="card-text">{props.fifthp}</p>
                                <a href="#" className="btn btn-primary">{props.fifthb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.sixthi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.sixtht}</h5>
                                <p className="card-text">{props.sixthp}</p>
                                <a href="#" className="btn btn-primary">{props.sixthb}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="city-list">
                    <h3>{props.citiest}</h3>
                    <ul>
                        <li><a href="#">{props.cities1}</a></li>
                        <li><a href="#">{props.cities2}</a></li>
                        <li><a href="#">{props.cities3}</a></li>
                        <li><a href="#">{props.cities4}</a></li>
                        <li><a href="#">{props.cities5}</a></li>
                        <li><a href="#">{props.cities6}</a></li>
                        <li><a href="#">{props.cities7}</a></li>
                        <li><a href="#">{props.cities8}</a></li>
                        <li><a href="#">{props.cities9}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )}else{
    return(
        <div className="container">
            <h1 className="earth-title"> {props.title} </h1>
            <p className="earth-p"> {props.paragraph} </p>
            <div id="carouselExampleIndicators" className="carousel slide z-depth-1-half" data-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.carousel1} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={props.carousel2} className="d-block w-100" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={props.carousel3} className="d-block w-100" alt="..."></img>
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
                            <img className="card-img-top" src={props.firsti} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.firstt}</h5>
                                <p className="card-text">{props.firstp}</p>
                                <a href="#" className="btn btn-primary">{props.firstb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.secondi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.secondt}</h5>
                                <p className="card-text">{props.secondp}</p>
                                <a href="#" className="btn btn-primary">{props.secondb}</a>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={props.thirdi} alt="Card image cap"></img>
                            <div className="card-body">
                                <h5 className="card-title">{props.thirdt}</h5>
                                <p className="card-text">{props.thirdp}</p>
                                <a href="#" className="btn btn-primary">{props.thirdb}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
}

export default Planet;
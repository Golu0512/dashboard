import React from "react";
import Carousel from "./Carousel";

function Home(props) {
    return (
        <>
            <div className="my-2">
                <Carousel />
            </div>

            <div className="bg-secondary text-white text-center">
                <h1>Our Products</h1>
            </div>

            {/* products section */}

                <div className="row mt-5 px-0 mx-0">
                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center mb-3">
                        <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <img className="card-img-top cardImage" src="./images/med1.jpg" height={'150'} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center mb-3">
                        <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <img className="card-img-top cardImage" src="./images/med1.jpg" height={'150'} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center mb-3">
                        <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <img className="card-img-top cardImage" src="./images/med1.jpg" height={'150'} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="row px-0 mx-0">
                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center mb-3">
                        <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <img className="card-img-top cardImage" src="./images/med1.jpg" height={'150'} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center mb-3">
                        <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <img className="card-img-top cardImage" src="./images/med1.jpg" height={'150'} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center mb-3">
                        <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                            <img className="card-img-top cardImage" src="./images/med1.jpg" height={'150'} alt="Card image cap" />
                            <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">
                                Some quick example text to build on the card title and make up
                                the bulk of the card's content.
                            </p>
                            <a href="#" className="btn btn-primary">
                                Go somewhere
                            </a>
                            </div>
                        </div>
                    </div>

                </div>

        </>
    );
}

export default Home;

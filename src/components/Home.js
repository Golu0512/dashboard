import React from "react";
import Carousel from "./Carousel";

function Home() {
    return (
        <>
            <div className="my-2">
                <Carousel />
            </div>

            <div className="bg-secondary text-white text-center">
                <h1>Our Products</h1>
            </div>

            {/* products section */}

                <div className="row px-0 mx-0">
                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center">
                        <div className="card cardStyle">
                            <img className="card-img-top cardImage" src="./images/asifimg1.jpg" height={'150'} alt="Card image cap" />
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

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center">
                        <div className="card cardStyle">
                            <img className="card-img-top cardImage" src="./images/asifimg1.jpg" height={'150'} alt="Card image cap" />
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

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center">
                        <div className="card cardStyle">
                            <img className="card-img-top cardImage" src="./images/asifimg1.jpg" height={'150'} alt="Card image cap" />
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

                <div className="row my-3 px-0 mx-0">
                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center">
                        <div className="card cardStyle">
                            <img className="card-img-top cardImage" src="./images/asifimg1.jpg" height={'150'} alt="Card image cap" />
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

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center">
                        <div className="card cardStyle">
                            <img className="card-img-top cardImage" src="./images/asifimg1.jpg" height={'150'} alt="Card image cap" />
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

                    <div className="col-lg-4 col-md-4 col-sm-1 d-flex justify-content-center align-items-center">
                        <div className="card cardStyle">
                            <img className="card-img-top cardImage" src="./images/asifimg1.jpg" height={'150'} alt="Card image cap" />
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

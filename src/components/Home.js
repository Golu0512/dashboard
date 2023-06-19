import React from "react";
import Carousel from "./Carousel";
import Homedata from "../Homedata.json";
import { useNavigate } from "react-router-dom";

function Home(props) {

    const navigate = useNavigate();

    const gotoProductPage = (id) =>{
        navigate('./ProductPage', {state:{id:id}})
    }

    return (
        <> 
            <div className="my-2">
                <Carousel />
            </div>

            <div className="bg-secondary text-white text-center">
                <h1>Our Products</h1>
            </div>

            {/* products section */}

                <div className="row mt-5 px-0 mx-0 d-flex justify-content-center align-items-center">
                    {
                        Homedata.map(value => {
                            return(
                                <div className="col-lg-4 col-md-4 col-10 d-flex justify-content-center align-items-center mb-4" key={value.id}>
                                    <div className={`card cardStyle bg-${props.mode} text-${props.mode === 'light' ? 'black' : 'white'}`}>
                                        <img className="card-img-top cardImage" src={value.pimg} height={'150'} alt={value.name} />
                                        <div className="card-body">
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">
                                            Some quick example text to build on the card title and make up
                                            the bulk of the card's content.
                                        </p>
                                        <button className="btn btn-primary" onClick={() => {gotoProductPage(value.id)}}>
                                            View
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

        </>
    );
}

export default Home;

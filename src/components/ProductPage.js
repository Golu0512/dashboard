import React from "react";
import {useLocation} from 'react-router-dom';
import Homedata from "../Homedata.json";

export default function ProductPage(props) {
    const location = useLocation();
    

    const product = Homedata.filter((key, val)=> {
        return location.state.id === val+1;
    });

    return (
        <>
            <div className="row my-4 mx-0" style={{height: '100vh'}}>
                <div className="col-xl-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center py-3">
                <div className="pImageSection">
                    <img
                    src={product[0].pimg}
                    alt={product[0].name}
                    className="pImage"
                    width={"500"}
                    height={`500`}
                    />
                </div>
                </div>

                <div className="col-xl-6 col-md-6 col-sm-12 position-relative">
                    <div className="">
                        <h1 className={`text-uppercase text-danger`}>{product[0].name}</h1>
                        <h4 className={`text-capitalize`}>combination or base</h4>
                        <p className={`text-capitalize`}>{product[0].combination}</p>
                        <h4 className={`text-capitalize`}>discription:</h4>
                        <p>{product[0].discription}</p>
                        <h3 className={`text-capitalize`}>indication:</h3>
                        <p className={`text-capitalize`}>{product[0].indication}</p>
                    </div>

                    <div className={`priceSection bg-secondary d-flex justify-content-between align-items-center mx-5 w-75 px-5 position-absolute bottom-0`}>
                        <h4 className={`text-uppercase`}>mrp</h4>
                        <h5>₹ {product[0].mrp}</h5>
                    </div>
                </div>
            </div>
        </>
    );
}

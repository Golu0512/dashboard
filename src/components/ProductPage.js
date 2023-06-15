import React from "react";

export default function ProductPage(props) {
    return (
        <>
        <div className="row my-4 mx-0">
            <div className="col-xl-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center py-3">
            <div className="pImageSection">
                <img
                src={`./images/med1.jpg`}
                className="pImage"
                width={"500"}
                height={`500`}
                />
            </div>
            </div>

            <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="">
                    <h1>{props.title}</h1>
                    <h4>combination or base</h4>
                    <p>{props.combination}</p>
                    <h4>discription:</h4>
                    <p>{props.discription}</p>
                    <h3>indication:</h3>
                    <p>{props.indication}</p>
                </div>

                <div className={`priceSection bg-secondary d-flex justify-content-between align-items-center mx-5 px-5 `}>
                    <h4>mrp</h4>
                    <h5>₹ {props.mrp}</h5>
                </div>
            </div>
        </div>
        </>
    );
}

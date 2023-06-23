import React from "react";
import { BiShoppingBag } from "react-icons/bi";

export default function Badge(props) {

    return (
        <>
            <div className="fs-4 me-5 d-flex float">
                <span>
                    <BiShoppingBag />
                </span>
                <div className="badgecounter rounded-circle d-flex justify-content-center align-items-center text-white fw-bold">
                    {props.itemCount}
                </div>
            </div>
        </>
    );
}

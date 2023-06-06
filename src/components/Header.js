import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";

function Header(props) {
    return (
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Medicine
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">
                    Home
                </a>
                {props.mode === 'light' ? <a className="nav-link" onClick={props.toggleMode} href="#">
                        <BsMoonStarsFill />
                    </a> : <a className="nav-link" onClick={props.toggleMode} href="#">
                        <span data-bs-toggle="tooltip" data-bs-placement="right" title="Dark Mode"><BsSun /></span>
                    </a>
                }
                </div>
            </div>
            </div>
        </nav>
        </>
    );
}

export default Header;

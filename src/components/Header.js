import React from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import Badge from "./Badge";

function Header(props) {
    return (
        <>
        <nav
            className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} position-sticky top-0 index1`}
        >
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
                        <a className="nav-link active" aria-current="page" href="/">
                            Home
                        </a>
                        {props.mode === "light" ? (
                            <span className="nav-link pointer" onClick={props.toggleMode}>
                                <BsMoonStarsFill />
                            </span>
                        ) : (
                            <span className="nav-link pointer" onClick={props.toggleMode}>
                                <BsSun />
                            </span>
                        )}

                        <input
                            className={`form-control bg-${props.mode}`}
                            style={{
                            color: `${props.mode === "light" ? "black" : "white"}`,
                            }}
                            type="search"
                            placeholder="Search by name or salt"
                            aria-label="Search"
                        />
                    </div>
                </div>
            </div>

            <Badge itemCount={props.itemCount} />

            {/* <form class="d-flex bg-info w-50 me-5">
                    <input className="form-control" type="search" placeholder="Search by name or salt" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
        </nav>
        </>
    );
}

export default Header;

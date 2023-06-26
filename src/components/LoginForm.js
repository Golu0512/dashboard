import React, { useState } from 'react'

function LoginForm() {

    const [userLogin, setuserLogin] = useState({
        email: '',
        password: ''
    });

    const [records, setRecords] = useState([]);

    const getLogin = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setuserLogin({...userLogin, [name] : value})
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newRecord = {...userLogin};
        setRecords([...records, newRecord]);
        console.log(records);
        setuserLogin({email: '', password: ''});
    };


    return (
        <>
            <pre>{JSON.stringify(userLogin)}</pre>
            <div className="bg-info d-flex justify-content-center align-items-center py-3">
                <form onSubmit={handleSubmit} className="w-25">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                    </label>
                    <input
                    type="email"
                    value={userLogin.email}
                    onChange={getLogin}
                    name="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                    </label>
                    <input
                    type="password"
                    value={userLogin.password}
                    onChange={getLogin}
                    name="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
                </form>
            </div>
        </>
    )
}

export default LoginForm

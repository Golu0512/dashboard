import React, { useState, useEffect } from 'react'


function LoginForm() {

    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const checkLogin = () =>{
        return records.map((v)=>{
            return v.email === userLogin.email;
        })
    };
    
    const getLocalStorageData = () => {
        const localStorageData = localStorage.getItem('userLogin');
        return localStorageData ? JSON.parse(localStorageData) : [];
    };
    
    const [records, setRecords] = useState(getLocalStorageData());
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserLogin((prevUserLogin) => ({ ...prevUserLogin, [name]: value }));
    };
    
    const handleSubmit = (e) => {
        const { email, password } = userLogin;
        const emailRegex = /^\S+@\S+\.\S+$/
        const existUser = checkLogin();

        if (email.trim() === '' || password.trim() === '') {
            console.log('Please enter a valid email and password.');
        } else if (!emailRegex.test(email.trim())) {
            console.log('Please enter a valid email address.');
        } else {
            const newRecord = { ...userLogin };
            setRecords((prevRecords) => [...prevRecords, newRecord]);
            setUserLogin({ email: '', password: '' });
        }
    };
    
    useEffect(() => {
        localStorage.setItem('userLogin', JSON.stringify(records));
    }, [records]);

    return (
        <>
            <pre>{JSON.stringify(userLogin)}</pre>
            <div className="bg-info d-flex justify-content-center align-items-center py-3">
                <form className="w-25">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            value={userLogin.email}
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            name="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default LoginForm

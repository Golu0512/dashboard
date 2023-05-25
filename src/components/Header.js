import React from 'react'
import { FaMoon, FaBell, FaUser } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className='headerBar border d-flex justify-content-between align-items-center px-5'>

                <p className='leftTitle my-0'>advance dashboard</p>

                <div className='rightSide'>
                    <ul className='headerList my-auto'>
                        <li className='neonText'><FaMoon /></li>
                        <li className='neonText'><FaBell /></li>
                        <li className='neonText'><FaUser /></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header

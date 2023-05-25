import React from 'react'
import { FaHamburger, FaHome, FaUserFriends, FaChartLine, FaChartBar  } from "react-icons/fa";
import { MdContacts, MdBarChart, MdPieChart } from "react-icons/md";
import { BsFileTextFill } from "react-icons/bs";

function SideBar() {
    return (
        <div>
            <div className='mainDive'>
                <div className='leftsideBar'>

                    <div className='topTitleButton px-4 py-2 d-flex justify-content-between align-items-center'>
                        <span className='mt-lg-4 mt-md-4'>DashBoard</span>
                        <span className='mt-lg-3 mt-md-3'><FaHamburger /></span>
                    </div>

                    <div className='userSection mt-4 d-flex justify-content-center align-items-center'>
                        <div className='text-center'>
                            <img src='./images/asifimg1.jpg' alt='userImage' width={'150'} height={'150'}></img>
                            <p className='userName mb-0'>Asif Ansari</p>
                        </div>
                    </div>

                    <div className='userSection mt-4 d-flex justify-content-center align-items-center'>
                        <div className='text-center w-100 d-flex justify-content-center align-items-center'>
                            <ul className='w-100'>
                                <li><FaHome />home</li>
                                <li><FaUserFriends />team portfolio</li>
                                <li><MdContacts />contacts info</li>
                                <li><BsFileTextFill />finances</li>
                                <li><MdBarChart />bar chart</li>
                                <li><MdPieChart />pie chart</li>
                                <li><FaChartLine />line chart</li>
                                <li><FaChartBar />geography chart</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SideBar

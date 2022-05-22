import Logo from '../image/logo.png';
import GraphImage from '../image/graph.png';
import Ricky from '../image/ricky.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FaBeer } from 'react-icons/fa';
import React, { useState } from "react";
import Graph from './Graph/graph';
import Stats from './Stats/stats';
import Card from '../component/Card/card';
import "@fontsource/mulish";
import TicketsTable from './TicketsTable/ticketsTable';
import DataTable from './DataTable/dataTable';
import SideBar from './SideBar/sideBar';
import Header from './Header/header';
import SearchInput from './SearchInput/searchInput';
import SectionContent from './SectionContent/sectionContent';

const Main = () => {
    const [isActive, setActive] = useState(false);
    const [isCLicked, setClick] = useState(false);

    return (

        <div className="wrapper">
            <SideBar />
            {/* <div className="sidebar section-content-control">
                <div className="dashboard flex">
                    <img src={Logo} style={{ height: "32px", width: "32px", marginTop: "20px" }} />
                    <div style={{ paddingTop: "19px" }}>Dashboards Kit</div>
                </div>
                <ul style={{ marginTop: '7%' }}>
                    <li><a href="#"> <i className=" fas "><FaBeer className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                    <li><a href="#"><i className="fa fas fa-user "> </i><span className="sidemenu_name">Profile</span></a></li>
                    <li><a href="#"><i className="fas fa  fa-bell"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fas fa fa-bell"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fas fa fa-search"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fa fas fa-user "></i><span className="sidemenu_name">Profile</span></a></li>
                    <li style="padding-bottom: 40px;"><a href="#"><i className="fas fa  fa-address-card"></i><span
                        className="sidemenu_name">Articles</span></a></li>
                    <li style={{ borderTop: "2px solid #40414A", paddingTop: "40px" }}><a href="#"><i
                        className="fas fa fa-bell"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fas fa fa-search"></i><span className="sidemenu_name">Home</span></a></li>
                </ul>
            </div> */}
            <div className="main_content   screen-test" id="controllscreen">
                <Header setClick={setClick} isCLicked={isCLicked} isActive={isActive} setActive={setActive} />
                <SearchInput />
                <SectionContent isActive={isActive} />

            </div>


            {/* <div className="main_content   screen-test" id="controllscreen">
                <div className="header" id="header-scetion">
                    <div className="overflow" id="overflow-id" style="color: black;">
                        Overview
                    </div>
                    <div className="search">

                        <div className="nav_icon" style="padding-left: 10px;padding-right: 10px;">
                            <i className="fa fas src fa-search"></i>
                            <i className="fa fas fa-bell"></i>


                        </div>
                        <div className="nav_profile">
                            <div className="jones">Jones Ferdiand</div>
                            <div className="profile-icon">
                                <button onclick="show_hide()"><img style="height: 40px; width: 40px;  border-radius: 100%;
														box-shadow: inset 0px 0px 0px 3px white;
														border: 4px solid #DFE0EB;" src="./ricky.jpg" /></button>
                                <div id="list-items" className="listnoblock">
                                    <ul>
                                        <li>
                                            <a href="#"> Proflie </a>
                                        </li>
                                        <li>
                                            <a href="./signup.html"> Sign Up </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <nav id="nav">
                            <button aria-label="Abrir Menu  btn-mobile-position" id="btn-mobile" aria-haspopup="true"
                                aria-controls="menu" aria-expanded="false">
                                <span id="hamburger"></span>
                            </button>
                            <ul id="menu" role="menu">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Portfolio</a></li>
                                <li><a href="/">Conatct</a></li>
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Gallary</a></li>
                                <li><a href="/">FaQ</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>

                <div className="topnav" id="search-id">
                    <input type="text" placeholder="Search.." />
                </div>

                <div className="section-content" id="section-control">
                    <div className="card">

                        <div className="test">
                            <div className="card_title">Unresolved</div>
                            <div className="card_value">60</div>
                        </div>
                        <div className="test" style="border: 2px solid blue;   border-radius: 10px;">
                            <div className="card_title" style="color: blue;">Unresolved</div>
                            <div className="card_value" style="color: blue;">60</div>
                        </div>
                        <div className="test">
                            <div className="card_title">Unresolved</div>
                            <div className="card_value">60</div>
                        </div>
                        <div className="test">
                            <div className="card_title">Unresolved</div>
                            <div className="card_value">60</div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="graph">
                            <div className="todays">
                                <h4 className="theader">Today's trend</h4>
                                <div className="tod  align">
                                    <p className="theader ash  tdsec">as of 25 May 2019, 09:41 PM</p>
                                    <hr />
                                    <div className="flex space-between  bef_today bef_yesterday">
                                        <hr />
                                        <p className=" today">
                                            Today</p>
                                        <p className=" yesterday">
                                            yesterday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="image">
                                <img style="width: 100%; padding-top: 10px;" src="./graph.png" alt="" />
                            </div>

                        </div>
                        <div className="stats">
                            <div className="stats-width">
                                <div>
                                    <p className="ash-color  ginfo">Resolved</p>
                                    <h3 className="margin   ginfo_value">449</h3>
                                </div>
                            </div>
                            <div className="stats-width">
                                <div>
                                    <p className="ash-color ginfo">Received</p>
                                    <h3 className="margin  ginfo_value">426</h3>
                                </div>
                            </div>
                            <div className="stats-width">
                                <div>
                                    <p className="ash-color ginfo">Average first response time</p>
                                    <h3 className="margin ginfo_value">33m</h3>
                                </div>
                            </div>
                            <div className="stats-width">
                                <div>
                                    <p className="ash-color ginfo">Average response time</p>
                                    <h3 className="margin  ginfo_value">3h 8m</h3>
                                </div>
                            </div>
                            <div className="stats-width">
                                <div>
                                    <p className="ash-color  ginfo">Resolution within SLA</p>
                                    <h3 className="margin ginfo_value">94%</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>
                    <div className='flex main' style="gap: 4%;">
                        <div className='right' style="background-color: white; padding-top: 30px; border-radius: 10px;">
                            <div className='flex center space-between  tickethead'>
                                <div className="">
                                    <div className="ticket_title ">Unresolved Tickets</div>
                                    <p className='para'><span className='ash'
                                        style="font-family: 'Mulish', sans-serif;   font-size: 12px;">Today</span> <span
                                            style="font-family: 'Mulish', sans-serif;  font-size: 12px;"
                                            className="">Support</span>
                                    </p>
                                </div>
                                <p className='blue details margin-handle'>View details</p>
                            </div>
                            <div className="ticket_options">
                                <div className=''>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <label for="html" className="ticket_l_title">Waiting on Feature request</label>
                                        </div>
                                        <p className='padding-right  ticket_l_value'><small className='ash'>1005</small></p>
                                    </div>
                                    <hr className='blue'>
                                    </hr>
                                </div>
                                <div className='ticket_box'>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <label for="html" className="ticket_l_title">Waiting on Feature request</label>
                                        </div>
                                        <p className='padding-right  ticket_l_value'><small className='ash'>1005</small></p>
                                    </div>
                                    <hr className='blue'>
                                    </hr>
                                </div>
                                <div>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <label for="html" className="ticket_l_title">Waiting on Feature request</label>
                                        </div>
                                        <p className='padding-right  ticket_l_value'><small className='ash'>1005</small></p>
                                    </div>
                                    <hr className='blue'>
                                    </hr>
                                </div>
                                <div className=''>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <label for="html" className="ticket_l_title">Waiting on Feature request</label>
                                        </div>
                                        <p className='padding-right  ticket_l_value'><small className='ash'>1005</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>







                        <div className='right' style="background-color: white; padding-top: 30px; border-radius: 10px;">
                            <div className='flex center space-between tickethead'>
                                <div>
                                    <div className="ticket_title">Tasks</div>
                                    <p className='para'><span className='ash' style="font-family: 'Mulish', sans-serif; 
									    font-size: 12px;">Today</span>
                                    </p>
                                </div>
                                <p className='blue details margin-handle'>View details</p>
                            </div>
                            <div className="ticket_options">
                                <div className='ticket_box'>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left minleft dots'>
                                            <label for="html" style=" font-family: 'Mulish', sans-serif; font-size:14px;"
                                                className=" ash ticket_l_titleplus ticket_l_title">Create new
                                                ticket example</label>
                                        </div>
                                        <button className='plus-button'>
                                            +
                                        </button>
                                    </div>
                                    <hr className='blue'>
                                    </hr>
                                </div>
                                <div className='ticket_box'>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <input type="radio" id="html" style="height:20px; width:20px;"
                                                name="fav_language" value="HTML" />
                                            <label for="html" style="padding-left: 20px;" className="ticket_l_title">Create new
                                                ticket example</label>
                                        </div>
                                        <button className='urgent-button tbutton'>
                                            URGENT
                                        </button>
                                    </div>
                                    <hr className='blue'>
                                    </hr>
                                </div>
                                <div>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <input type="radio" id="html" style="height:20px; width:20px;"
                                                name="fav_language" value="HTML" />
                                            <label for="html" style="padding-left: 20px;" className="ticket_l_title">Create new
                                                ticket example</label>
                                        </div>
                                        <button className='new-button tbutton'>
                                            NEW
                                        </button>
                                    </div>
                                    <hr className='blue'>
                                    </hr>
                                </div>
                                <div className='ticket_box'>
                                    <div className='flex center space-between tickets'>
                                        <div className='padding-left  dots'>
                                            <input type="radio" id="html" style="height:20px; width:20px;"
                                                name="fav_language" value="HTML" />
                                            <label for="html" style="padding-left: 20px;" className="ticket_l_title">Create new
                                                ticket example</label>
                                        </div>
                                        <button className='default-button tbutton'>
                                            DEFAULT
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="table-wrapper" style="background-color: white;width: 100%;">
                        <div style="display: flex; width: 100%; justify-content: space-between;padding-top: 15px; padding-bottom: 15px;">

                            <div className="alltickets">
                                Tickets
                            </div>

                            <div style="display: flex; flex-direction: row; padding-right: 12%;">
                                <div style="display: flex; justify-content: space-between;">
                                    <i className="fa-solid fa-arrow-up-short-wide" style="color: #C5C7CD; padding-right: 20%;"></i>
                                    <div className="tableticket_title" style="color: #4B506D;">Sort</div>

                                </div>

                                <div style="display: flex; justify-content: space-between; padding-left: 40%;">
                                    <i className="fa-solid fa-filter" style="padding-right: 20%; color: #C5C7CD;"></i>
                                    <div className="tableticket_title" style="color: #4B506D;">
                                        Filter
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="datatable" style="overflow-x:auto; border-radius: 10px;">

                            <table style="width: 100%; min-width: 700px;">
                                <thead className="head" style="width: 100%;">
                                    <tr style="width: 100%;">
                                        <th style="width: 40%; text-align: start;">

                                            Ticket Details

                                        </th>
                                        <th style="width: 20%;text-align: start">Customer Name</th>
                                        <th style="width:20%;text-align: start">Date</th>
                                        <th style="width:10%;text-align: start">Priority</th>
                                        <th style="width: 10%;text-align: start"></th>
                                    </tr>
                                </thead>
                                <tbody style="width: 100%;">
                                    <tr style="width: 100%;">
                                        <td style="width: 40%;">
                                            <div className="tdetails"
                                                style="display: flex;flex-direction: row;  align-items: center; ">

                                                <img style="height: 40px; width: 40px;  border-radius: 100%;
																					box-shadow: inset 0px 0px 0px 3px white;
																					border: 4px solid #DFE0EB;" src="./ricky.jpg" />

                                                <div className="tableticket_info">
                                                    <div className="tableticket_title">
                                                        Contact Mail Not Linked

                                                    </div>
                                                    <div className="tableticket_update">
                                                        Update 1 day Ago

                                                    </div>
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    Tom Cruse
                                                </div>
                                                <div className="tableticket_update">
                                                    On 24.05.2019
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    May 26, 2019
                                                </div>
                                                <div className="tableticket_update">
                                                    8.00 Am
                                                </div>
                                            </div>
                                        </td>
                                        <td style="width: 10%;">
                                            <button className="priority_button">
                                                HIGH
                                            </button>

                                        </td>
                                        <td style="width: 30%;">
                                            <i className="fas fa-ellipsis-v"></i>
                                        </td>

                                    </tr>


                                    <tr style="width: 100%;">
                                        <td style="width: 40%;">
                                            <div className="tdetails"
                                                style="display: flex;flex-direction: row;  align-items: center; ">

                                                <img style="height: 40px; width: 40px;  border-radius: 100%;
																											box-shadow: inset 0px 0px 0px 3px white;
																											border: 4px solid #DFE0EB;" src="./ricky.jpg" />

                                                <div className="tableticket_info">
                                                    <div className="tableticket_title">
                                                        Contact Mail Not Linked

                                                    </div>
                                                    <div className="tableticket_update">
                                                        Update 1 day Ago

                                                    </div>
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    Tom Cruse
                                                </div>
                                                <div className="tableticket_update">
                                                    On 24.05.2019
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    May 26, 2019
                                                </div>
                                                <div className="tableticket_update">
                                                    8.00 Am
                                                </div>
                                            </div>
                                        </td>
                                        <td style="width: 10%;">
                                            <button className="priority_button">
                                                HIGH
                                            </button>

                                        </td>
                                        <td style="width: 30%;">
                                            <i className="fas fa-ellipsis-v"></i>
                                            <i className="fa-solid fa-ellipsis-vertical"></i>
                                        </td>

                                    </tr>
                                    <tr style="width: 100%;">
                                        <td style="width: 40%;">
                                            <div className="tdetails"
                                                style="display: flex;flex-direction: row;  align-items: center; ">

                                                <img style="height: 40px; width: 40px;  border-radius: 100%;	box-shadow: inset 0px 0px 0px 3px white; border: 4px solid #DFE0EB;" src="./ricky.jpg" />

                                                <div className="tableticket_info">
                                                    <div className="tableticket_title">
                                                        Contact Mail Not Linked

                                                    </div>
                                                    <div className="tableticket_update">
                                                        Update 1 day Ago

                                                    </div>
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    Tom Cruse
                                                </div>
                                                <div className="tableticket_update">
                                                    On 24.05.2019
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    May 26, 2019
                                                </div>
                                                <div className="tableticket_update">
                                                    8.00 Am
                                                </div>
                                            </div>
                                        </td>
                                        <td style="width: 10%;">
                                            <button className="priority_button">
                                                HIGH
                                            </button>

                                        </td>
                                        <td style="width: 30%;">
                                            <i className="fas fa-ellipsis-v"></i>

                                        </td>

                                    </tr>
                                    <tr style="width: 100%;">
                                        <td style="width: 40%;">
                                            <div className="tdetails"
                                                style="display: flex;flex-direction: row;  align-items: center; ">

                                                <img style="height: 40px; width: 40px;  border-radius: 100%;
																											box-shadow: inset 0px 0px 0px 3px white;
																											border: 4px solid #DFE0EB;" src="./ricky.jpg" />

                                                <div className="tableticket_info">
                                                    <div className="tableticket_title">
                                                        Contact Mail Not Linked

                                                    </div>
                                                    <div className="tableticket_update">
                                                        Update 1 day Ago

                                                    </div>
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    Tom Cruse
                                                </div>
                                                <div className="tableticket_update">
                                                    On 24.05.2019
                                                </div>
                                            </div>

                                        </td>
                                        <td style="width: 10%;">
                                            <div style="display: flex; flex-direction: column;">
                                                <div className="tableticket_title">
                                                    May 26, 2019
                                                </div>
                                                <div className="tableticket_update">
                                                    8.00 Am
                                                </div>
                                            </div>
                                        </td>
                                        <td style="width: 10%;">
                                            <button className="priority_button">
                                                HIGH
                                            </button>

                                        </td>
                                        <td style="width: 30%;">
                                            <i className="fas fa-ellipsis-v"></i>

                                        </td>

                                    </tr>

                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>




            </div> */}


        </div>
    )
}

export default Main;
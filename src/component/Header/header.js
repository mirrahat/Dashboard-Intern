import React, { useState } from "react";
import Ricky from '../../image/ricky.jpg';
import { BsBell } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
const Header = (props) => {

    const toggleClass = () => {

        props.setActive(!props.isActive);
        console.log("----------", props.isActive);
    };

    const profileToggle = () => {

        console.log("---ppp---", props.isCLicked);
        props.setClick(!props.isCLicked);
    }
    return (
        <div className="header" id="header-scetion">
            <div className="overflow" id="overflow-id" style={{ color: "black" }}>
                Overview
            </div>

            <div className="search">
                <div className="nav_icon" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                    <BsBell className="bell" size={20} />
                    <AiOutlineSearch className="aisearch" size={24} />
                </div>
                <div className="nav_profile">
                    <div className="jones">Jones Ferdiand</div>
                    <div className="profile-icon">
                        <button onClick={profileToggle}><img style={{
                            height: "40px", width: "40px", borderRadius: "100%",
                            boxShadow: "inset 0px 0px 0px 3px white", border: "4px solid #DFE0EB"
                        }} src={Ricky} /> </button>
                        <div id="list-items" className={props.isCLicked ? "listblock" : "listnoblock"}>
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


                <nav id="nav" className={props.isActive ? "active" : null} >
                    <button aria-label=" " className={props.isActive ? "btn-mobile-position" : null} onClick={toggleClass} id="btn-mobile" aria-haspopup="true"
                        aria-controls="menu" aria-expanded="false">
                        <span id="hamburger" className={props.isActive ? "active" : null}></span>
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

        </div >
    );
}

export default Header;
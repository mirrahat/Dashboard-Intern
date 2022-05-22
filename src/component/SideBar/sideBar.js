import React from "react";
import Logo from "../../image/logo.png";
import { FaBeer } from 'react-icons/fa';
import { IoMdContacts } from "react-icons/io";
import { RiArticleLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { GrTicket } from "react-icons/gr";
const SideBar = () => {
    return (
        <div className="sidebar section-content-control">


            <div className="dashboard flex">
                <img src={Logo} style={{ height: "32px", width: "32px", marginTop: "20px" }} />
                <div style={{ paddingTop: "19px" }}>Dashboards Kit</div>
            </div>
            <ul style={{ marginTop: '0px' }}>
                <li><a href="#"> <i className=" fas "><FaBeer className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><IoMdContacts className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><RiArticleLine className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>

                <li><a href="#"> <i className=" fas "><FiSettings className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><RiArticleLine className='fas' color="white" size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><FaBeer className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><IoMdContacts className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><RiArticleLine className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>

                <li><a href="#"> <i className=" fas "><FiSettings className='fas' size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>
                <li><a href="#"> <i className=" fas "><RiArticleLine className='fas' color="white" size={24} /> </i>  <span className="sidemenu_name">Profile</span></a></li>

                {/* <li><a href="#"><i className="fa fas fa-user "> </i><span className="sidemenu_name">Profile</span></a></li>
                    <li><a href="#"><i className="fas fa  fa-bell"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fas fa fa-bell"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fas fa fa-search"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fa fas fa-user "></i><span className="sidemenu_name">Profile</span></a></li>
                    <li style="padding-bottom: 40px;"><a href="#"><i className="fas fa  fa-address-card"></i><span
                        className="sidemenu_name">Articles</span></a></li>
                    <li style={{ borderTop: "2px solid #40414A", paddingTop: "40px" }}><a href="#"><i
                        className="fas fa fa-bell"></i><span className="sidemenu_name">Home</span></a></li>
                    <li><a href="#"><i className="fas fa fa-search"></i><span className="sidemenu_name">Home</span></a></li> */}
            </ul>
        </div>
    );
}
export default SideBar;
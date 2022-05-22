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
            <div className="main_content   screen-test" id="controllscreen">
                <Header setClick={setClick} isCLicked={isCLicked} isActive={isActive} setActive={setActive} />
                <SearchInput />
                <SectionContent isActive={isActive} />
            </div>
        </div>
    )
}

export default Main;
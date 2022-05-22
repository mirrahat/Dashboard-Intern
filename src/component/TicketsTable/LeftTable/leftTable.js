import React from "react";
import LeftTableCard from "./LeftTableCard/leftTableCard";
import "@fontsource/mulish";
import LeftTableHeader from "./LeftTableCard/leftTableHeader";
import LeftTableBody from "./LeftTableBody/leftTableBody";

const LeftTable = () => {
    return (
        <div className='right' style={{ backgroundColor: "white", paddingTop: "30px", borderRadius: "10px" }}>
            <LeftTableHeader />
            <LeftTableBody />
        </div>
    );
}
export default LeftTable;
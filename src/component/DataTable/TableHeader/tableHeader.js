import React from "react";
import { BsSortUpAlt } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
const TableHeader = () => {
    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", paddingTop: "15px", paddingBottom: "15px" }}>

            <div className="alltickets">
                Tickets
            </div>

            <div style={{ display: "flex", flexDirection: "row", paddingRight: "12%" }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <i className="fa-solid fa-arrow-up-short-wide" style={{ color: "#C5C7CD", paddingRight: "20%" }}><BsSortUpAlt size={24} />   </i>
                    <div className="tableticket_title" style={{ color: "#4B506D" }}>Sort</div>

                </div>

                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "40%" }}>
                    <i className="fa-solid fa-filter" style={{ paddingRight: "20%", color: "#C5C7CD" }}> <FaFilter size={24} />   </i>
                    <div className="tableticket_title" style={{ color: "#4B506D" }}>
                        Filter
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TableHeader;
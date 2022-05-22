import React from "react";
import Ricky from "../../../../../image/ricky.jpg";
import { IoEllipsisVerticalOutline } from "react-icons/io5";
const TableRow = () => {
    return (
        <tr style={{ width: "100%" }}>
            <td style={{ width: "40%" }}>
                <div className="tdetails" style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>

                    <img style={{ height: "40px", width: "40px", borderRadius: "100%", boxShadow: "inset 0px 0px 0px 3px white", border: "4px solid #DFE0EB" }} src={Ricky} />

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
            <td style={{ width: "10%" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="tableticket_title">
                        Tom Cruse
                    </div>
                    <div className="tableticket_update">
                        On 24.05.2019
                    </div>
                </div>

            </td>
            <td style={{ width: "10%" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className="tableticket_title">
                        May 26, 2019
                    </div>
                    <div className="tableticket_update">
                        8.00 Am
                    </div>
                </div>
            </td>
            <td style={{ width: "10%" }}>
                <button className="priority_button">
                    HIGH
                </button>

            </td>
            <td style={{ width: "30%" }}>
                <i className="fas fa-ellipsis-v"><IoEllipsisVerticalOutline />   </i>
            </td>

        </tr>

    );
}
export default TableRow;

import React from "react";

const Thead = () => {
    return (
        <thead className="head" style={{ width: "100%" }}>
            <tr style={{ width: "100%" }}>
                <th style={{ width: "40%", textAlign: "start" }}>

                    Ticket Details

                </th>
                <th style={{ width: " 20%", textAlign: "start" }}>Customer Name</th>
                <th style={{ width: " 20%", textAlign: "start" }}>Date</th>
                <th style={{ width: " 10%", textAlign: "start" }}>Priority</th>
                <th style={{ width: " 10%", textAlign: "start" }}></th>
            </tr>
        </thead>

    );
}
export default Thead;
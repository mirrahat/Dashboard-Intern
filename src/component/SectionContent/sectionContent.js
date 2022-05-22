import React from "react";
import Card from "../Card/card";
import Graph from "../Graph/graph";
import DataTable from "../DataTable/dataTable";
import TicketsTable from "../TicketsTable/ticketsTable";
const SectionContent = (props) => {
    console.log("section--------------", props.isActive);
    return (
        <div className={props.isActive ? "section-content-control" : "section-content"} id="section-control">
            <Card />

            <div style={{ marginTop: "40px" }}>
                <Graph />
            </div>
            <div style={{ marginTop: "40px" }}>
                <DataTable />
            </div>
            <div style={{ marginTop: "40px" }}>
                <TicketsTable />
            </div>

        </div>
    );
}
export default SectionContent;
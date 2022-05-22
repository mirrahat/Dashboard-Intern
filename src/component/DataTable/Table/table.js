import React from "react";
import Tbody from "./Tbody/tbody";
import Thead from "./Thead/thead";

const Table = () => {
    return (
        <div className="datatable" style={{ overflowX: "auto", borderRadius: "10px" }}>

            <table style={{ width: "100%", minWidth: "700px" }}>
                <Thead />
                <Tbody />
            </table>
        </div>

    );
}
export default Table;
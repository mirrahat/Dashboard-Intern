import React from "react";
import TableHeader from "./TableHeader/tableHeader";
import Table from "./Table/table";

const DataTable = () => {
    return (
        <div className="table-wrapper" style={{ backgroundColor: "white", width: "100%" }}>
            <TableHeader />
            <Table />
        </div>

    );
}
export default DataTable;
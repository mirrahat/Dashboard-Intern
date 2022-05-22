import React from "react";
import RightTable from "./RightTable/rightTable";
import LeftTable from "./LeftTable/leftTable";


const TicketsTable = () => {
    return (
        <div className='flex main' style={{ gap: " 40px" }}>

            <LeftTable />
            <RightTable />

        </div>
    );
}
export default TicketsTable;
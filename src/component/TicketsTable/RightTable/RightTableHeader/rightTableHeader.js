

import React from "react";


const RightTableHeader = () => {
    return (

        <div className='flex center space-between tickethead'>
            <div>
                <div className="ticket_title">Tasks</div>
                <p className='para'><span className='ash' style={{ fontFamily: "sans-serif", fontSize: "12px" }}>Today</span>
                </p>
            </div>
            <p className='blue details margin-handle'>View details</p>
        </div>


    );
}

export default RightTableHeader;
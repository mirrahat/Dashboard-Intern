import React from "react";

const LeftTableHeader = () => {
    return (
        <div className='flex center space-between  tickethead'>
            <div className="">
                <div className="ticket_title "> Tickets</div>
                <p className='para'><span className='ash'
                    style={{ fontFamily: "sans-serif", fontSize: "12px" }}>Today</span> <span
                        style={{ fontFamily: "sans-serif", fontSize: "12px", fontFamily: "sans-serif" }}
                        className="">Support</span>
                </p>
            </div>
            <p className='blue details margin-handle'>View details</p>
        </div>
    );
}

export default LeftTableHeader;
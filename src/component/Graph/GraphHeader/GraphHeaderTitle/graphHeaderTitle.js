import React from "react"

const GraphHeaderTitle = () => {
    return (
        <div className="todays">
            <h4 className="theader">Today's trend</h4>
            <div className="tod  align">
                <p className="theader ash  tdsec">as of 25 May 2019, 09:41 PM</p>
                <hr />
                <div className="flex space-between  bef_today bef_yesterday">
                    <hr />
                    <p className=" today">
                        Today</p>
                    <p className=" yesterday">
                        yesterday</p>
                </div>
            </div>
        </div>
    );

}
export default GraphHeaderTitle;

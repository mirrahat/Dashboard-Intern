import React from "react";

const LeftTableCard = () => {
    return (
        <div className=''>
            <div className='flex center space-between tickets'>
                <div className='padding-left  dots'>
                    <label for="html" className="ticket_l_title">Waiting on Feature request</label>
                </div>
                <p className='padding-right  ticket_l_value'><small className='ash'>1005</small></p>
            </div>
            <hr>
            </hr>
        </div>
    );
}

export default LeftTableCard;
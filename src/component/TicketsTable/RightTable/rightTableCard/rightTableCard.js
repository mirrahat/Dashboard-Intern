import React from "react";

import NewButton from './Button/newButton';
import UrgentButton from "./Button/urgentButton";
import DefaultButton from "./Button/defaultButton";

const RightTableCard = () => {
    return (

        <div className='padding-left  dots'>
            <input type="radio" id="html" style={{ height: "20px", width: "20px" }}
                name="fav_language" value="HTML" />
            <label for="html" style={{ paddingLeft: "20px" }} className="ticket_l_title">Create new
                ticket example</label>
        </div>


    );
}

export default RightTableCard;
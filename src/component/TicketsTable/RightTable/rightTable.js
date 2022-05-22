import React from "react";
import RightTableCard from "./rightTableCard/rightTableCard";
import NewButton from "./rightTableCard/Button/newButton";
import DefaultButton from "./rightTableCard/Button/defaultButton";
import UrgentButton from "./rightTableCard/Button/urgentButton";
import PlusButton from "./rightTableCard/Button/plusButton";
import RightTableCreateCard from "./rightTableCard/rightTableCreateCard";
import RightTableHeader from "./RightTableHeader/rightTableHeader";

const RightTable = () => {
    return (
        <div className='right right-margin' style={{ backgroundColor: "white", paddingTop: "30px", borderRadius: "10px" }}>
            <RightTableHeader />
            <div className="ticket_options">
                <div className='ticket_box'>
                    <div className='flex center space-between tickets'>
                        <RightTableCreateCard />
                        <PlusButton />
                    </div>
                    <hr>
                    </hr>
                </div>
                <div className='ticket_box'>
                    <div className='flex center space-between tickets'>
                        <RightTableCard />
                        {/* <UrgentButton /> */}
                        <UrgentButton />
                    </div>
                    <hr>
                    </hr>
                </div>
                <div className='ticket_box'>
                    <div className='flex center space-between tickets'>
                        <RightTableCard />
                        <DefaultButton />
                    </div>
                    <hr>
                    </hr>
                </div>
                <div className='ticket_box'>
                    <div className='flex center space-between tickets'>
                        <RightTableCard />
                        <NewButton />
                        <div ></div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default RightTable;
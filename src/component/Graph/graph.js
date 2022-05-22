import React from "react";
import GraphHeader from "./GraphHeader/graphHeader";
import Stats from "../Stats/stats";
const Graph = () => {
    return (
        <div className="grid">
            <GraphHeader />

            <Stats />


        </div>
    );
}

export default Graph;
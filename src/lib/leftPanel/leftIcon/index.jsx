import React from "react";

export default function LeftIcon({toggle}) {
    return (
        <div className="left-panel">
            <div className="left-icon" onClick={toggle} />
        </div>
    )
}
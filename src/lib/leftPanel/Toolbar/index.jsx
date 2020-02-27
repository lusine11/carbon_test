import React from "react";

export default function Toolbar({opened}) {
    return (
        <div className={`toolbar ${opened ? 'opened' : ''}`}>
            <div className="wrapper">
                <button>Click</button>
            </div>
        </div>
    )
}
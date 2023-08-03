import React from "react";

export default function Box({onClick, value}){
    console.log('Creating a box');
    return (
        <div className="box" onClick={onClick} disabled={Boolean(value)}>
            {value}
        </div>
    )
}
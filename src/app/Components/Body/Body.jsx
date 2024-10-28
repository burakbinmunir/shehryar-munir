import React from 'react';
import './Body.css'

export default function Body(props) {
    return (

        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col">
                <h1 className={"text-9xl"}>Hello</h1>
                <div className="flex flex-row items-center">
                    <p className="mb-4 mx-2">__</p>
                    <p>Its Shehryar Munir, a Software Engineer</p>
                </div>
            </div>
            <div className={"flex flex-col mx-4 animate text-2xl"}> {/* Add the animate class here */}
                Portfolio in progress....
            </div>
        </div>
    )
}
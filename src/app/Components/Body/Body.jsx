import React from 'react';
import './Body.css'

export default function Body(props) {
    return (

        <div className="body-container">
            <div>
                <h1 className={"text-9xl"}>Hello</h1>
                <div className="intro-container">
                    <p className="mb-4 mx-2">__</p>
                    <p>Its Shehryar Munir, a Software Engineer</p>
                </div>
            </div>
            <div className={"flex flex-col mx-4 animate text-2xl in-progress-container"}> {/* Add the animate class here */}
                Portfolio in progress....
            </div>
        </div>
    )
}
import React from 'react';
import './LandingPage.css'
import Image from "next/image";

export default function LandingPage() {
    return (
        <div className="body-container">

            <div>
                <h1 className={"text-9xl"}>Hello</h1>
                <div className="intro-container">
                    <p className="mb-4 mx-2">__</p>
                    <p>Its Shehryar Munir, a Software Engineer</p>
                </div>
            </div>
            <div
                className={"flex flex-col mx-4 animate text-2xl in-progress-container"}> {/* Add the animate class here */}
                <Image
                    src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww'
                    alt={'My'}
                    unoptimized
                    width={500}
                    height={300}
                    className={"imgStyle"}
                />
            </div>
        </div>

    )
}

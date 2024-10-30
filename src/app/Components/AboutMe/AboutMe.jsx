import './AboutMe.css'
import AppColors from "@/Generic/AppColors";
import Image from "next/image";
import React from "react";
import MetricsSizes from "@/Generic/MetricsSizes";

export default function AboutMe() {
    return (
        <div className="container" id="about-me" >
            <div className="left">
                <h1 className={"text-5xl"}>About Me</h1>
                <p style={{color: AppColors?.secondary, fontSize: "1.2rem"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="mid">
                <div className="border-2 border-green m-2 items-center justify-center"
                     style={{
                         backgroundColor: AppColors?.white,
                         display: 'flex',
                         flexDirection: 'column', // To stack the text and image vertically
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: "5px",
                     }}>
                    <div className={"m-4 p-4"}>
                        <div className={"m-2"}>
                            <h1 className={"text-4xl"}>King Burak</h1>
                            <h1 style={{color: AppColors?.secondary}}>Average increase in client engagement in first 6
                                months</h1>
                        </div>
                        <Image
                            src='https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww'
                            alt={'My'}
                            unoptimized
                            width={300}
                            height={100}
                            className={"imgStyle"}
                        />
                    </div>
                </div>
            </div>

            <div className="right">
                <div className={"flex flex-row items-center"} style={{marginTop: "40%"}}>
                    <Image
                        src="bullet.png"
                        alt="External Image"
                        unoptimized
                        width={MetricsSizes?.extraLarge}
                        height={MetricsSizes?.extraLarge}
                    />
                    <h1 style={{color: AppColors?.secondary,}}
                        className={"m-4 rightTextStyle"}
                    >
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h1>

                </div>
                <div className={"flex flex-row items-center"}>
                    <Image
                        src="bullet.png"
                        alt="External Image"
                        unoptimized
                        width={MetricsSizes?.extraLarge}
                        height={MetricsSizes?.extraLarge}
                    />
                    <h1 style={{color: AppColors?.secondary,}}
                        className={"m-4 rightTextStyle"}
                    >
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </h1>

                </div>

            </div>
        </div>
    )
}
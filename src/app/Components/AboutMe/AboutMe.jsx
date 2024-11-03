import './AboutMe.css'
import AppColors from "@/Generic/AppColors";
import Image from "next/image";
import React from "react";
import MetricsSizes from "@/Generic/MetricsSizes";
import Tag from "@/app/Components/Experience/Tag";

export default function AboutMe() {
    return (
        <div className="about-me-container" id="about-me">
            <div className="left">
                <h1 className={"text-5xl"}>About Me</h1>
                <p style={{
                    color: AppColors?.secondary,
                    fontSize: MetricsSizes?.fontMedium,
                    marginTop: MetricsSizes?.marginMedium
                }}>
                    I am a passionate software engineer with a strong foundation in React Native development,
                    dedicated to creating innovative and user-friendly mobile applications. With experience in
                    both backend and frontend technologies, I have contributed to diverse projects, including the
                    Jarvis CRM at Dubizzle Labs, where I focused on enhancing user engagement and optimizing
                    performance.
                    My journey in software engineering has equipped me with the skills to collaborate effectively with
                    cross-functional
                    teams and deliver high-quality solutions. I thrive on challenges and continuously seek opportunities
                    to learn and grow
                    in this ever-evolving field.
                </p>
            </div>
            <div className="mid">
                <div
                    style={{
                        backgroundColor: AppColors?.white,
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: "5px",
                    }}>
                    <div className={"m-4 p-4"}>
                        <div className={"m-2"}>
                            <h1 className={"text-6xl"}>25%</h1>
                            <h1 style={{color: AppColors?.secondary}} className={"text-2xl"}>
                                Stability in Dubizzle Groups Core CRM Product
                            </h1>
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
                <div className={"flex flex-row items-center"}>
                    <Image
                        src="bullet.png"
                        alt="External Image"
                        unoptimized
                        width={MetricsSizes?.extraLarge}
                        height={MetricsSizes?.extraLarge}
                    />
                    <h1 style={{color: AppColors?.secondary, fontSize: MetricsSizes?.fontMedium}}
                        className={"m-4 rightTextStyle"}>
                        My background includes a blend of technical expertise and problem-solving skills,
                        enabling me to tackle complex challenges while delivering impactful solutions that enhance user
                        experiences.
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
                    <h1 style={{color: AppColors?.secondary, fontSize: MetricsSizes?.fontMedium}}
                        className={"m-4 rightTextStyle"}>
                        My collaborative approach allows me to effectively work with diverse teams, ensuring that I
                        contribute to projects that drive innovation and meet user needs.
                    </h1>


                </div>
                <div>
                    <div>
                        <a href={"https://drive.google.com/file/d/18OaTvKbcknaFxZqT2jeqj6wpUJ3_gAtI/view?usp=sharing"}>
                            <Tag
                                tagName={"Resume"}
                                textColor={AppColors?.white}
                                backgroundColor={AppColors?.darkgray}
                                imgSrc={"external-link.png"}
                                imgWidth={MetricsSizes?.medium}
                                imgHeight={MetricsSizes?.medium}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

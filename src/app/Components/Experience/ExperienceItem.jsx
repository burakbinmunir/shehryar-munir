import React from 'react';
import './Experience.css'
import Tag from "@/app/Components/Experience/Tag";
import MetricsSizes from "@/Generic/MetricsSizes";
import AppColors from "@/Generic/AppColors";
import Image from "next/image";


export default function ExperienceItem({jobTitle, startDate, endDate, experienceDescription, tags, companyLogo}) {
    return (
        <div className="experience-item">
            <div className="experience-item-left">
                <Image
                    className={"mx-2"}
                    src={companyLogo}
                    alt="External Image"
                    unoptimized
                    width={50}
                    height={40}
                />

                <div>

                    <p className={"text-2xl"}>{jobTitle}</p>
                    <div className={"flex flex-row items-center text-center"}>
                        <p className={"text-2xl mx-4"} style={{color: AppColors?.secondary}}>•</p>
                        <p style={{
                            color: AppColors?.secondary,
                            fontSize: MetricsSizes?.large - 5
                        }}> {startDate} - {endDate}</p>
                    </div>
                </div>
            </div>
            <div className={"experience-item-mid"}>
                <p style={{
                    color: AppColors?.secondary,
                    fontSize: MetricsSizes?.large - 5,
                    marginTop: MetricsSizes?.fontMedium
                }}>{experienceDescription}</p>
            </div>
            <div className={"experience-item-right"}>
                {tags?.map((item, index) => {
                    return <Tag key={index} tagName={item}/>
                })}

            </div>
        </div>
    )
}


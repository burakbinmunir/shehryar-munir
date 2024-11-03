"use client"
import React from 'react';
import './Experience.css'
import AppColors from "@/Generic/AppColors";
import ExperienceItem from "@/app/Components/Experience/ExperienceItem";
import MetricsSizes from "@/Generic/MetricsSizes";

export default function Experience() {
    const [experience, setExperience] = React.useState([
        {
            id: 1,
            jobTitle: "Associate Software Engineer, Dubizzle Labs ",
            startDate: "March, 2024",
            endDate: "Present",
            experienceDescription: "Handling complex UI, State management, and performance optimization.",
            tags: ["React Native", "CRM", "Mobile Dev"],
            companyLogo: "dubizzlelabs.png"
        },
        {
            id: 2,
            jobTitle: "Software Engineering Intern, Arrivy Inc.",
            startDate: "June, 2023",
            endDate: "August, 2023",
            experienceDescription: "Developed backend API endpoints for attendance management, deploying them via Google Cloud Platform.",
            tags: ["Backend Dev", "DevOps", "Flask"],
            companyLogo: "arrivy.png"

        },
        {
            id: 3,
            jobTitle: "Teaching Assistant, FAST, NUCES",
            startDate: "September, 2022",
            endDate: "March 2024",
            experienceDescription: "Preparing course materials, delivering tutorials, assisting students with their learning and graded assignments.",
            tags: ["Tutoring", "Education", "Mentorship"],
            companyLogo: "fast.png"

        },
        {
            id: 4,
            jobTitle: "Head Invitation, SOFTEC",
            startDate: "September, 2022",
            endDate: "May, 2023",
            experienceDescription: "Managing and coordinating invitations, ensuring broad outreach and effective engagement.",
            tags: ["Branding", "Marketing", "Participation"],
            companyLogo: "softec.png"
        }
    ]);
    return (
        <div className="experience-container" id="experience">
            <div className="header-view">
                <div>
                    <h1 className="text-4xl">Delve into My Software Engineering Experience</h1>
                </div>
                <div>
                    <h1 style={{color: AppColors?.secondary, fontSize: MetricsSizes?.large - 3}}>
                        Over the past 4 years, I've had the opportunity to work on numerous challenging projects,
                        collaborating with diverse teams and clients to bring creative visions to life.
                    </h1>
                </div>
            </div>
            <div className="experience-list">
                {!!experience?.length && experience?.map((item, index) => (
                    <ExperienceItem
                        key={item?.id}
                        jobTitle={item?.jobTitle}
                        startDate={item?.startDate}
                        endDate={item?.endDate}
                        experienceDescription={item?.experienceDescription}
                        tags={item?.tags}
                        companyLogo={item?.companyLogo}
                    />
                ))}
            </div>
        </div>

    )
}

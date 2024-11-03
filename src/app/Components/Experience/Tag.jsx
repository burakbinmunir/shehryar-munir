import React from 'react';
import AppColors from "@/Generic/AppColors";
import MetricsSizes from "@/Generic/MetricsSizes";
import Image from "next/image";

export default function Tag(props) {
    return (
        <div className={"px-4 py-2"} style={{
            backgroundColor: props?.backgroundColor ? props?.backgroundColor : AppColors?.secondary,
            margin: "2vh",
            textAlign: "center",
            borderRadius: "50px",
        }}>
            <div className={"flex flex-row justify-center items-center"}>
                <p style={{color: props?.textColor ? props?.textColor : AppColors?.primary}}>{props?.tagName}</p>
                {!!props?.imgSrc && <Image
                    className={"mx-4"}
                    src={props?.imgSrc}
                    alt="External Image"
                    unoptimized
                    width={props?.imgWidth ? props?.imgWidth : MetricsSizes?.extraLarge}
                    height={props?.imgHeight ? props?.imgHeight  :MetricsSizes?.extraLarge}
                />}
            </div>
        </div>
    )
}



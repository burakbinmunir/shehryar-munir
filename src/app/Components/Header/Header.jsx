import React from 'react';
import AppColors from "@/Generic/AppColors";
import Image from "next/image";

export default function Header() {
    const imageLoader = ({ src, width, quality }) => {
        return "https://cdn1.iconfinder.com/data/icons/user-interface-5-basic-outline/24/share_arrow_send_redirect_shortcut-512.png"
    }

    return (
        <header className="flex flex-row items-center justify-between w-full">
            <div className={"flex flex-row items-center justify-between space-x-6"}>
                <p>About Me</p>
                <p>Portfolio</p>
                <p>Services</p>
                <p>Blog</p>
            </div>
            <div className={"flex flex-row items-center justify-between"}>
                <p className={"border-b-2 border-black mx-0.5"}>
                    Book A Call
                </p>

                <Image
                    src="https://cdn1.iconfinder.com/data/icons/user-interface-5-basic-outline/24/share_arrow_send_redirect_shortcut-512.png"
                    alt="External Image"
                    unoptimized
                    width={18}
                    height={18}
                />
            </div>
        </header>
    );
}

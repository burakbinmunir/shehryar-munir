import React from 'react';
import Image from "next/image";
import './Header.css'

export default function Header() {

    return (
        <header className="header-container">
            <div className={"header-left"} >
                <p className={"mx-4 header-left-content"}>About Me</p>
                <p className={"mx-4 header-left-content"}>Portfolio</p>
                <p className={"mx-4 header-left-content"}>Services</p>
                <p className={"mx-4 header-left-content"}>Blog</p>
            </div>
            <div className={"header-right"}>
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

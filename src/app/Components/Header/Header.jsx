"use client";
import React from 'react';
import Image from "next/image";
import './Header.css'

export default function Header() {
    const smoothScroll = (targetId, duration) => {
        const targetElement = document.getElementById(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime = null;

        const animation = currentTime => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1); // Ensure progress is not greater than 1
            window.scrollTo(0, startPosition + distance * progress);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    };

    return (
        <header className="header-container">
            <div className={"header-left"}>
                <p onClick={() => smoothScroll('about-me', 300)} className={"mx-4 header-left-content"}
                   style={{cursor: 'pointer'}}>About Me</p>
                <p onClick={() => smoothScroll('experience', 300)} className={"mx-4 header-left-content"}
                   style={{cursor: 'pointer'}}>Experience</p>
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

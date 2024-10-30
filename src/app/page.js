import Header from "@/app/Components/Header/Header";
import LandingPage from "@/app/Components/LandingPage/LandingPage";
import AboutMe from "@/app/Components/AboutMe/AboutMe";
import MainPage from "@/app/Components/MainPage/MainPage";

export default function Home() {
    return (
        <div
            className="sm:p-20 font-[family-name:var(--font-aeonik-regular)]">
            <MainPage/>
            <AboutMe/>
        </div>
    );
}

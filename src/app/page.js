import AboutMe from "@/app/Components/AboutMe/AboutMe";
import MainPage from "@/app/Components/MainPage/MainPage";
import Experience from "@/app/Components/Experience/Experience";

export default function Home() {
    return (
        <div
            className="sm:p-20 font-[family-name:var(--font-aeonik-regular)]">
            <MainPage/>
            <AboutMe/>
            <Experience />
        </div>
    );
}

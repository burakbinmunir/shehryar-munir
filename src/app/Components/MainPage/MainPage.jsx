import Header from "@/app/Components/Header/Header";
import LandingPage from "@/app/Components/LandingPage/LandingPage";

export default function MainPage() {
    return (
        <div className={"grid grid-rows-[20px_1fr_20px] items-center justify-items-center"} style={{ position: 'relative' }}>
            <Header />
            <LandingPage />
        </div>
    )
}

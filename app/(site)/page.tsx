import HeroCarousel from "../_components/(site)/HeroCarousel/HeroCarousel";
import { heroSlides } from "../_utils/MockingData";

export default function Home() {
    return (
        <div className="flex flex-col h-full">
            <div className="w-full h-full max-h-[600px]">
                <HeroCarousel slides={heroSlides} />
            </div>
        </div>
    );
}

import HeroCarousel from "../_components/(site)/HeroCarousel/HeroCarousel";
import ProductsGrid from "../_components/(site)/Products/ProductsGrid";
import { heroSlides, sneakers } from "../_utils/MockingData";

export default function Home() {
    return (
        <div className="flex flex-col h-full">
            <div className="block w-full h-[450px] lg:h-[500px] xl:h-[600px]">
                <HeroCarousel slides={heroSlides} />
            </div>

            <ProductsGrid sectionTitle={"Premium Sneakers"} products={sneakers} />
        </div>
    );
}

import Hero from "./components/sections/hero";
import Feature from "./components/sections/feature";
import Catalogue from "./components/sections/catalogue";
import Contact from "./components/sections/contact";

export default function Home() {
    return(
        <main>
            <Hero/>

            <div className="max-w-7xl mx-auto px-5 relative">
                <Feature/>
                <Catalogue/>
                <Contact/>
            </div>
        </main>
    )
}

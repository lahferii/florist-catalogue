import Header from "./components/partials/header";
import Footer from "./components/partials/footer";

export default function MainLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
}

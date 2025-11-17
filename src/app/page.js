import Navbar from "@/components/navbar";
import Hero from '@/components/hero';
import About from '@/components/about';
import Portfolio from '@/components/portfolio';
import Contact from '@/components/contact';
import Footer from "@/components/footer";
const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
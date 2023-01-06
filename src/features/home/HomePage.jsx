import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "./components/About"
import Courses from "./components/Courses"
import Features from "./components/Features"
import Footer from "./components/Footer"
import HowItWorks from "./components/HowItWorks"
import HowToParticipate from "./components/HowToParticipate"

const HomePage = () => {

    return (
        <>
            <Header />
            <Hero />
            <About />
            <HowItWorks / >
            <Courses />
            <HowToParticipate />
            <Features />
            <Footer />
        </>
    )
}

export default HomePage
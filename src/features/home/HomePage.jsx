import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "./components/About"
import Courses from "./components/Courses"
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
        </>
    )
}

export default HomePage
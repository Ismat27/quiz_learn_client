import Header from "../../components/Header"
import Hero from "../../components/Hero"
import About from "./components/About"
import Courses from "./components/Courses"
import HowItWorks from "./components/HowItWorks"

const HomePage = () => {

    return (
        <>
            <Header />
            <Hero />
            <About />
            <HowItWorks / >
            <Courses />
        </>
    )
}

export default HomePage
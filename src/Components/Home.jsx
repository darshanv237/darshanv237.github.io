import Education from "./about/Education"
import Skills from "./about/Skills"
import Navbar from "./Home/Navbar"
import Banner from "./Home/Banner"
import Footer from "./Home/Footer"
import Work from "./about/Work"
import Achievements from "./about/Achievements"
import Projects from "./about/Projects"

const Home=()=>{
    return(
        <div id="home">
        <Navbar></Navbar>
        <Banner></Banner>
        <Education></Education>
        <Skills></Skills>
        <Work></Work>
        <Achievements></Achievements>
        <Projects></Projects>
        <Footer></Footer>
        </div>
    )
}

export default Home;
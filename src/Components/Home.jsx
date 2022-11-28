import Education from "./about/Education"
import Skills from "./about/Skills"
import Navbar from "./Home/Navbar"
import Banner from "./Home/Banner"
import Footer from "./Home/Footer"
import Work from "./about/Work"
import Achievements from "./about/Achievements"
import Projects from "./about/Projects"
import About from "./about/About"

const Home=()=>{
    return(
        <div id="home">
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Work></Work>
        <Achievements></Achievements>
        <Projects></Projects>
        <Footer></Footer>
        <a id="back-to-top" href="#" className="btn btn-light btn-lg back-to-top"  role="button"><i className="fa-solid fa-chevron-up"></i></a>
        </div>
    )
}

export default Home;
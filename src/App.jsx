
import Header from "./components/Header"
import HowtoWorkSection from "./components/HowtoWorkSection"
import JoinUsSection from "./components/JoinUsSection"
import Main from "./components/Main"
import ReadyToSection from "./components/ReadyToSection"
import Testimonials from "./components/Testimonials"



function App() {
 
  return (
    <div className="2xl:max-w-[80%] mx-auto">
    <Header/>
    <Main/>
    <HowtoWorkSection/>
    <Testimonials/>
    <ReadyToSection/>
    <JoinUsSection/>
   
    </div>
    
  )
}

export default App

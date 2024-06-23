import CncProducts from "../components/cncProducts/CncProducts"
import Designing from "../components/designing/Designing"
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import Main from "../components/main/Main"
import Sec1 from "../components/sec1/Sec1"
import Sec2 from "../components/sec2/Sec2"
import Sec3 from "../components/sec3/Sec3"
import Sec_video from "../components/sec_video/Sec_video"



export default function Home() {
  return (
    <div>

        <Header/>
        <Main/>
        <Sec1/>
        <Sec2/>
        <Sec3/>
        <CncProducts/>
        <Designing/>
        <Sec_video/>
        <Footer/>
    </div>
  )
}

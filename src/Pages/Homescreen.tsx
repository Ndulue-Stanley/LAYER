import Add from "./Add";
import Additional from "./Additional";
import Colr from "./Colr";
import Demo from "./Demo";
import Emojis from "./Emojis";
import Features from "./Features";
import Hero from "./Hero";
import How from "./How";
import News from "./News";
import SliderP from "./SliderP";
import Team from "./Team";
import Welcome from "./Welcome";
import Sub from "./Sub";
import Contact from "./Contact";

const Homescreen = () =>{
    return(
        <div>
            <Hero/>
            <Welcome/>
            <Features/>
            <How/>
            <Add/>
            <Additional/>
            <Emojis/>
            <Demo/>
            <SliderP/>
            <Team/>
            <News/>
            <Colr/>
            <Sub/>
            <Contact/>
        </div>
    )
}
export default  Homescreen;
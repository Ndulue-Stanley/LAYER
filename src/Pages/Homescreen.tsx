import Add from "./Add";
import Features from "./Features";
import Hero from "./Hero";
import How from "./How";
import Welcome from "./Welcome";

const Homescreen = () =>{
    return(
        <div>
            <Hero/>
            <Welcome/>
            <Features/>
            <How/>
            <Add/>
        </div>
    )
}
export default  Homescreen;
import React from "react";
import Navbar from "./Navbar";
import Service from "./Services";
import Portfolio from "./Portfolio"
import About from "./About";
import Team from "./Team";
import Clients from "./Clients";
import Footer from "./Footer";


const App = () =>{

    return(

        <div>
        <Navbar/>
        <Service/>
        <Portfolio/>
        <About/>
        <Team/>
        <Clients/>
        <Footer/>
        </div>
    );

}
export default App;
import { useState } from "react";
import AboutUs from "./aboutUs";
import { ABOUT_US, HOME_SCREEN } from "./constant";
import HeaderFile from "./headercomponent";
import Home from "./home";

function Screenmanager(){
    const [currentStatus , changeCurrentStatus] = useState(HOME_SCREEN)

 function renderScreen(){
    if(currentStatus === HOME_SCREEN){
        return (
            <Home title={currentStatus}/>
        )
    }
    else if (currentStatus === ABOUT_US){
        return (
            <AboutUs title={currentStatus}/>
        )
    }
    else {
        return (
            <section>
                no screen
            </section>
        )
    }
 }

 return (
    <div className="headerFile">
        <HeaderFile onscreenChange = {changeCurrentStatus} title={currentStatus}/>
        {renderScreen()}
    </div>
 )
}

export default Screenmanager; 
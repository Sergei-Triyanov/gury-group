import React from "react";
import Substrate from "./Substrate";
import Price from "./Price";
import Contact from "./Contact";
import About from "./About";


const ContentPage =({handleProgressElement}) => {


return (
    <form action={'#'} onSubmit={(e)=>{
        e.preventDefault()
        console.log(e)
    }}>
        <Substrate content={<About  handleProgressElement={handleProgressElement}/>}/>
        <Substrate content={<Price handleProgressElement={handleProgressElement}/>}/>
        <Substrate content={<Contact handleProgressElement={handleProgressElement}/>}/>
    </form>
)
}


export default ContentPage;
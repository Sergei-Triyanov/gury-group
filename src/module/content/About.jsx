import React from "react";
import Section from "./Section";
import InputForm from "../UI/InputForm";
import Accardion from "../UI/Accardion";

const About = ({handleProgressElement}) => {

    return (
        <>
            <Section
                title={'Название'}
                     form={
                         <InputForm
                             label={'Название товара'}
                             conditions={'Название не должно превышать 50 символов'}
                             maxL={50}
                         />
                     }
            />
            <Section title={'Категория'} form={<Accardion  handleProgressElement={handleProgressElement}/>}/>
        </>
    )
}

export default About;
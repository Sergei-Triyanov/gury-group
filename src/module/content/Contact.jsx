import React, {useState} from "react";
import Section from "./Section";
import InputForm from "../UI/InputForm";
import Map from "./Map";
import PhoneInput from "../UI/PhoneInput"
import {Button} from "@material-ui/core";
import Footer from "../UI/Footer";

const Contact = ({handleProgressElement}) => {


    return(
        <>
            <Section
                title={'Местоположение'}
                form={
                    <InputForm
                        label={'Введите город, улицу, дом'}
                        conditions={'Введите название и выберете из списка населенный пункт и улицу'}
                        maxL={Infinity}
                        handleProgressElement={handleProgressElement}
                        title={'Местоположение'}
                    />}
            />
            <Map/>
            <Section/>
            <Section
                title={'Контакты'}
                form={
                    <PhoneInput
                        handleProgressElement={handleProgressElement}
                        title={'Контакты'}
                    />
                }
            />
            <Footer/>
        </>
    )
}

export default Contact;
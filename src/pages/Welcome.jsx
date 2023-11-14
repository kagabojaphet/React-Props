import React from "react";
import Nav from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Card from "../components/Card";
import toto from "../assets/funghi.jpg";
import fifi from "../assets/margherita.jpg";
import didi from "../assets/spinaci.jpg";

const Welcome=()=>{
    return(
        <>
        <Nav/>
        <Home/>
        <div className="card">
            <Card photo={toto} price={20} name="funghi" discpt="hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"/>
            <Card photo={fifi} price={10} name="margherita" discpt="ffffffffffffffffffffffffffffff"/>
            <Card photo={didi} price={5} name="spinaci" discpt="sssssssssssssssssssssssssssssss"/>
        </div>
        <Footer/>
        </>
    )
}
export default Welcome
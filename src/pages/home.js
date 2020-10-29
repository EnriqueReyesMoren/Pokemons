import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import SliderOne from "../components/SliderOne";
import CausesArea from "../components/CausesArea";
import CallToActionTwo from "../components/CallToActionTwo";

const HomePage = () => {
    return (
        <Layout pageTitle="Pokemon - Torque Studio">
          <NavOne />
          <SliderOne />
          <CausesArea />
          <CallToActionTwo />
          <Footer />
        </Layout>
    );
};

export default HomePage;

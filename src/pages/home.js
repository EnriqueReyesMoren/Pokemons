import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import PokemonsArea from "../components/PokemonArea";

const HomePage = () => {
    return (
        <Layout pageTitle="Pokemon - Torque Studio">
          <NavOne />
          <SliderOne />
          <PokemonsArea />
        </Layout>
    );
};

export default HomePage;

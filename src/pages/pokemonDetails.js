import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import PokemonsDetails from "../components/PokemonsDetail";

const PokemonPage = () => {
    return (
        <Layout pageTitle="Pokedex | Torque Studio">
            <NavOne />
            <PageHeader title="Who's That Pokémon?" />
            <PokemonsDetails />
        </Layout>
    );
};

export default PokemonPage;

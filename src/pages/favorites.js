import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Pokemons from "../components/Pokemons";


const FavoritesPage = () => {
    return (
        <Layout pageTitle="Pokedex | Favorites Pokemons">
            <NavOne />
            <PageHeader title="Causes" />
            <Pokemons />
            
        </Layout>
    );
};

export default FavoritesPage;

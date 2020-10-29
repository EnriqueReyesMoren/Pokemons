import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Pokemons from "../components/Pokemons";
import Footer from "../components/Footer";

const FavoritesPage = () => {
    return (
        <Layout pageTitle="Oxpitan | Causes">
            <NavOne />
            <PageHeader title="Causes" />
            <Pokemons />
            <Footer />
        </Layout>
    );
};

export default FavoritesPage;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {
    favorites,
    home,
    pokemonDetails
    } from "./pages/"

const router = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/pokemon-details" component={pokemonDetails} />
            <Route exact path="/favorites" component={favorites} />
            </Switch>
        </Router>
    )
}

export default router
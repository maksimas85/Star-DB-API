import React from 'react'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import PersonDetails from '../PersonDetails/PersonDetails'
import ItemList from '../ItemList/ItemList'

import './App.css'

const App = () => {
    return(
        <div className='container'>
            <Header />
            <RandomPlanet />

            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList />
                </div>
                <div className='col-md-6'>
                    <PersonDetails />
                </div>
            </div>
        </div>
    )
}

export default App
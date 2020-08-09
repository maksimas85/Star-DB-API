import React, {Component} from 'react'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import PersonDetails from '../PersonDetails/PersonDetails'
import ItemList from '../ItemList/ItemList'
import './App.css'
import PeoplePage from '../PeoplePage/PeoplePage'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import SwapiService from '../../services/SwapiService'

export default class App extends Component {

    swapiService = new SwapiService()

    state = {
        showPlanet: true,
        hasError: false
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showPlanet: !state.showPlanet
            }
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const planet = this.state.showPlanet ? <RandomPlanet/> : null

        return (
            <div className='container'>
                <Header/>
                { planet }

                <button type="button" className="btn btn-outline-success" wfd-id="631"
                        onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>

                <PeoplePage  />

                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllPlanets}
                                  children={(item) => item.name}/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllStarships}
                                  children={(item) => item.name} />
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

            </div>
        )
    }
}

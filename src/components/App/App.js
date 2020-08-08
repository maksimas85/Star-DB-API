import React, {Component} from 'react'
import Header from '../Header/Header'
import RandomPlanet from '../RandomPlanet/RandomPlanet'
import PersonDetails from '../PersonDetails/PersonDetails'
import ItemList from '../ItemList/ItemList'
import './App.css'

export default class App extends Component {

    state = {
        showPlanet: true,
        selectedPerson: null
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showPlanet: !state.showPlanet
            }
        })
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    }

    render() {
        const planet = this.state.showPlanet ? <RandomPlanet/> : null

        return (
            <div className='container'>
                <Header/>
                { planet }
                <button type="button" className="btn btn-outline-success" wfd-id="631"
                        onClick={this.toggleRandomPlanet}>Toggle Random Planet</button>
                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}

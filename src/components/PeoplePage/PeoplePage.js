import React, {Component} from 'react'
import './PeoplePage.css'
import ItemList from '../ItemList/ItemList'
import PersonDetails from '../PersonDetails/PersonDetails'
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator'
import SwapiService from '../../services/SwapiService'

const Row = ({left, right}) => {
    return (
        <div className='row mb2'>
            <div className='col-md-6'>
                {left}
            </div>
            <div className='col-md-6'>
                {right}
            </div>
        </div>
    )
}

class ErrorBoundry extends Component {

    state = {
        hasErrror: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }

    render() {

        if (this.state.hasErrror) {
            return <ErrorIndicator/>
        }

        return this.props.children
    }
}

export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: 3,
        hasError: false
    }



    onPersonSelected = (selectedPerson) => {
        this.setState({
            selectedPerson
        })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>

                {(i) => (
                    `${i.name} (${i.birthYear})`
                )}

            </ItemList>
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        )

        return(
            <ErrorBoundry>
                <Row left={itemList} right={personDetails}/>
            </ErrorBoundry>
        )
    }
}

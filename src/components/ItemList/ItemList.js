import React, { Component } from 'react'
import './ItemList.css'
import SwapiService from '../../services/SwapiService'
import Spinner from '../Spinner/Spinner'

export default class ItemList extends Component {

    swapiService = new SwapiService()

    state = {
        peopleList: null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({
                    peopleList
                })
        })
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className='list-group-item d-flex justify-content-between align-items-center'
                    wfd-id='120'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {name}
                </li>
            )
        })
    }

    render() {

        const { peopleList } = this.state

        if (!peopleList) {
            return <Spinner />
        }

        const items = this.renderItems(peopleList)

        return (
            <ul className='list-group' wfd-id='115'>
                { items }
            </ul>
        );
    }
}
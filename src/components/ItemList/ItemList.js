import React, { Component } from 'react'
import './ItemList.css'
import Spinner from '../Spinner/Spinner'

export default class ItemList extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {

        const { getData } = this.props

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                })
        })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item

            const label = this.props.children(item)
            return (
                <li className='list-group-item d-flex justify-content-between align-items-center'
                    wfd-id='120'
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const { itemList } = this.state

        if (!itemList) {
            return <Spinner />
        }

        const items = this.renderItems(itemList)

        return (
            <ul className='list-group' wfd-id='115'>
                { items }
            </ul>
        );
    }
}
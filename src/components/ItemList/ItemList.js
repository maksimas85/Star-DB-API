import React, { Component } from 'react'
import './ItemList.css'

export default class ItemList extends Component {

    render() {
        return (
            <ul className='list-group' wfd-id='115'>
                <li className='list-group-item d-flex justify-content-between align-items-center' wfd-id='120'>
                    Lyuk Skywoker
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center' wfd-id='118'>
                    R2-D2
                </li>
                <li className='list-group-item d-flex justify-content-between align-items-center' wfd-id='116'>
                    Chubacca
                </li>
            </ul>
        );
    }
}
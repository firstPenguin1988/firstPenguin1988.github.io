import React, { Component } from 'react';
import axios from 'axios';
import './style/user.css';
import Person from './img/Person.jpg';

export default class User extends Component {

    state = {
        people: []
    }

    componentDidMount() {
        axios.get("https://swapi.dev/api/people/1/")
        .then((response) => {
            this.setState( {people: response.data} )
        })
    }

    render() {
        const p = this.state.people;
        console.log(p);
        return (
            <div className="profile">

                <div className="profile-header">
                    <img src={Person} />
                    <h1>Name: {p.name}</h1>
                </div>

                <div className="profile-main">
                    <ul className="profile-list">
                        <li><h3>Birth date: {p.birth_year}</h3></li>
                        <li><h3>Gender: {p.gender}</h3></li>
                        <li><h3>Height: {p.height}</h3></li>
                        <li><h3>Created: {p.created}</h3></li>
                        <li><h3>Edited: {p.edited}</h3></li>
                        <li><h3>URL: {p.url}</h3></li>
                    </ul>
                </div>  

            </div>
        );
    }

}



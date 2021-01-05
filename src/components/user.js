import React, {Component} from 'react';
import axios from 'axios';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: []
        }
    }

    getPeople = () => {
        return axios.get("https://swapi.dev/api/people/1/")
        .then((response) => {
            console.log("wwwwwww" + JSON.stringify(response.data));
            this.setState( {people: response.data} )
        })
    }

    componentDidMount() {
        this.getPeople()
    }

    render() {
        const {people} = this.state;

        return (
            <ul>
                <li><h6>Name: {this.props.people.name}</h6></li>
                <li><h6>Gender: {this.props.people.gender}</h6></li>
                <li><h6>Birth date: {this.props.people.birth_year}</h6></li>
            </ul>
        );
    }
}

export default User;
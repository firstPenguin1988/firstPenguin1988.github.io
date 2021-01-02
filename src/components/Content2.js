import React, {Component} from 'react';
import './style/Content2.css';
import axios from 'axios';

class Content2 extends Component {

    constructor(props){
		super(props);
	
		this.state = {
		  planets: [],
		}
	  }
	
	getPlanet = () => {
		return axios.get("https://swapi.dev/api/planets/1/")
		.then((response) => {
		  console.log("gfhf" + response.data);
		  this.setState( { planets: response.data } )
		})
	}
	
	componentDidMount(){
		this.getPlanet()
	}
	
    render() {

        const {planets} = this.state;
        console.log( 'awsaws' + planets );

        return (
            <div className="content2">
                <div className="text1">
                    <h2><strong>Upcoming payments</strong></h2>
                </div>
                <div className="payment">
                    <div className="payment1">
                        <a href="#"><i className="fa fa-briefcase fa-2x" aria-hidden="true" /></a>
                        <h3><strong>{ planets.name }</strong></h3>
                        <h4 style={{color: '#b1b1b1'}}>Population</h4>
                        <h3><strong>{ planets.population }</strong></h3>
                    </div>
                    <div className="payment2">
                        <a href="#"><i className="fa fa-paypal fa-2x" aria-hidden="true" /></a>
                        <h3><strong>{ planets.terrain }</strong></h3>
                        <h4 style={{color: '#b1b1b1'}}>Planet Diameter</h4>
                        <h3><strong>{ planets.diameter }</strong></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content2;

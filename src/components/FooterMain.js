import React, {Component} from "react";
import axios from "axios";
import Footer from './Footer';

class FooterMain extends Component {
  constructor(props){
    super(props);

    this.state = {
      species: [],
    }
  }

  getSpecies = () => {
    return axios.get("https://swapi.dev/api/planets/")
    .then((res) => {
        console.log("123123" + res.data);
        this.setState( {species:res.data.results} )
    })
  }

  componentDidMount(){
    this.getSpecies()
    .then((data) => {
      this.setState({data: data});
    })
  }

  render() {
    const {species} = this.state;

    return(
      <div className="App">
        <Footer footer={species} />
      </div>
    );
  }
}

export default FooterMain;
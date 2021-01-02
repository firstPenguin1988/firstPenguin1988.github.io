import React, {Component} from 'react';
import './style/Footer.css';
import { Select } from "@chakra-ui/react"


class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortBy: 1
        }
    }
    

    onSortChange = (event) => {
        console.log("lalala"+event.target.value);
        this.setState({
            sortBy: event.target.value
        })
    }

    render() {

        const infoS = this.props.footer;
        /*console.log("SpeciesInfo" + this.props.footer[0]?.name);*/

        return (
            
            <div className="footer">
                
                <div className="foot1">
                    <div className="foot1left">
                        <h3><strong>Planet Information</strong></h3>
                    </div>
                    <div className="foot1right">
                        <div className="f1rchild">
                        <Select placeholder="Select option" onChange={this.onSortChange} value={this.state.sortBy}>
                            <option value={1}>ASC</option>
                            <option value={-1}>DESC</option>
                            
                        </Select>
                        </div>
                    </div>
                </div>

                <div className="foot2">
                
                    <div className="f2child">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name:</th>
                                    <th>Creation Date</th>
                                    <th>Orbital Period</th>
                                </tr>
                            </thead>
                            <tbody>

                            {
                                infoS.sort((a, b) => {
                                    if (this.state.sortBy == 1) {
                                        return a.orbital_period - b.orbital_period;
                                    }
                                    else {
                                        return b.orbital_period - a.orbital_period;
                                    }
                                        
                                })
                                .map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.created}</td>
                                        <td>{item.orbital_period}</td>
                                        <td><i className="fa fa-ellipsis-v" aria-hidden="true" /></td>
                                    </tr>
                                ))
                            }

                                
                            </tbody>
                        </table>
                    </div>
                </div>		
                		
            </div>
            
        );
    }
}

export default Footer;
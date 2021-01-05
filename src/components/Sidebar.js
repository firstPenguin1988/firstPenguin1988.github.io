import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/react-fontawesome";
import './style/Sidebar.css';

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="sidebar">
                <Redirect to="/dashboard">
                    <FontAwesomeIcon icon={faHome} />
                </Redirect> 
                
                <a href="https://www.gmail.com/"><i className="fa fa-envelope" aria-hidden="true" /><span /></a>
                <a href="comment.html"><i className="fa fa-comment" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-user" aria-hidden="true" onClick={this.handleOnSubmit} /><span /></a>
                <a href="#"><i className="fa fa-upload" aria-hidden="true" /><span /></a>
                <a href="#"><i className="fa fa-cog" aria-hidden="true" /><span /></a>
            </div>
        );
    }
}

export default Sidebar;
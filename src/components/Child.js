import React from 'react';
import Main from "./Main.js";
import Footer from "./Footer.js";
import './style/Child.css';
import FooterMain from './FooterMain.js';

class Child extends React.Component {
    render() {
        return (
            <div className="child">
              <Main></Main>
              <FooterMain></FooterMain>
            </div>
        );
    }
}   

export default Child;

import React, {Component} from 'react';
import './style/Aside.css';
import Download from "./img/download.png";
import Graph from "./img/graph1.png";
import MonthlyChart from "./MonthlyChart";
//mport DailyChart from "./DailyChart";
//import WeeklyChart from "./WeeklyChart";
//import YearlyChart from "./YearlyChart";

class Aside extends Component {

    constructor(){
        super();
        this.state = {
            arr: [
                {name: "day", isActive: false},
                {name: "week", isActive: false},
                {name: "month", isActive: true},
                {name: "year", isActive: false},
            ]
        }
    }

    onClick = (i) => {
        let chrt = this.state.arr;
        chrt[i].isActive = !chrt[i].isActive;
        this.setState({
            arr: chrt
        });
    }
    
    render() {
        return (
            <div className="aside">

                <div className="top">
                    <div className="first">
                        <div className="first-left">
                            <h3 style={{color: '#b1b1b1'}}>Saved this month</h3>
                        </div>
                        <div className="first-right">
                            <a href="#"><i className="fa fa-ellipsis-v" aria-hidden="true" /></a>
                        </div>								
                    </div>

                    <div className="second">
                        <h3><strong>$25,999.00</strong></h3>
                    </div>

                    <div className="third">
                        {this.state.arr.map((el, i) =>
                            <div key={i} onClick={()=> this.onClick(i)}>
                                {el.name}
                            </div>
                            
                        )}

                    </div>

                    {/* 
                    <div className="third">
                        <div className="day" onClick={this.onClickChart}>
                            <button value="1" style={{color: '#b1b1b1'}}>Day</button>
                        </div>
                        <div className="week" onClick={this.onClickChart}>
                            <button value="2" style={{color: '#b1b1b1'}}>Week</button>
                        </div>
                        <div className="month" onClick={this.onClickChart}>
                            <button value="3" style={{color: '#b1b1b1'}}>Month</button>
                        </div>
                        
                        <div className="year" onClick={this.onClickChart}>
                            <button value="4" style={{color: '#b1b1b1'}}>Year</button>
                        </div>								
                    </div>
                </div> */}
                
                <div className="middle">
                      
                    <MonthlyChart />
                                                            
                </div>
                
                
                <div className="fifth">
                    {/*
                    <div className="months">
                        <div className="may">
                            <h4 style={{color: '#b1b1b1'}}>May</h4>
                        </div>
                        <div className="june">
                            <h4 style={{color: '#b1b1b1'}}>June</h4>
                        </div>
                        <div className="july">
                            <h4 style={{color: '#b1b1b1'}}>July</h4>
                        </div>
                        <div className="aug">
                            <h4 style={{color: '#b1b1b1'}}>Aug</h4>
                        </div>
                        <div className="sep">
                            <h4 style={{color: '#b1b1b1'}}>Sep</h4>
                        </div>
                        <div className="oct">
                            <h4><strong>Oct</strong></h4>
                        </div>
                        <div className="nov">
                            <h4 style={{color: '#b1b1b1'}}>Nov</h4>
                         </div>
                    </div>*/}

                    <div className="six-main">
                        <div className="sixth">
                            <div className="six-plan">
                                <h5 style={{color: '#b1b1b1'}}>Plan for 2020</h5>
                                <h4 style={{color: 'white'}}><strong>Completed</strong></h4>
                            </div>
                            <div className="six-percent">
                                <img src={Download} alt="admin" id="avatar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            </div>
        );
    }
}

export default Aside;
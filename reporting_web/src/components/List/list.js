import React, { Component } from 'react';
import './list.css';
import ReportingClient from '../../reporting_client';

class List extends Component {
    constructor(props) {
        super(props);
        this.reporting_client = new ReportingClient();
        this.state = {reports:[]};
    };

    reportsChanged = (reports) =>  {
        this.setState({
            reports
        })
    };

    componentDidMount(){
        this.reporting_client.monitorReports(this.reportsChanged);
    }

    render() {
        var reports = [];
        var teaser = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.";


        for (var report in this.state.reports) {
           // if (Object.hasOwnProperty(report)) {
            console.log(this.state.reports[report])
            var threadId = this.state.reports[report].threads ? this.state.reports[report].threads[1] : 0;
            var threadCurrentReport = this.state.reports[report].text;

            reports.push( <div onClick={this.props.setCurrentThread.bind(this, threadId, threadCurrentReport)} key={threadId} className="listElement">
                <h3>{this.state.reports[report].text}</h3>
                <p>{teaser.substring(0,45)}...</p>
                <div>
                    <span>10.11.2016</span>
                    <span><strong>20:11 Uhr</strong></span>

                    <div className="attachment">
                        <i className="ion-ios-images"></i>
                        <i className="ion-ios-videocam"></i>
                        <i className="ion-ios-pin"></i>
                    </div>

                </div>
            </div>)
         //   }
        }


        return (
            <div className="unansweredList">
                {reports}

            </div>
        );
    }
}

export default List;
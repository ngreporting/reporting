import React, { Component } from 'react';
import './list.css';
import ReportingClient from '../../reporting_client';
import ReportRow from '../ReportRow/reportRow';

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
        var reports = this.state.reports.map((report) => {
            return (
                <div onClick={this.props.setCurrentThread.bind(this, null, report.uid)} key={report.uid}>
                    <ReportRow selected={report.uid == this.props.currentReport} report={report} />
                </div>
            );
        });

        return (
            <div className="unansweredList">
                {reports}
            </div>
        );
    }
}

export default List;
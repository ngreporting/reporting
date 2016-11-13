import React, { Component } from 'react';
import '../List/list.css';
import ReportingClient from '../../reporting_client';
import MonitoringReportRow from '../MonitoringReportRow/monitoringReportRow';



class FavList extends Component {
    constructor(props) {
        super(props);
        this.reporting_client = new ReportingClient();
        this.state = {threads:[]};
    };

    threadsChanged = (threads) =>  {
        this.setState({
            threads
        })
    };

    componentDidMount(){
        this.reporting_client.monitorThreads(this.threadsChanged);
    }

    render() {
        var threads = this.state.threads.map((thread) => {
            return (
                <div onClick={this.props.setCurrentThread.bind(this, thread.uid, thread.report )} key={thread.uid}>
                    <MonitoringReportRow selected={thread.uid == this.props.currentThread} reportUid={thread.report}  />
                </div>
            )
        });

        return (
            <div className="favList">
                {threads}
            </div>

        );
    }
}

export default FavList;
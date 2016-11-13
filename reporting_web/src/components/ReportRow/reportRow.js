import React, { Component } from 'react';
import moment from "moment"

class ReportRow extends Component {

    render(){
        var date =  moment(this.props.report.date);

        return (
        <div className={`favElement ${this.props.selected ? 'active' : ''}`}>
            <p>{this.props.report.text}</p>
            <div>
                <span>{date.format("DD.MM.YYYY")}</span>
                <span><strong>{date.format("HH:mm")} Uhr</strong></span>

                <div className="attachment">
                    <i className="ion-ios-images"></i>
                </div>

            </div>
        </div>
        );

    }
}

export default ReportRow

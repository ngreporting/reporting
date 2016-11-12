import React, { Component } from 'react';
import '../List/list.css';


class FavList extends Component {
    render() {
        return (
            <div className="favList">
                <div className="favElement active">
                    <h3>Das ist die Headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    <div>
                        <span>10.11.2016</span>
                        <span><strong>20:11 Uhr</strong></span>

                        <div className="attachment">
                            <i className="ion-ios-images"></i>
                        </div>

                    </div>
                </div>

                <div className="favElement">
                    <h3>Das ist die Headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    <div>
                        <span>10.11.2016</span>
                        <span><strong>20:11 Uhr</strong></span>

                        <div className="attachment">
                            <i className="ion-ios-images"></i>
                            <i className="ion-ios-videocam"></i>
                            <i className="ion-ios-pin"></i>
                        </div>

                    </div>
                </div>

                <div className="favElement">
                    <h3>Das ist die Headline</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                    <div>
                        <span>10.11.2016</span>
                        <span><strong>20:11 Uhr</strong></span>

                        <div className="attachment">
                            <i className="ion-ios-images"></i>
                            <i className="ion-ios-videocam"></i>
                            <i className="ion-ios-pin"></i>
                        </div>

                    </div>
                </div>


            </div>

        );
    }
}

export default FavList;
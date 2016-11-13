import React, { Component } from 'react';
import './App.css';
import ReportingClient from './reporting_client';
import ReportingConfig from './config';
import ListHeader from './components/ListHeader/listHeader';
import FavList from './components/FavList/favList';
import List from './components/List/list';
import Chat from './components/Chat/chat';


class App extends Component {
    constructor(props) {
        super(props);
        var client = new ReportingClient(ReportingConfig);
        client.login('mustermann@swr.de', '123123123', false);

        this.state = {threadId: null, threadCurrentReport: null};
    };

    setCurrentThread = (threadId,threadCurrentReport) => {
      this.setState({threadId:threadId, threadCurrentReport:threadCurrentReport})
    };

  render() {
    return (
      <div className="App">

        <div className="listView">
            <ListHeader/>
            <div className="listContent">
                <FavList/>
                <List setCurrentThread={this.setCurrentThread}/>
            </div>

          </div>

        <div className="chatView">
            <Chat threadId={this.state.threadId} threadCurrentReport={this.state.threadCurrentReport}/>
        </div>

      </div>
    );
  }
}

export default App;

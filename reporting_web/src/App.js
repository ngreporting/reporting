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

        this.state = {currentThread: null, currentReport: null};
    };

    setCurrentThread (currentThread,currentReport) {
        this.setState({currentThread, currentReport})
        this.forceUpdate()
    };

  render() {
    return (
      <div className="App">

        <div className="listView">
            <ListHeader/>
            <div className="listContent">
                <FavList setCurrentThread={this.setCurrentThread.bind(this)} currentThread={this.state.currentThread}/>
                <List setCurrentThread={this.setCurrentThread.bind(this)} currentReport={this.state.currentReport}/>
            </div>

          </div>

        <div className="chatView">
            <Chat setCurrentThread={this.setCurrentThread.bind(this)} currentThread={this.state.currentThread} currentReport={this.state.currentReport}/>
        </div>

      </div>
    );
  }
}

export default App;

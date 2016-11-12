import React, { Component } from 'react';
import './App.css';
import ListHeader from './components/ListHeader/listHeader';
import FavList from './components/FavList/favList';
import List from './components/List/list';
import Chat from './components/Chat/chat';


class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="listView">
            <ListHeader/>
            <div className="listContent">
                <FavList/>
                <List/>
            </div>

          </div>

        <div className="chatView">
            <Chat/>
        </div>

      </div>
    );
  }
}

export default App;

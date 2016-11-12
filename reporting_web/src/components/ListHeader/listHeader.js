import React, { Component } from 'react';
import './listHeader.css';


class ListHeader extends Component {
    render() {
        return (
            <div className="listHeader">
                <div className="header">
                    <img alt="Profilbild" src="/img/profile.jpg"/>
                </div>
                <div className="search">
                    <label htmlFor="search">
                        <i className="searchIcon ion-ios-search-outline"></i>
                    </label>
                    <input classID="search" placeholder="Suchen" type="text"/>
                    <i className="searchIcon ion-ios-options"></i>
                </div>
            </div>

        );
    }
}

export default ListHeader;
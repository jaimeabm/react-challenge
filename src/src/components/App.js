import React, { Component, PropTypes } from 'react';
import { SearchContainer, AlbumsContainer } from './Containers'
//import AlbumList from './ui/AlbumList'

class App extends Component {

    componentWillMount() {
        console.log("componentWillMount")
    }

    render() {

        return (
            <div>
                <SearchContainer />
                <AlbumsContainer />
            </div>
            
        );
    }
}

App.contextTypes = { store: React.PropTypes.object };

export default App
import React, { Component, PropTypes } from 'react';
import Search from './ui/Search'
import AlbumList from './ui/AlbumList'

class App extends Component {
    
    componentWillMount() {
        console.log("componentWillMount")
    }

    render() {
        console.log('props: ');
        console.log(this.props);

        return (
            <div>
                <Search />
                <AlbumList />
            </div>
            // <ul>
            //     {this.props.items.map((item) => (
            //         <li key={item.id}>
            //             {item.label}
            //         </li>
            //     ))}
            // </ul>
        );
    }
}

export default App
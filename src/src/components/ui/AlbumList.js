import React, { Component, PropTypes } from 'react';
import AlbumItem from './AlbumItem'

// const AlbumList = ({ feed = {}, filterBy = "", hasErrors = false, isLoading = false, fetchData = f=>f }) =>
//     <div className="container">
//         {
//             hasErrors ?
//                 <p>Errors, unable to pull the data</p> :
//                 isLoading ?
//                     <p>Loading Data</p> :                    
//                     <div className="row text-center list-group">
//                         {feed.entry !== undefined && feed.entry.length === 0 ?
//                             <p>No Albums to display.</p> :
//                             filterBy ?
//                                 feed.entry.filter(e => e['im:artist'].label.indexOf(filterBy) > -1).map((e, i) => <AlbumItem key={i} {...e} />) :
//                                 feed.entry.map((e, i) => <AlbumItem key={i} {...e} />)
//                         }
//                     </div>                
//         }
//     </div>
// AlbumList.componentDidMount = () => {
//     console.log("componentDidMount event in AlbumList Componenet")
//     fetchData('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
// };

class AlbumList extends Component {
    componentDidMount() {
        console.log("componentDidMount event in AlbumList Component")
        this.props.fetchData('https://itunes.apple.com/us/rss/topalbums/limit=99/json');
    }

    render() {
        const hasErrors = this.props.hasErrors
        const isLoading = this.props.isLoading
        const entry = Object.keys(this.props.data).length === 0 ? null : this.props.data.feed.entry
        const filterBy = this.props.filterBy
        return (
            <div className="row">
                {
                    hasErrors ?
                        <p>Errors, unable to pull the data</p> :
                        isLoading ?
                            <p>Loading Data</p> :
                            entry === null || entry.length === 0 ?
                                <p>No Albums to display.</p> :
                                filterBy !== "" ?
                                    entry.filter(e => e['im:artist'].label.toLowerCase().indexOf(filterBy.toLowerCase()) > -1)
                                        .map((e, i) => <AlbumItem key={i} {...e} />) :
                                    entry.map((e, i) => <AlbumItem key={i} {...e} />)                            
                }
            </div>
        )
    }
}


export default AlbumList
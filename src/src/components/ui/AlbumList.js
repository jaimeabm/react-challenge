import React, { Component, PropTypes } from 'react';
import AlbumItem from './AlbumItem'


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
                        isLoading == true ?
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
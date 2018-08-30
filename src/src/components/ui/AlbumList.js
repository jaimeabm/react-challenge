import AlbumItem from './AlbumItem'

import PropTypes from 'prop-types'

const AlbumList = ({ feed = {}, filterBy = "" }) =>
    <div className="container">
        <div className="row text-center list-group">
            {
                (feed.entry.length === 0) ?
                <p>No Albums to display.</p> :
                (filterBy) ?
                    feed.entry.filter(e => e['im:artist'].label.indexOf(filterBy) > -1 ).map((e, i) => <AlbumItem key={i} {...e} />):
                    feed.entry.map((e, i) => <AlbumItem key={i} {...e} />)
            }
        </div>
    </div>
    

export default AlbumList
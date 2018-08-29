import AlbumItem from './AlbumItem'

import PropTypes from 'prop-types'

const AlbumList = () =>
    <div className="container">
        <div className="row text-center list-group">
        {
            [0,1,2,3,4].map( key =>
                
                    <AlbumItem key={key} />
               
            )
        }
         </div>
    </div>

export default AlbumList
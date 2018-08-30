import { connect } from 'react-redux'
import Search from './ui/Search'
import AlbumList from './ui/AlbumList'
import { filterByText } from '../Actions'

export const SearchContainer = connect(
    null,
    dispatch =>
        ({
            onFilter(text) {
                dispatch(filterByText(text))
            }
        })
)(Search)


export const AlbumsContainer = connect(
    state =>
        ({
            filterBy: state.filterBy,
            feed: state.feed
        }),
    dispatch =>
        ({  })
)(AlbumList)

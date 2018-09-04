import { connect } from 'react-redux'
import Search from './ui/Search'
import AlbumList from './ui/AlbumList'
import { filterByText, itemsFetchData } from '../Actions'

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
            data: state.data,
            hasErrors: state.hasErrored,
            isLoading: state.isLoading,
        }),
    dispatch =>
        ({  
            fetchData: (url) => {
                dispatch(itemsFetchData(url))
            }
        })
)(AlbumList)

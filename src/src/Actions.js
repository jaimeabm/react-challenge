import C from './Constants'
import { v4 } from 'uuid'

export const filterByText = (text) =>
    ({
        type: C.FILTER,
        text
    })

export const itemsHasErrored = (hasErrored) =>
    ({
            type: C.HAS_ERRORED,
            hasErrored
    })

export const itemsIsLoading = (isLoading) =>
    ({
            type: C.IS_LOADING,
            isLoading
    })

export const loadData = (feed) =>
    ({
        type: C.LOAD,
        feed
    })
    
export const getData = (url) =>
    ({
        type: C.FETCH,
        url
    })

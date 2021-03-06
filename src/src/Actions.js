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

export const isLoading = (isLoading) =>
    ({
        type: C.IS_LOADING,
        isLoading
    })

export const fetchDataSuccess = (data)=>
    ({
        type: C.FETCH_DATA_SUCCESS,
        data
    })

export const itemsFetchData = (url) => (dispatch) => 
    {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText)}
                dispatch(isLoading(false));
                return response;
            })
            .then((res) => res.json())
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch(() => {
                console.log('error');
                dispatch(isLoading(true));
            });
    }

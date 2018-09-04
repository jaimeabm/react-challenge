import C from '../Constants'

export const filterBy = (state = "", action) => {
    switch (action.type) {
        case C.FILTER:
            return action.text
        default :
            return state
    }
}

export const hasErrored = (state = false, action) => {
    switch (action.type) {
        case C.itemsHasErrored:
            return action.hasErrored;
        default:
            return state;
    }
}

export const isLoading = (state = true, action) => {
    console.log("action.isLoading" + action)
    switch (action.type) {
        case C.IS_LOADING:            
            return action.isLoading;
        default:
            return state;
    }
}

export function data(state = {}, action) {
    switch (action.type) {
        case C.FETCH_DATA_SUCCESS:
            return action.data;
        default:
            return state;
    }
}
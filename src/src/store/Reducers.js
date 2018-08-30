import C from '../Constants'

export const filterBy = (state = "", action) => {
    switch (action.type) {
        case C.FILTER:
            return action.text
        default :
            return state
    }
}

export const feed = (state = {}, action) => {
    switch (action.type) {
        case C.LOAD:
            return {}
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
export const isLoading = (state = false, action) => {
    switch (action.type) {
        case C.itemsIsLoading:
            return action.isLoading;
        default:
            return state;
    }
}

export const fetchData = (state = "", action) => {
    switch (action.type) {
        case C.FETCH:
            return action.url
        default :
            return state
    }
}
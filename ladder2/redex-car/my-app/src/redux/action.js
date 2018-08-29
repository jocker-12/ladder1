import * as actionType from './actionTypes';
export const listData = (payload) => {
    return {
        type: actionType.LIST_DATA,
        payload
    }
}
export const addCount = (payload) => {
    return {
        type: actionType.ADD_COUNT,
        payload
    }
}
export const subCount = (payload) => {
    return {
        type: actionType.SUB_COUNT,
        payload
    }
}
export const isChecked = (payload) => {
    return {
        type: actionType.IS_CHECKED,
        payload
    }
}
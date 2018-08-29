import * as actionType from './actionTypes';
const initState = {
    list: []
}
let setList = (state, action) => {
    switch (action.type) {
        case actionType.LIST_DATA:
            console.log('我被选择了', action.payload);
            return action.payload
        case actionType.ADD_COUNT:
            let index = action.payload;
            state[index].count++;
            return [...state]
        case actionType.SUB_COUNT:
            let ind = action.payload;
            state[ind].count--;
            return [...state]
        case actionType.IS_CHECKED:
            let i = action.payload;
            state[i].isChecked = !state[i].isChecked
            return [...state]
        default:
            return state
    }
}
export default (state = initState, action) => {
    return {
        list: setList(state.list, action)
    }
}
import {
    carList,
    getBrandList
} from '../../api/index';
const state = {
    index_data: ''
}
const mutactions = {
    getIndex_data: (state) => {
        state.index_data = carList();
    }
}

const actions = {
    getIndex_data: (context) => {
        context.commit('getIndex_data');
    }
}
export default {
    state,
    mutactions,
    actions
}
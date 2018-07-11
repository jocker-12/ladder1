import {
    getData
} from './ajax';
const state = {
    list: [],
    price: '',
    SelectAll: false
}
const mutations = {
    setList: (state, {
        list
    }) => {
        state.list = list;
        console.log(state.list);
    },
    changeNum: (state, {
        ind,
        type
    }) => {
        if (type == '+') {
            state.list[ind].count++;
        } else {
            if (state.list[ind].count > 0) {
                state.list[ind].count--;
            }
        }
    },
    getPrice: (state) => {
        let num = 0;
        state.list.forEach((item, index) => {
            if (item.ischecked && item.count > 0) {
                num += item.count * item.pic
            }
        })
        state.price = num;
    },
    changeItem: (state, {
        index
    }) => {
        state.SelectAll = true
        state.list[index].ischecked = !state.list[index].ischecked;
        state.list.forEach((item, index) => {
            if (!item.ischecked) {
                state.SelectAll = false;
            }
        })
    },
    isSelectAll: (state) => {
        state.SelectAll = !state.SelectAll;
        state.list.forEach((item, index) => {
            item.ischecked = state.SelectAll
        })
    }
}
const actions = {
    setList(context) {
        getData().then(res => {
            res.json().then(body => {
                let arr = body.data.list;
                arr.forEach((item, index) => {
                    item.ischecked = false
                })
                context.commit('setList', {
                    list: body.data.list
                });
            })
        })
    },
    changeNum(context, payload) {
        context.commit('changeNum', payload);
        context.commit('getPrice');
    },
    changeItem(context, payload) {
        context.commit('changeItem', payload);
        context.commit('getPrice');
    },
    isSelectAll(context) {
        context.commit('isSelectAll');
        context.commit('getPrice');
    }
}
export default {
    state,
    mutations,
    actions
}
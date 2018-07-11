const state = {
    input: '',
    list: [],
    all: []
};
const mutations = {
    setInput: (state, {
        value
    }) => {
        state.input = value
    },
    setList: (state, {
        id
    }) => {
        let obj = {
            id: id,
            text: state.input,
            isOver: false
        }
        state.list.push({
            ...obj
        });
    },
    setIsOver: (state, {
        ind
    }) => {
        state.list.forEach((item, index) => {
            if (item.id === ind) {
                item.isOver = !item.isOver;
            }
        });
    },
    removeItem: (state, {
        ind,
        type
    }) => {
        state.list.forEach((item, index) => {
            if (item.id === ind) {
                state.list.splice(index, 1);
            }
        })
    },
    filters: (state, {
        over
    }) => {
        let arr = [];
        arr = state.list.filter((item, index) => {
            switch (over) {
                case '已完成':
                    return item.isOver
                    break;
                case '未完成':
                    return !item.isOver
                    break;
                case '全部':
                    return item
                    break;
                default:
                    break;
            }
        });
        state.all = arr;
    }
};
const actions = {};
export default {
    state,
    mutations,
    actions
}
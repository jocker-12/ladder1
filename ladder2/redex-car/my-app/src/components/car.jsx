import React, { Component } from 'react';
import * as action from '../redux/action';
import store from '../redux/store';
class List extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        store.dispatch((dispatch, getState) => {
            fetch('https://www.easy-mock.com/mock/5b303cb59766f8660232721b/ewks/asda').then(res => {
                res.json().then(body => {
                    dispatch(action.listData(body));
                    console.log('设置list', getState());
                })
            })
        })
    }
    changes(index) {

        store.dispatch(action.isChecked(index))
    }
    addCount(index) {
        store.dispatch(action.addCount(index))
    }
    subCount(index) {
        store.dispatch(action.subCount(index));
    }
    render() {
        let { list } = store.getState();
        console.log('获取list', list)
        return (
            <div>
                {
                    list.map((item, index) => {
                        return <div key={index}>
                            <span><input onChange={() => this.changes(index)} type="checkbox" checked={item.isChecked} /></span>
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <span onClick={() => { this.addCount(index) }}>+</span>
                            <span>{item.count}</span>
                            <span onClick={() => { this.subCount(index) }}>-</span>
                        </div>
                    })

                }

                <div style={{ "background": "red" }}>{}</div>
            </div>
        )
    }
}
export default List;
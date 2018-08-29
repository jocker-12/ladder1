// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as action from '../redux/action';
// class List extends Component {
//     componentDidMount() {
//         this.props.setLis();
//     }
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.list.map((item, index) => {
//                         return <div key={index}>
//                             <span><input onChange={() => this.props.changes(index)} type="checkbox" checked={item.isChecked} /></span>
//                             <span>{item.name}</span>
//                             <span>{item.price}</span>
//                             <span onClick={() => { this.props.addCount(index) }}>+</span>
//                             <span>{item.count}</span>
//                             <span onClick={() => { this.props.subCount(index) }}>-</span>
//                         </div>
//                     })

//                 }
//                 <div style={{ "background": "red" }}>{this.props.num}</div>
//             </div>
//         )
//     }
// }


// const mapStateToProps = (state, ownProps) => {
//     let num = 0;
//     state.list.forEach((item, i) => {
//         if (item.isChecked) {
//             num += (item.price * item.count)
//         }
//     })
//     return {
//         list: state.list,
//         num: num,
//         ...ownProps
//     }
// }
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         setLis: () => {
//             dispatch(
//                 (dispatch, getState) => {
//                     console.log('state', getState);
//                     fetch('https://www.easy-mock.com/mock/5b303cb59766f8660232721b/ewks/asda').then(
//                         res => {
//                             res.json().then(body => {
//                                 dispatch(action.listData(body))
//                             })
//                         }
//                     )
//                 }
//             )
//         },
//         addCount: (index) => {
//             dispatch(action.addCount(index))
//         },
//         subCount: (index) => {
//             dispatch(action.subCount(index))
//         },
//         changes: (index) => {
//             dispatch(action.isChecked(index))
//         },
//         ...ownProps
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(List);
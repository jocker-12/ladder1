import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './components/car';
import store from './redux/store';
let render = () => ReactDOM.render(<Cart />, document.getElementById('root'));
render();
store.subscribe(render)